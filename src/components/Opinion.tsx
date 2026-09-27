const Opinion = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-16 dir-rtl text-right font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <a
            href="/ar/insights/"
            className="text-xs text-gray-500 hover:text-[#003743] flex items-center gap-2 transition-colors"
          >
            <span>←</span> جميع المقالات
          </a>

          <div>
            <div className="flex items-center gap-2 justify-end mb-2">
              <span className="text-xs text-[#00A887] font-medium">الرؤى</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#003743]">
              التبريد بلغة واضحة.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 flex flex-col divide-y divide-gray-100 border-t border-b border-gray-100">
            <a
              href="#"
              className="flex items-center justify-between py-5 gap-4 group"
            >
              <div className="flex-1">
                <span className="text-[11px] text-gray-400 uppercase tracking-wider block mb-1">
                  PRECOOLL
                </span>
                <h4 className="text-sm font-bold text-[#003743] group-hover:text-[#00A887] transition-colors leading-snug">
                  حلول PreCooll الأديباتية للمبردات القائمة والتركيبات الجديدة
                </h4>
              </div>
              <img
                src="https://dosanenergy.com/assets/dosan-damac-precooll.webp"
                alt="PreCooll"
                className="w-20 h-14 object-cover rounded-lg flex-shrink-0"
              />
            </a>

            <a
              href="#"
              className="flex items-center justify-between py-5 gap-4 group"
            >
              <div className="flex-1">
                <span className="text-[11px] text-gray-400 uppercase tracking-wider block mb-1">
                  الكفاءة
                </span>
                <h4 className="text-sm font-bold text-[#003743] group-hover:text-[#00A887] transition-colors leading-snug">
                  التبريد المسبق الأديباتي: الطريقة الذكية لرفع كفاءة المبردات
                </h4>
              </div>
              <img
                src="https://dosanenergy.com/assets/dosan-psau-chillers.webp"
                alt="الكفاءة"
                className="w-20 h-14 object-cover rounded-lg flex-shrink-0"
              />
            </a>

            <a
              href="#"
              className="flex items-center justify-between py-5 gap-4 group"
            >
              <div className="flex-1">
                <span className="text-[11px] text-gray-400 uppercase tracking-wider block mb-1">
                  المناخ السعودي
                </span>
                <h4 className="text-sm font-bold text-[#003743] group-hover:text-[#00A887] transition-colors leading-snug">
                  التصميم لصيف الرياض، لا لورقة المواصفات
                </h4>
              </div>
              <img
                src="https://dosanenergy.com/assets/dosan-analytics-hero.webp"
                alt="المناخ السعودي"
                className="w-20 h-14 object-cover rounded-lg flex-shrink-0"
              />
            </a>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-4 group cursor-pointer">
            <div className="overflow-hidden rounded-2xl w-full h-[320px] md:h-[380px]">
              <img
                src="https://dosanenergy.com/assets/dosan-oxycom-units.webp"
                alt="هواء التعويض للمطابخ"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span className="text-[#003743] font-medium">
                هواء التعويض للمطابخ
              </span>
              <span>•</span>
              <span className="text-[#00A887] font-medium">مميز</span>
              <span>•</span>
              <span>٥ دقائق قراءة</span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-[#003743] leading-snug group-hover:text-[#00A887] transition-colors">
              هواء التعويض للمطابخ بالطريقة الصحيحة: لماذا تتحول المطاعم عن
              وحدات الهواء النقي بنظام DX
            </h3>

            <p className="text-xs text-gray-500 leading-relaxed">
              لماذا يتخلى مشغلو المطاعم عن وحدات الهواء النقي بنظام DX - كميات
              السحب وهواء التعويض، وتكلفة تشغيل كل حل فعلياً.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opinion;
