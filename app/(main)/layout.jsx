"use client";

import "../globals.css";
import Header from "../../src/components/Header";
import BackToTop from "../../src/components/BackToTop";
import Footer from "../../src/components/Footer";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PrincipalLayout({ children }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  

  useEffect(() => {
  document.documentElement.setAttribute("data-pathname", pathname);

  if (window.location.hash === "#spawn-contato") {
    requestAnimationFrame(() => {
      const contato = document.getElementById("contato");
      if (contato) {
        window.scrollTo({
          top: contato.offsetTop,
          behavior: "instant" 
        });
        history.replaceState(null, "", "/");
      }
    });
  }
}, [pathname]);

  return (
    <html lang="pt-BR">
      <head>
        <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/all.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div id="pageTransitionOverlay" className="page-transition-overlay"></div>
        <Header />
        <BackToTop />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}