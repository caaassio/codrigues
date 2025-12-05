"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const ActiveSectionContext = createContext({
  activeSection: "home",
  setActiveSection: () => {},
});

export function ActiveSectionProvider({ children }) {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {

    if (pathname.startsWith("/awesome")) {
      setActiveSection("awesome");
      return;
    }

    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sections = ["home", "about", "portfolio", "contato"];

    const updateActiveSection = () => {

      const hash = window.location.hash.slice(1);
      if (hash && sections.includes(hash)) {
        const el = document.getElementById(hash);
        if (el) {

          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            setActiveSection(hash);
            return;
          }
        }
      }

      let current = "home";
      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) { // tolerância do topo
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    updateActiveSection();

    const timer = setTimeout(updateActiveSection, 100);

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("hashchange", updateActiveSection);
    window.addEventListener("resize", updateActiveSection);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [pathname]);

  return (
    <ActiveSectionContext.Provider value={{ activeSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export const useActiveSection = () => useContext(ActiveSectionContext);