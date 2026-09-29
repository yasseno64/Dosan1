import ScrollExpand from "../Animations/ScrollExpand";
import heroImage from "../assets/dosan-hero.webp";

const Hero = () => {
  return (
    <section dir="rtl" className="relative w-full overflow-hidden">
      <div className="sticky top-0 h-screen">
        <ScrollExpand
          src={heroImage}
          alt="Dosan Energy Hero"
          title=""
          scrollHint=""
          useWindowScroll
          lockScroll
          mediaZoom={1.5}
          startWidth={100}
          startHeight={100}
          startRadius={0}
          endRadius={0}
          scrollDistance={1.2}
          holdDistance={0.35}
          smoothing={0.1}
          overlayScrim={0}
          enabled
        >
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10"
            style={{
              width: "min(64%, 900px)",
              background:
                "linear-gradient(90deg, rgba(0,55,67,0.82) 0%, rgba(0,55,67,0.5) 46%, rgba(0,55,67,0) 100%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10"
            style={{
              height: "min(55%, 2220px)",
              background:
                "linear-gradient(180deg, rgba(0,55,67,0) 0%, rgba(0,55,67,0.55) 55%, rgba(0,55,67,0.88) 100%)",
            }}
          />

          <div className="absolute inset-0 z-20 mx-auto flex max-w-7xl flex-col justify-between px-6 py-12 text-white">
            <div className="mb-20 flex items-center gap-2 sm:mb-12">
              <span className="h-[2px] w-6 bg-[#00e6a8]" />
              <span
                className="text-xs"
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "1.6px",
                  color: "rgba(255, 255, 255, 0.76)",
                }}
              >
                الرياض • المملكة العربية السعودية
              </span>
            </div>

            <div className="mb-[20px] flex flex-col items-start gap-2">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-[#00e6a8]" />
                <p
                  className="text-xs"
                  style={{
                    margin: 0,
                    fontWeight: 600,
                    letterSpacing: "1.4px",
                    color: "rgba(255, 255, 255, 0.76)",
                  }}
                >
                  هندسة سعودية • الشريك الحصري لـ OXYCOM في المملكة
                </p>
              </div>

              <h1 className="  lg:mr-[-125px] mr-[-40px]   max-w-[15ch] text-[min(clamp(41.3px,4.8vw,66.1px),8.8vh)] leading-none tracking-[clamp(-2px,-0.18vw,-0.6px)] font-bold text-white [text-wrap:balance] ">
                تبريد بتكلفة تشغيل أقل.
              </h1>

              {/* Description */}
              <p className="mt-[clamp(14px,2.4vh,32px)] mb-0 mx-0 max-w-[52ch] text-[clamp(14px,1.1vw,16px)] leading-[1.55] text-white/88 text-right">
                تقنية التبريد التبخيري غير المباشر IDEC من Oxycom، وأنظمة VRF من
                Hisense، وطلاءات Enercoat الموفرة للطاقة، وتحليلات المباني،
                وخدمات MEP الكاملة — تخفض دوسان للطاقة استهلاك كهرباء التبريد في
                أنحاء المملكة العربية السعودية، بتصميم وتنفيذ وصيانة من فريق
                هندسي واحد مقره الرياض.
              </p>

              <div className="pointer-events-auto mt-6 flex flex-row gap-3">
                <button className="inline-flex h-[52px] cursor-pointer items-center justify-center gap-2 rounded-md bg-[#1cd2ad] px-7 text-base font-semibold leading-none whitespace-nowrap text-[#00201a]">
                  اطلب تقييم الموقع ←
                </button>

                <button className="inline-flex h-[52px] cursor-pointer items-center justify-center gap-2 rounded-md border border-white/50 px-7 text-base font-semibold leading-none whitespace-nowrap text-white/80">
                  شاهد مشاريعنا ←
                </button>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-block mt-2 text-[11px] text-white/76">
                  انزل للاستكشاف
                </span>
                <span className="mt-5 text-[var(--secondary-500)] animate-bounce">
                  ↓
                </span>
              </div>
            </div>
          </div>
        </ScrollExpand>
      </div>
    </section>
  );
};

export default Hero;
