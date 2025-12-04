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
    // Se tá no /awesome → marca como awesome e para por aqui
    if (pathname.startsWith("/awesome")) {
      setActiveSection("awesome");
      return;
    }

    // Se não for a home → desativa tudo
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sections = ["home", "about", "portfolio", "contato"];

    const updateActiveSection = () => {
      // 1. Primeiro tenta pegar do hash (funciona em reload e clique)
      const hash = window.location.hash.slice(1);
      if (hash && sections.includes(hash)) {
        const el = document.getElementById(hash);
        if (el) {
          // Confirma que o elemento existe e tá pelo menos um pouco visível
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            setActiveSection(hash);
            return;
          }
        }
      }

      // 2. Se não tiver hash confiável → usa scroll position (o que tu já tinha, mas melhorado)
      let current = "home";
      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) { // 200px de tolerância do topo
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    // Roda imediatamente (importante!)
    updateActiveSection();

    // Roda de novo depois de um tiquinho (garante que o DOM já tá pronto)
    const timer = setTimeout(updateActiveSection, 100);

    // Listeners
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