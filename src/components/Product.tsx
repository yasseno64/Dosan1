const Product = () => {
  return (
    <div className="bg-white py-12 px-6 dir-rtl text-right font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-start justify-between">
        <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-t-2 border-[#10b981] border-r border-r-gray-100 p-6 flex flex-col justify-between min-h-[220px]">
            <div>
              <span className="text-[#10b981] text-xs font-semibold block mb-2">
                الأداة -٢
              </span>
              <h3 className="text-[#0f2d3c] text-lg font-bold mb-3">
                IDEC حاسبة توفير
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                مقارنة IntrCooll بأنظمة DX — الكهرباء وتكلفة التشغيل والانبعاثات
                المتجنبة.
              </p>
            </div>
            <div className="group cursor-pointer hover:text-[#1cd2ad] text-[#0D7A62]">
              <p className="mt-7 text-xs">
                <span className="mr-3 inline-block transition-transform duration-300 group-hover:-translate-x-5">
                  ←
                </span>
                اكتشف خدمتنا
              </p>
            </div>
          </div>

          <div className="border-t-2 border-[#0D7A62] p-6 flex flex-col justify-between min-h-[220px]">
            <div>
              <span className="text-[#10b981] text-xs font-semibold block mb-2">
                الأداة -١
              </span>
              <h3 className="text-[#0f2d3c] text-lg font-bold mb-3">
                VRF حاسبة
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                مقارنة VRF من Hisense بالنظام التقليدي — السعة والميزانية
                التقديرية.
              </p>
            </div>
            <div className="group cursor-pointer hover:text-[#1cd2ad] text-[#0D7A62]">
              <p className="mt-7 text-xs">
                <span className="mr-3 inline-block transition-transform duration-300 group-hover:-translate-x-5">
                  ←
                </span>
                اكتشف خدمتنا
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 flex flex-col items-end ">
          <span className="text-[#10b981] text-xs font-semibold block mb-2">
            الحاسبات
          </span>
          <h2 className="text-[#0f2d3c] text-2xl md:text-3xl font-bold leading-snug mb-4 tracking-widest">
            اكتشف ما يمكن أن يوفره تبريد أفضل
          </h2>
          <p className="text-gray-500 text-xs leading-relaxed mb-6">
            أداتان هندسيتان بافتراضات معلنة. قارن أنظمة VRF من Hisense بالنظام
            التقليدي، أو IntrCooll بأنظمة DX من حيث الكهرباء والتكلفة
            والانبعاثات.
          </p>
          <a
            href="#"
            className="text-[#0f2d3c] text-xs font-semibold flex items-center gap-1 hover:text-[#10b981] transition"
          >
            <div className="group cursor-pointer hover:text-[#1cd2ad] text-[#0D7A62]">
              <p className="mt-7 text-xs">
                <span className="mr-3 inline-block transition-transform duration-300 group-hover:-translate-x-5">
                  ←
                </span>
                اكتشف خدمتنا
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
