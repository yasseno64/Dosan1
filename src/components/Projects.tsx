const Projects = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-16 dir-rtl text-right font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <p className="text-xs text-gray-400">
            مرّر المؤشر على مشروع للمعاينة
          </p>

          <div>
            <div className="flex items-center gap-2 justify-end mb-2">
              <span className="text-xs text-[#00e6a8] font-medium">
                المشاريع
              </span>
              <span className="w-6 h-[2px] bg-[#00e6a8]"></span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#003743] leading-tight">
              مُنفّذ في المملكة، ومُقاس في <br /> الموقع.
            </h2>
          </div>
        </div>

        <div className="border-t border-b border-gray-100">
          <a
            href="#"
            className="flex items-center justify-between py-6 border-b border-gray-100 last:border-none group"
          >
            <div className="flex items-center gap-2 text-gray-400">
              <span>←</span>
              <span className="text-xs">الرياض</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#003743]">
                {" "}
                HVDC مصنع الفنار
              </h3>
              <p className="text-[10px] text-[#00A887] ">
                INTRCOOLL PLUS · ١١٧ وحدة
              </p>
            </div>
          </a>

          <a
            href="#"
            className="flex items-center justify-between py-6 border-b border-gray-100 last:border-none group"
          >
            <div className="flex items-center gap-2 text-gray-400">
              <span>←</span>
              <span className="text-xs">الرياض</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#003743]">
                مركز بيانات داماك إدجنكس
              </h3>
              <p className="text-[10px] text-[#00A887] ">
                PRECOOLL · توفير ٣٥% من طاقة المبردات
              </p>
            </div>
          </a>

          <a
            href="#"
            className="flex items-center justify-between py-6 border-b border-gray-100 last:border-none group"
          >
            <div className="flex items-center gap-2 text-gray-400">
              <span>←</span>
              <span className="text-xs">الخرج</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#003743]">
                جامعة الأمير سطام بن عبدالعزيز
              </h3>
              <p className="text-[10px] text-[#00A887] ">محطة المبردات</p>
            </div>
          </a>

          <a href="#" className="flex items-center justify-between py-6 group">
            <div className="flex items-center gap-2 text-gray-400">
              <span>←</span>
              <span className="text-xs">الورود، الرياض</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#003743]">
                إكسترا للإلكترونيات
              </h3>
              <p className="text-[10px] text-[#00A887] ">
                تحديث تجزئة · فاتورة تبريد أقل بنسبة ٦٦%
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
