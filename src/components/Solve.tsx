const Solve = () => {
  return (
    <div>
      <section dir="rtl" className="bg-[#F1F1EE] py-16 m-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center m-20">
          {/**Left Content */}
          <div>
            <span className="text-[#0D7A62] text-xs  ">
              الحل الرئيسي · هواء التعويض للمطابخ
            </span>
            <h1 className="text-[#0A3948] text-4xl mt-5 font-bold">
              مطابخ أبرد وفواتير أقل.
            </h1>

            <p className="mt-7 text-[#555555] text-[14px] leading-[1.8] text-right dir-rtl">
              كل متر مكعب تسحبه شفاطات المطبخ يجب أن يعود إلى الداخل. توفره وحدة
              <br />
              IntrCooll مبرداً ومُرشّحاً ونقياً ١٠٠٪ — بجزء بسيط من التكلفة
              الرأسمالية وتكلفة
              <br />
              التشغيل لوحدة هواء نقي تعمل بنظام DX، وبدون أي مركّب تبريد فوق
              المطبخ.
            </p>

            <div className="bg-[#f5f5f5] p-6   font-sans">
              <div className="max-w-3xl mx-auto">
                <div className="border-t border-b border-gray-200 py-4 flex items-center justify-start gap-3">
                  <span className="w-5 h-[2px] bg-[#10b981] inline-block"></span>
                  <p className="text-[#4a5568] text-[15px]">
                    هواء تعويض نقي ومبرد، أقل من حرارة الجو الخارجي بما يصل إلى
                    ٢٠ درجة مئوية
                  </p>
                </div>

                <div className="border-b border-gray-200 py-4 flex items-center justify-start gap-3">
                  <span className="w-5 h-[2px] bg-[#10b981] inline-block"></span>
                  <p className="text-[#4a5568] text-[15px]">
                    جزء بسيط من التكلفة الرأسمالية وتكلفة الكهرباء لوحدة هواء
                    نقي بنظام DX
                  </p>
                </div>

                <div className="border-b border-gray-200 py-4 flex items-center justify-start gap-3">
                  <span className="w-5 h-[2px] bg-[#10b981] inline-block"></span>
                  <p className="text-[#4a5568] text-[15px]">
                    تعمل بالفعل في مطاعم في مختلف مناطق المملكة
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-start gap-4">
                  <button className="bg-[#10b981] text-white px-6 py-2.5 rounded-xl font-medium text-sm hover:bg-[#0e9f6e] transition">
                    اطلاع على طريقة عمل هواء التعويض IntrCooll
                  </button>
                  <button className="border border-[#10b981] text-[#10b981] px-6 py-2.5 rounded-xl font-medium text-sm hover:bg-emerald-50 transition">
                    جميع الخدمات
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/** Right */}
          <div className="group relative w-full h-80 md:h-[600px] overflow-hidden rounded-2xl">
            <img
              src="https://dosanenergy.com/assets/dosan-khayal-restaurant.webp"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
              alt="hero-section"
            />

            <div className="absolute w-32 h-32 rounded-full bg-secondary/20 -bottom-6 -left-6 blur-xl"></div>

            <div className="absolute w-32 h-32 rounded-full bg-accent/20 -top-6 -right-6 blur-xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solve;
