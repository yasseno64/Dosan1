const Footer = () => {
  return (
    <footer className="bg-[#043742] text-white/75 px-4 md:px-12 lg:px-16 pb-10 md:pb-14 dir-rtl text-right font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 py-10 md:py-16 border-t border-white/15">
          <div className="col-span-1">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              الحاسبات
            </h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <a
                href="/ar/calculators/vrf/"
                className="hover:text-white transition-colors"
              >
                حاسبة VRF
              </a>
              <a
                href="/ar/calculators/idec/"
                className="hover:text-white transition-colors"
              >
                حاسبة توفير IDEC
              </a>

              <div className="flex items-center ml-33 lg-ml-40 gap-3 mt-2 text-[10px] font-semibold">
                <span className="text-white">العربية</span>
                <a
                  href="/"
                  className="text-white/80 hover:text-white font-normal transition-colors"
                >
                  English
                </a>

              </div>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              الشركة
            </h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <a
                href="/ar/about/"
                className="hover:text-white transition-colors"
              >
                من نحن
              </a>
              <a
                href="/ar/projects/"
                className="hover:text-white transition-colors"
              >
                المشاريع
              </a>
              <a
                href="/ar/partners/"
                className="hover:text-white transition-colors"
              >
                الشركاء والتقنيات
              </a>
              <a
                href="/ar/insights/"
                className="hover:text-white transition-colors"
              >
                الرؤى
              </a>
              <a
                href="/ar/contact/"
                className="hover:text-white transition-colors"
              >
                تواصل معنا
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              الخدمات
            </h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <a
                href="/ar/services/kitchen/"
                className="hover:text-white transition-colors"
              >
                هواء التعويض للمطابخ
              </a>
              <a
                href="/ar/services/idec/"
                className="hover:text-white transition-colors"
              >
                تقنية IDEC من Oxycom
              </a>
              <a
                href="/ar/services/precooll/"
                className="hover:text-white transition-colors"
              >
                التبريد المسبق للمبردات PreCooll
              </a>
              <a
                href="/ar/services/vrf/"
                className="hover:text-white transition-colors"
              >
                أنظمة VRF من Hisense
              </a>
              <a
                href="/ar/services/coatings/"
                className="hover:text-white transition-colors"
              >
                طلاءات توفير الطاقة للتكييف
              </a>
              <a
                href="/ar/services/analytics/"
                className="hover:text-white transition-colors"
              >
                تحليلات المباني وكشف الأعطال
              </a>
              <a
                href="/ar/services/mep/"
                className="hover:text-white transition-colors"
              >
                خدمات MEP
              </a>
              <a
                href="/ar/services/engineering/"
                className="hover:text-white transition-colors"
              >
                الهندسة والتصميم
              </a>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-3 lg:col-span-1 flex flex-col justify-start  pt-4 sm:pt-0 border-t border-white/10 sm:border-none">
            <a
              href="/"
              aria-label="دوسان للطاقة، الصفحة الرئيسية"
              className="self-end mb-5 inline-flex items-center"
            >
              <img
                src="https://new.dosanenergy.com/assets/dosan-logo.png"
                alt="دوسان للطاقة"
                className="h-10 w-auto max-w-40 object-contain brightness-0 invert"
              />
            </a>
            <p className="text-[10px]  leading-relaxed mb-2 max-w-sm text-white/70">
              تبريد بتكلفة تشغيل أقل. هندسة وتنفيذ<br></br> أعمال MEP وتحليلات في مختلف
              مناطق المملكة.
            </p>
            <div className="text-sm leading-loose text-white/70">
              <p>روشن فرونت، سدرة، الرياض</p>
              <a
                href="tel:+966544311180"
                className="block hover:text-white transition-colors"
              >
                +966 54 431 1180
              </a>
              <a
                href="mailto:info@dosanenergy.com"
                className="block hover:text-white transition-colors"
              >
                info@dosanenergy.com
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/15 text-xs text-white/60">
          <div className="flex flex-wrap items-center gap-4 sm:gap-5 justify-center sm:justify-start">
            <a
              href="https://www.instagram.com/dosanenergy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/dosanenergy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="/sitemap.xml"
              className="hover:text-white transition-colors"
            >
              خريطة الموقع
            </a>
            <a href="#top" className="hover:text-white transition-colors">
              الخصوصية
            </a>
          </div>

          <span className="text-center sm:text-right">
           .٢٠٢٦ دوسان للطاقة. جميع الحقوق محفوظة© 
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
