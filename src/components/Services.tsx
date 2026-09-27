import React from "react";

interface ServiceItem {
  id: string;
  href: string;
  imgSrc: string;
  title: string;
  desc: string;
  alt?: string;
}

interface CardItemProps {
  item: ServiceItem;
  tabIndex?: number;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "kitchen",
    href: "/ar/services/kitchen/",
    imgSrc: "https://dosanenergy.com/assets/dosan-oxycom-units.webp",
    title: "هواء التعويض للمطابخ",
    desc: "هواء تعويض مبرد ومُرشّح للمطابخ التجارية.",
    alt: "هواء التعويض للمطابخ",
  },
  {
    id: "idec",
    href: "/ar/services/idec/",
    imgSrc: "https://dosanenergy.com/assets/dosan-hero.webp",
    title: "تقنية IDEC من Oxycom",
    desc: "تبريد تبخيري غير مباشر — الشريك الحصري لـ Oxycom في المملكة.",
    alt: "تقنية IDEC من Oxycom",
  },
  {
    id: "precooll",
    href: "/ar/services/precooll/",
    imgSrc: "https://dosanenergy.com/assets/dosan-damac-precooll.webp",
    title: "التبريد المسبق للمبردات PreCooll",
    desc: "تبريد مسبق أدياباتي لهواء المكثفات — حتى ٢٥ درجة مئوية.",
    alt: "التبريد المسبق للمبردات PreCooll",
  },
  {
    id: "vrf",
    href: "/ar/services/vrf/",
    imgSrc: "https://dosanenergy.com/assets/dosan-vrf-hero.webp",
    title: "أنظمة VRF من Hisense",
    desc: "تدفق متغير لمركّب التبريد للمباني متعددة المناطق، بحسابات مسبقة.",
    alt: "أنظمة VRF من Hisense",
  },
  {
    id: "coatings",
    href: "/ar/services/coatings/",
    imgSrc: "https://dosanenergy.com/assets/dosan-coating-hero.webp",
    title: "طلاءات توفير الطاقة للتكييف",
    desc: "طلاءات Enercoat للملفات ضمن أعمال تحسين الكفاءة.",
    alt: "طلاءات توفير الطاقة للتكييف",
  },
  {
    id: "analytics",
    href: "/ar/services/analytics/",
    imgSrc: "https://dosanenergy.com/assets/dosan-analytics-hero.webp",
    title: "تحليلات المباني وكشف الأعطال",
    desc: "كشف الأعطال وتشخيصها على الأنظمة العاملة.",
    alt: "تحليلات المباني وكشف الأعطال",
  },
  {
    id: "mep",
    href: "/ar/services/mep/",
    imgSrc: "https://dosanenergy.com/assets/dosan-mep-hero.webp",
    title: "خدمات MEP",
    desc: "التركيب والتشغيل والصيانة بعقد واحد.",
    alt: "خدمات MEP",
  },
  {
    id: "engineering",
    href: "/ar/services/engineering/",
    imgSrc: "https://dosanenergy.com/assets/dosan-psau-chillers.webp",
    title: "الهندسة والتصميم",
    desc: "حسابات الأحمال والاختيار والمخططات.",
    alt: "الهندسة والتصميم",
  },
];

const CardItem: React.FC<CardItemProps> = ({ item, tabIndex }) => {
  const { href, imgSrc, title, desc, alt = "" } = item;

  return (
    <a
      href={href}
      tabIndex={tabIndex}
      className="group relative block flex-none w-[clamp(260px,26vw,380px)] h-[clamp(320px,34vw,460px)] overflow-hidden rounded-[10px] text-white transition-all"
    >
      <img
        src={imgSrc}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover rounded-[10px] transition-transform duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
      />

      <span className="absolute inset-0 bg-gradient-to-b from-[#003743]/15 via-[#003743]/35 to-[#003743]/86 pointer-events-none" />

      <span className="absolute left-0 right-0 bottom-0 p-[clamp(18px,2vw,26px)] flex flex-col gap-2 dir-rtl text-right">
        <span className="text-[clamp(14.1px,1.2vw,18.2px)] font-semibold leading-snug tracking-tight">
          {title}
        </span>
        <span className="text-sm leading-relaxed text-white/80">{desc}</span>
        <div className="group cursor-pointer hover:text-[#1cd2ad] text-[#0D7A62]">
          <p className="mt-7 text-xs">
            <span className="mr-3 inline-block transition-transform duration-300 group-hover:-translate-x-5">
              ←
            </span>
            استكشف
          </p>
        </div>
      </span>
    </a>
  );
};


const ServicesHeader: React.FC = () => {
  return (
    <div
      dir="rtl"
      className="mx-auto w-full max-w-[1400px] px-[clamp(16px,4vw,64px)] pt-[clamp(28px,6vw,72px)] pb-[clamp(24px,4vw,48px)] flex flex-col md:flex-row md:items-end md:justify-between gap-6"
    >
     

        <div className="order-1 md:order-1 text-right">
        <div className="flex items-center justify-start gap-2 text-[#1cd2ad] text-xs md:text-sm mb-2">
          الخدمات
          <span className="w-6 h-px bg-[#1cd2ad]" />
        </div>
        
        <h2 className="text-white text-[clamp(28px,4vw,42px)] font-bold leading-tight">
          مجالات أعمالنا
        </h2>
      </div>


      <div className="order-2 md:order-1 max-w-md text-right md:text-right">
        <p className="text-white/70 text-sm md:text-[15px] leading-relaxed">
          خمس طرق لتخفيض تكلفة التبريد — فريق واحد مسؤول.
        </p>
        <a
          href="/ar/contact/"
          className="mt-4 inline-flex items-center gap-3 text-white/90 text-sm hover:text-[#1cd2ad] transition-colors group"
        >
          اطلب تقييمًا لموقعك
          <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
        </a>
      </div>


      
    </div>
        
  );
};

const Services: React.FC = () => {
  return (
    <div className="w-full bg-slate-900">

      <div className="m-0">
        <ServicesHeader />
      </div>

      <div className="m-0 marquee-wrapper overflow-hidden w-full">
        <div className="flex w-max ltr animate-marquee marquee-track will-change-transform">
          <div className="flex gap-[clamp(16px,2vw,28px)] pr-[clamp(16px,2vw,28px)]">
            {SERVICES_DATA.map((service) => (
              <CardItem key={service.id} item={service} />
            ))}
          </div>

          <div
            className="flex gap-[clamp(16px,2vw,28px)] pr-[clamp(16px,2vw,28px)]"
            aria-hidden="true"
          >
            {SERVICES_DATA.map((service) => (
              <CardItem key={`dup-${service.id}`} item={service} tabIndex={-1} />
            ))}
          </div>
        </div>
      </div>
      <div className="h-[100px]"></div>
    </div>
  );
};

export default Services;