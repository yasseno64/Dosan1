interface PartnerCard {
  id: string;
  logo: string;
  image: string;
  badge: string;
  title: string;
  description: string;
  highlighted?: boolean;
}

const partners: PartnerCard[] = [
  {
    id: "enerco",
    logo: "https://dosanenergy.com/assets/partner-enerco.png",
    image: "https://dosanenergy.com/assets/dosan-coating-hero.webp",
    badge: "الطلاءات",
    title: "Ener.co · Enercoat",
    description:
      "تقنية طلاء تُستخدم في أعمال تحسين الكفاءة إلى جانب الإجراءات الميكانيكية.",
  },
  {
    id: "hisense",
    logo: "https://dosanenergy.com/assets/partner-hisense.png",
    image: "https://dosanenergy.com/assets/dosan-vrf-hero.webp",
    badge: "أنظمة VRF",
    title: "Hisense",
    description:
      "معدات تدفق متغير لمركب التبريد للمباني متعددة المناطق، مع الحسابات والتركيب والخدمة من فريقنا.",
  },
  {
    id: "oxycom",
    logo: "https://dosanenergy.com/assets/partner-oxycom.png",
    image: "https://dosanenergy.com/assets/dosan-oxycom-units.webp",
    badge: "هولندا · الشريك الحصري في المملكة",
    title: "Oxycom",
    description:
      "تبريد تبخيري غير مباشر - IntrCooll و PreCooll. نتولى الهندسة والتركيب والتشغيل والصيانة داخل المملكة.",
    highlighted: true,
  },
];

const Person = () => {
  return (
    <section className="bg-slate-50 py-16 px-4 md:px-12 lg:px-16 dir-rtl font-sans text-right">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-12">
          <span className="text-emerald-600 text-xs sm:text-sm font-semibold tracking-wider block mb-2">
            الشركاء والتقنيات
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
            أفضل التقنيات العالمية، بتنفيذ محلي.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group bg-white rounded-2xl p-6 transition-all duration-300 flex flex-col hover:-translate-y-2 justify-between shadow-sm hover:shadow-lg hover:border-2 border-emerald-400/80 ring-1 ring-emerald-400/30 "
            >
              <div>
                <div className="h-12 flex items-center mb-6 hover:scale-105 hover:shadow-xl w-fit ms-auto">
                  <img
                    src={partner.logo}
                    alt={partner.title}
                    className="max-h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105  "
                  />
                </div>

                <div className="w-full h-44 sm:h-48 rounded-xl overflow-hidden mb-5 bg-slate-100">
                  <img
                    src={partner.image}
                    alt={partner.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>

                <span className="text-emerald-700 text-xs font-medium block mb-1">
                  {partner.badge}
                </span>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {partner.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Person;
