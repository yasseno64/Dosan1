import React from "react";

interface ClientItem {
  id: string;
  name: string;
  logoSrc: string;
}

const CLIENTS_DATA: ClientItem[] = [
  {
    id: "almarai",
    name: "Almarai",
    logoSrc: "https://dosanenergy.com/assets/clients/almarai.png",
  },
  {
    id: "damac",
    name: "DAMAC",
    logoSrc: "https://dosanenergy.com/assets/clients/damac.png",
  },
  {
    id: "edgnex",
    name: "EDGNEX Data Centers by DAMAC",
    logoSrc: "https://dosanenergy.com/assets/clients/edgnex-data-centers.png",
  },
  {
    id: "alfanar",
    name: "Alfanar",
    logoSrc: "https://dosanenergy.com/assets/clients/alfanar.png",
  },
  {
    id: "extra",
    name: "eXtra",
    logoSrc: "https://dosanenergy.com/assets/clients/extra.png",
  },
  {
    id: "ncb",
    name: "NCB Al Ahli",
    logoSrc: "https://dosanenergy.com/assets/clients/ncb-al-ahli.png",
  },
  {
    id: "engie",
    name: "ENGIE",
    logoSrc: "https://dosanenergy.com/assets/clients/engie.png",
  },
  {
    id: "sattam-univ",
    name: "جامعة الأمير سطام بن عبدالعزيز",
    logoSrc:
      "https://dosanenergy.com/assets/clients/prince-sattam-bin-abdulaziz-university.png",
  },
  {
    id: "othaim",
    name: "أسواق عبدالله العثيم",
    logoSrc:
      "https://dosanenergy.com/assets/clients/abdullah-al-othaim-markets.png",
  },
  {
    id: "tera-mall",
    name: "Tera Mall",
    logoSrc: "https://dosanenergy.com/assets/clients/tera-mall.png",
  },
  {
    id: "blvd-world",
    name: "BLVD World",
    logoSrc: "https://dosanenergy.com/assets/clients/blvd-world.png",
  },
  {
    id: "sela",
    name: "Sela",
    logoSrc: "https://dosanenergy.com/assets/clients/sela.png",
  },
  {
    id: "shahia",
    name: "Shahia Food",
    logoSrc: "https://dosanenergy.com/assets/clients/shahia-food.png",
  },
  {
    id: "dunkin",
    name: "Dunkin' Donuts",
    logoSrc: "https://dosanenergy.com/assets/clients/dunkin-donuts.png",
  },
  {
    id: "deraah",
    name: "Deraah",
    logoSrc: "https://dosanenergy.com/assets/clients/deraah.png",
  },
  {
    id: "fipco",
    name: "FIPCO",
    logoSrc: "https://dosanenergy.com/assets/clients/fipco.png",
  },
  {
    id: "khayal",
    name: "مطعم خيال",
    logoSrc: "https://dosanenergy.com/assets/clients/khayal-restaurant.png",
  },
  {
    id: "century",
    name: "سينتشري برغر",
    logoSrc: "https://dosanenergy.com/assets/clients/century-burger.png",
  },
  {
    id: "american-school",
    name: "American International School, الرياض",
    logoSrc:
      "https://dosanenergy.com/assets/clients/american-international-school.png",
  },
];

const ClientLogoCard: React.FC<{
  client: ClientItem;
  isDuplicate?: boolean;
}> = ({ client, isDuplicate = false }) => (
  <div className="flex-none w-[clamp(150px,15vw,220px)] h-[clamp(84px,9vw,120px)] grid place-items-center px-[clamp(8px,1vw,14px)]">
    <img
      src={client.logoSrc}
      alt={isDuplicate ? "" : client.name}
      aria-hidden={isDuplicate}
      loading="lazy"
      decoding="async"
      className="max-w-full max-h-[clamp(44px,4.8vw,66px)] w-auto h-auto object-contain block rounded-[var(--image-radius,8px)]"
    />
  </div>
);

const ClientsMarquee: React.FC = () => {
  return (
    <section id="clients" className="mt-[clamp(48px,7vw,104px)]">
      {/* Header */}
      <div className="flex flex-col items-end max-w-[1400px] mx-auto mb-[clamp(24px,3.4vw,44px)] px-[clamp(16px,5vw,64px)] text-right dir-rtl">
        <p className="mb-3 flex items-center justify-end gap-[10px] text-xs md:text-sm font-medium tracking-[1.6px] uppercase text-emerald-600">
          العملاء والمراجع
          <span className="block w-[22px] h-[1px] bg-emerald-600" />
        </p>
        <h2
          dir="rtl"
          className="m-0 max-w-[22ch] text-[clamp(21.3px,2.3vw,32px)] leading-[1.08] -tracking-[1px] font-bold text-slate-900 text-right"
        >
          مُنفذ لمشغّلين في مختلف مناطق المملكة.
        </h2>
      </div>

      {/* Marquee Track - White background */}
      <div className="overflow-hidden ltr border-y border-slate-200 py-[clamp(22px,3vw,40px)] bg-white">
        <div className="flex w-max ltr animate-marquee marquee-track will-change-transform hover:[animation-play-state:paused]">
          {/* Group 1 */}
          <div className="flex items-center gap-[clamp(28px,4vw,64px)] pr-[clamp(28px,4vw,64px)]">
            {CLIENTS_DATA.map((client) => (
              <ClientLogoCard key={client.id} client={client} />
            ))}
          </div>

          {/* Group 2 (Duplicated for Seamless Infinite Loop) */}
          <div
            className="flex items-center gap-[clamp(28px,4vw,64px)] pr-[clamp(28px,4vw,64px)]"
            aria-hidden="true"
          >
            {CLIENTS_DATA.map((client) => (
              <ClientLogoCard
                key={`dup-${client.id}`}
                client={client}
                isDuplicate
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsMarquee;
