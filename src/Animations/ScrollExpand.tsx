import { useCallback, useEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";

const clamp = (v: number, a: number, b: number): number =>
  v < a ? a : v > b ? b : v;

const smoothstep = (
  edge0: number,
  edge1: number,
  x: number,
): number => {
  const t = clamp((x - edge0) / (edge1 - edge0 || 1e-6), 0, 1);
  return t * t * (3 - 2 * t);
};

type ConfigKey =
  | "startWidth"
  | "startHeight"
  | "startRadius"
  | "endRadius"
  | "mediaZoom"
  | "scrollDistance"
  | "holdDistance"
  | "smoothing"
  | "overlayScrim"
  | "useWindowScroll"
  | "enabled"
  | "lockScroll";

export interface ScrollExpandProps {
  src?: string;
  mediaType?: "image" | "video";
  poster?: string;
  alt?: string;
  title?: string;
  scrollHint?: string;

  startWidth?: number;
  startHeight?: number;
  startRadius?: number;
  endRadius?: number;
  mediaZoom?: number;

  scrollDistance?: number;
  holdDistance?: number;
  smoothing?: number;

  overlayScrim?: number;

  useWindowScroll?: boolean;
  enabled?: boolean;

  // NEW
  lockScroll?: boolean;

  children?: ReactNode;
  className?: string;
  style?: CSSProperties;

  [key: string]: unknown;
}

const ScrollExpand: React.FC<ScrollExpandProps> = ({
  src = "",
  mediaType = "image",
  poster = "",
  alt = "",
  title = "",
  scrollHint = "",

  startWidth = 42,
  startHeight = 58,
  startRadius = 24,
  endRadius = 0,
  mediaZoom = 1.35,

  scrollDistance = 1.2,
  holdDistance = 0.35,
  smoothing = 0.1,

  overlayScrim = 0.45,

  useWindowScroll = false,
  enabled = true,

  // NEW
  lockScroll = false,

  children,
  className = "",
  style,
  ...rest
}: ScrollExpandProps) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);

  const mediaRef = useRef<HTMLImageElement & HTMLVideoElement>(null);

  const titleRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const scrimRef = useRef<HTMLDivElement | null>(null);
  const hintRef = useRef<HTMLDivElement | null>(null);

  const propsRef = useRef<
    Required<Pick<ScrollExpandProps, ConfigKey>>
  >({} as Required<Pick<ScrollExpandProps, ConfigKey>>);

  propsRef.current = {
    startWidth,
    startHeight,
    startRadius,
    endRadius,
    mediaZoom,
    scrollDistance,
    holdDistance,
    smoothing,
    overlayScrim,
    useWindowScroll,
    enabled,
    lockScroll,
  };

  /*
   * ----------------------------------------
   * APPLY VISUAL PROGRESS
   * ----------------------------------------
   */

  const applyProgress = useCallback((p: number) => {
    const frame = frameRef.current;
    const media = mediaRef.current;

    if (!frame || !media) return;

    const c = propsRef.current;

    const e = smoothstep(0, 1, p);

    const w =
      c.startWidth + (100 - c.startWidth) * e;

    const h =
      c.startHeight + (100 - c.startHeight) * e;

    const ix = Math.max(0, (100 - w) / 2);
    const iy = Math.max(0, (100 - h) / 2);

    const r =
      c.startRadius +
      (c.endRadius - c.startRadius) * e;

    frame.style.clipPath =
      `inset(${iy}% ${ix}% ${iy}% ${ix}% round ${r}px)`;

    media.style.transform =
      `scale(${c.mediaZoom + (1 - c.mediaZoom) * e})`;

    if (scrimRef.current) {
      scrimRef.current.style.opacity =
        `${c.overlayScrim * e}`;
    }

    if (titleRef.current) {
      const out = smoothstep(0.4, 0.88, p);

      titleRef.current.style.opacity =
        `${1 - out}`;

      titleRef.current.style.transform =
        `translate3d(0, ${-28 * out}px, 0)
         scale(${1 + 0.06 * out})`;
    }

    if (hintRef.current) {
      const gone = smoothstep(0, 0.12, p);

      hintRef.current.style.opacity =
        `${1 - gone}`;

      hintRef.current.style.transform =
        `translate3d(0, ${8 * gone}px, 0)`;
    }
  }, []);

  /*
   * ----------------------------------------
   * MAIN EFFECT
   * ----------------------------------------
   */

  useEffect(() => {
    const root = rootRef.current;
    const track = trackRef.current;
    const stage = stageRef.current;

    if (!root || !track || !stage) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let raf = 0;

    let current = 0;
    let target = 0;

    let stageH = 0;

    let running = false;

    /*
     * When lockScroll is enabled,
     * this value represents our own animation progress.
     */
    let lockedProgress = 0;

    /*
     * ----------------------------------------
     * MEASURE
     * ----------------------------------------
     */

    const measure = () => {
      const c = propsRef.current;

      stageH = c.useWindowScroll
        ? window.innerHeight
        : root.clientHeight;

      if (stageH <= 0) return;

      stage.style.height = `${stageH}px`;

      track.style.height =
        `${stageH *
          (
            1 +
            Math.max(0, c.scrollDistance) +
            Math.max(0, c.holdDistance)
          )}px`;

      const w = root.clientWidth || stageH;

      stage.style.setProperty(
        "--se-title-size",
        `${clamp(w * 0.075, 20, 84)}px`,
      );
    };

    /*
     * ----------------------------------------
     * READ NORMAL WINDOW SCROLL
     * ----------------------------------------
     */

    const readProgress = () => {
      const c = propsRef.current;

      if (!c.enabled) return 1;

      const span =
        stageH *
        Math.max(0.01, c.scrollDistance);

      if (c.useWindowScroll) {
        const top =
          track.getBoundingClientRect().top;

        return clamp(
          -top / span,
          0,
          1,
        );
      }

      return clamp(
        root.scrollTop / span,
        0,
        1,
      );
    };

    /*
     * ----------------------------------------
     * ANIMATION LOOP
     * ----------------------------------------
     */

    const tick = () => {
      const c = propsRef.current;

      const k =
        c.smoothing <= 0
          ? 1
          : 1 -
            Math.exp(
              -1 /
                (60 * c.smoothing),
            );

      current +=
        (target - current) * k;

      if (
        Math.abs(
          target - current,
        ) < 0.0004
      ) {
        current = target;
        running = false;
      }

      applyProgress(current);

      raf = running
        ? requestAnimationFrame(tick)
        : 0;
    };

    const kick = () => {
      if (running) return;

      running = true;

      if (!raf) {
        raf = requestAnimationFrame(tick);
      }
    };

    /*
     * ----------------------------------------
     * NORMAL SCROLL
     * ----------------------------------------
     */

    const onScroll = () => {
      const c = propsRef.current;

      /*
       * When we are controlling the scroll ourselves,
       * don't read window.scrollY.
       */
      if (
        c.lockScroll &&
        c.useWindowScroll
      ) {
        return;
      }

      target = readProgress();

      if (
        c.smoothing <= 0 ||
        reduceMotion
      ) {
        current = target;

        applyProgress(current);

        return;
      }

      kick();
    };

    /*
     * ----------------------------------------
     * LOCKED WHEEL CONTROL
     * ----------------------------------------
     */

    const onWheel = (event: WheelEvent) => {
      const c = propsRef.current;

      if (
        !c.lockScroll ||
        !c.useWindowScroll ||
        !c.enabled
      ) {
        return;
      }

      /*
       * Ignore tiny trackpad movements.
       */
      if (
        Math.abs(event.deltaY) < 0.1
      ) {
        return;
      }

      const direction =
        event.deltaY > 0 ? 1 : -1;

      /*
       * Animation speed.
       *
       * Smaller number =
       * more scrolling required.
       */
      const sensitivity = 0.0018;

      const nextProgress = clamp(
        lockedProgress +
          event.deltaY *
            sensitivity,
        0,
        1,
      );

      /*
       * If we're still inside the animation,
       * consume the wheel event.
       */
      if (
        (direction > 0 &&
          lockedProgress < 1) ||
        (direction < 0 &&
          lockedProgress > 0)
      ) {
        event.preventDefault();

        lockedProgress = nextProgress;

        target = lockedProgress;

        if (
          c.smoothing <= 0 ||
          reduceMotion
        ) {
          current = target;
          applyProgress(current);
        } else {
          kick();
        }

        return;
      }

      /*
       * Reached the end.
       *
       * Do NOT preventDefault.
       *
       * Browser is now free to continue
       * scrolling to the next section.
       */
    };

    /*
     * ----------------------------------------
     * RESIZE
     * ----------------------------------------
     */

    const onResize = () => {
      measure();

      if (
        propsRef.current.lockScroll &&
        propsRef.current.useWindowScroll
      ) {
        applyProgress(lockedProgress);
        return;
      }

      target = readProgress();

      current = target;

      applyProgress(current);
    };

    /*
     * ----------------------------------------
     * INITIALIZE
     * ----------------------------------------
     */

    measure();

    if (
      propsRef.current.lockScroll &&
      propsRef.current.useWindowScroll
    ) {
      lockedProgress = 0;
      target = 0;
      current = 0;
    } else {
      target = readProgress();
      current = target;
    }

    applyProgress(current);

    /*
     * ----------------------------------------
     * EVENTS
     * ----------------------------------------
     */

    const scroller =
      useWindowScroll
        ? window
        : root;

    scroller.addEventListener(
      "scroll",
      onScroll,
      { passive: true },
    );

    window.addEventListener(
      "resize",
      onResize,
    );

    /*
     * Wheel listener MUST be non-passive
     * because we call preventDefault().
     */
    if (
      useWindowScroll &&
      lockScroll
    ) {
      window.addEventListener(
        "wheel",
        onWheel,
        { passive: false },
      );
    }

    const ro =
      new ResizeObserver(onResize);

    ro.observe(root);

    /*
     * ----------------------------------------
     * CLEANUP
     * ----------------------------------------
     */

    return () => {
      if (raf) {
        cancelAnimationFrame(raf);
      }

      scroller.removeEventListener(
        "scroll",
        onScroll,
      );

      window.removeEventListener(
        "resize",
        onResize,
      );

      window.removeEventListener(
        "wheel",
        onWheel,
      );

      ro.disconnect();
    };
  }, [
    applyProgress,
    useWindowScroll,
    lockScroll,
  ]);

  /*
   * ----------------------------------------
   * MEDIA
   * ----------------------------------------
   */

  const media =
    mediaType === "video" ? (
      <video
        ref={mediaRef}
        className="absolute inset-0 h-full w-full origin-center select-none will-change-transform"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
      />
    ) : (
      <img
        ref={mediaRef}
        className="absolute inset-0 h-full w-full origin-center select-none object-cover will-change-transform"
        src={src}
        alt={alt}
        draggable={false}
      />
    );

  /*
   * ----------------------------------------
   * UI
   * ----------------------------------------
   */

  return (
    <div
      ref={rootRef}
      className={`
        relative h-full w-full
        ${
          useWindowScroll
            ? ""
            : "overflow-y-auto overflow-x-hidden overscroll-contain scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        }
        ${className}
      `.trim()}
      style={style}
      {...rest}
    >
      <div
        ref={trackRef}
        className="relative w-full"
      >
        <div
          ref={stageRef}
          className="sticky top-0 w-full overflow-hidden [--se-title-size:4rem]"
        >
          <div
            ref={frameRef}
            className="absolute inset-0 [clip-path:inset(21%_29%_21%_29%_round_24px)] will-change-[clip-path]"
          >
            {media}

            <div
              ref={scrimRef}
              className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_top,rgba(0,0,0,0.75),rgba(0,0,0,0.1)_45%,rgba(0,0,0,0.35)]"
            />

            {children ? (
              <div
                ref={overlayRef}
                className="absolute inset-0 flex flex-col items-center justify-center p-[6%] text-center"
              >
                {children}
              </div>
            ) : null}
          </div>

          {title ? (
            <div
              ref={titleRef}
              className="absolute inset-0 m-0 flex items-center justify-center px-[6%] text-center font-bold leading-none tracking-[-0.03em] text-white [font-size:var(--se-title-size)] [text-shadow:0_2px_24px_rgba(0,0,0,0.45)] pointer-events-none will-change-[opacity,transform]"
            >
              {title}
            </div>
          ) : null}

          {scrollHint ? (
            <div
              ref={hintRef}
              className="absolute inset-x-0 bottom-5 text-center text-[0.8125rem] tracking-[0.02em] text-white/55 pointer-events-none will-change-[opacity,transform]"
            >
              {scrollHint}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ScrollExpand;