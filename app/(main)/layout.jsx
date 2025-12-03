"use client";

import "../globals.css";
import Header from "../../src/components/Header";
import BackToTop from "../../src/components/BackToTop";
import Footer from "../../src/components/Footer";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function PrincipalLayout({ children }) {
  const pathname = usePathname();
  const rafRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    document.documentElement.setAttribute("data-pathname", pathname);

    if (window.location.hash === "#spawn-contato") {

      rafRef.current = requestAnimationFrame(() => {
        timeoutRef.current = setTimeout(() => {
          const contato = document.getElementById("contato");
          if (contato) {

            window.scrollTo({
              top: contato.offsetTop,
              behavior: "instant",
            });
            history.replaceState(null, "", "/");
          }
        }, 0);
      });
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [pathname]);

  return (
    <>
      <Header />
      <BackToTop />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
}
