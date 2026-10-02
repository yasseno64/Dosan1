import React from "react";

interface CTASectionProps {
  backgroundImageUrl?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  backgroundImageUrl = "https://dosanenergy.com/assets/dosan-cta.webp",
}) => {
  return (
    <section className="relative min-h-[480px] md:min-h-[520px] flex items-center justify-between overflow-hidden dir-rtl font-sans text-right px-6 md:px-16 lg:px-24 py-12">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
      >
        <div className="absolute inset-0 bg-[#043742]/80 backdrop-blur-[1px]" /></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center md:items-center justify-between gap-8 md:gap-12">
        <div className="shrink-0 w-full sm:w-auto flex justify-start md:justify-end">
          <a
            href="/ar/contact/"
            className="inline-flex items-center justify-center w-full sm:w-auto px-4 py-3.5 bg-[#1cd2ad] hover:bg-emerald-500 text-slate-950 text-[30px] sm:text-base rounded-md transition-all duration-300 shadow-lg hover:shadow-emerald-400/20 active:scale-98"
          >
            اطلب تقييماً لموقعك
          </a>
        </div>

        <div className="flex-1 max-w-2xl text-white">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
            هل أنت مستعد <br></br> لتخفيض تكلفة التبريد؟
          </h2>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
            أخبرنا عن مبناك. سيعود إليك أحد مهندسي دوسان للطاقة خلال يوم عمل
            <br></br> واحد بالخطوة التالية المناسبة.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
