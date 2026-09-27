import { useState } from "react";
const Navbar = () => {
  const links = [
    { name: "الخدمات", href: "#services" },
    { name: "المشاريع", href: "#projects" },
    { name: "الشركاء والتقنيات", href: "#partners" },
    { name: "الحاسبات", href: "#calculators" },
    { name: "الرؤى", href: "#insights" },
    { name: "من نحن", href: "#about" },
    { name: "تواصل معانا", href: "#contact" },
  ];
  const [menu, setMenu] = useState(false);
  return (
    <header
      className=" w-full bg-[#08323a] text-white font-sans py-3 select-none"
      dir="rtl"
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-6 lg:gap-8">
          <a href="#" className="flex-shrink-0 block">
            <img
              src="https://new.dosanenergy.com/assets/dosan-logo.png"
              alt="dosan ENERGY"
              style={{ height: "36px", maxHeight: "36px", width: "auto" }}
              className="object-contain brightness-0 invert"
            />
          </a>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenu((prev) => !prev)}
            className="md:hidden p-2 rounded-lg  ]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          <nav className="hidden md:flex items-center gap-5 lg:gap-5 text-xs font-medium">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-100 hover:text-gray-300 hover:underline hover:decoration-[#1cd2ad] hover:decoration-1 underline-offset-10"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-4 lg:gap-6 flex-shrink-0">
          <div className="flex items-center gap-3 text-sm font-medium">
            <a href="#en" className="text-gray-300 hover:text-white text-xs ">
              English
            </a>
            <span className="text-white font-bold text-xs">العربية</span>
          </div>

          <button
            type="button"
            className="bg-[#1cd2ad] text-[#08323a] font-sans text-sm p-2 rounded-xl cursor-pointer"
          >
            تقييم الموقع{" "}
          </button>
        </div>
        {/* Mobile Menu */}

        {menu && (
          <div
            className="fixed inset-0 z-50 bg-[#08323a] md:hidden px-4 py-5"
            dir="rtl"
          >
            {/* Top */}
            <div className="flex items-center justify-between pb-5 border-b border-white/10">
              {/* Logo */}
              <a href="#" onClick={() => setMenu(false)}>
                <img
                  src="https://new.dosanenergy.com/assets/dosan-logo.png"
                  alt="dosan ENERGY"
                  className="h-8 w-17 object-contain brightness-0 invert"
                />
              </a>

              {/* Close Button */}
              <button
                onClick={() => setMenu(false)}
                className="text-white text-2xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
            </div>

            {/* Links */}
            <nav className="mt-2">
              {/* Arrow */}
              {links.map((link) => (
                
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenu(false)}
                  className="flex items-center justify-between
                     py-4
                     border-b border-white/10
                     text-white
                     font-bold
                     text-base
                     hover:text-[#1cd2ad]">
                  {/* Link Name */}
                  <span>{link.name}</span>
                  <span className="text-[#1cd2ad] text-lg mr-auto">←</span>
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
