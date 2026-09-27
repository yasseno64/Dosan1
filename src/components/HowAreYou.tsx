const services = [
  {
    title: "الهندسة والتصميم",
    description: "حساب الأحمال والاختيار والمخططات",
  },
  {
    title: "تنفيذ أعمال MEP",
    description: "التركيب والتشغيل",
  },
  {
    title: "التحاليل وكشف الأعطال",
    description: "الحفاظ على الأداء بعد التسليم",
  },
];

const HowAreYou = () => {
  return (
    <section dir="rtl" className="bg-[#f9f9f9] py-16 m-20">
      <h3 className="text-[#0D7A62] text-xs ">من نحن</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/**Left Content */}
        <div>
          <h1 className="text-[#0A3948] text-4xl  font-bold">
            فريق هندسي سعودي، مسؤول عن الرقم<br></br> في الفاتورة.
          </h1>
          <p className="mt-7 text-gray-700 text-[14px] leading-6 tracking-tight">
            تعمل دوسان للطاقة من الرياض في مختلف مناطق المملكة. نوفر أفضل تقنيات
            التبريد — التبريد التبخيري غير المباشر من Oxycom، وأنظمة VRF من
            Hisense، وطلاءات Ener.co — وننفذ النطاق كاملاً: الهندسة والتصميم،
            والتركيب، والتشغيل، والتحليلات، والصيانة.
          </p>
          <p className="mt-7 text-gray-700 text-[14px] leading-6 tracking-tight">
            فريق واحد مسؤول عن النتيجة، ولهذا تذكر دراسات الحالة لدينا نتائج
            الطاقة والتكلفة بدلاً من قوائم المعدات.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="border-t border-slate-200 pt-4 text-right"
              >
                <h3 className="text-sm font-medium text-[#315c6b]">
                  {service.title}
                </h3>

                <p className="mt-2 text-xs text-slate-500">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="group cursor-pointer hover:text-[#1cd2ad] text-[#0D7A62]">
            <p className="mt-7 text-xs">
              اكتشف خدمتنا
              <span className="mr-3 inline-block transition-transform duration-300 group-hover:-translate-x-5">
                ←
              </span>
            </p>
          </div>
        </div>
        {/** Right */}
        <div className="group relative w-full h-80 md:h-[600px] overflow-hidden rounded-2xl">
          <img
            src="https://dosanenergy.com/assets/dosan-hero.webp"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
            alt="hero-section"
          />

          <div className="absolute w-32 h-32 rounded-full bg-secondary/20 -bottom-6 -left-6 blur-xl"></div>

          <div className="absolute w-32 h-32 rounded-full bg-accent/20 -top-6 -right-6 blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HowAreYou;
