import "./globals.css"; 

import Header from "../src/components/Header";
import BackToTop from "../src/components/BackToTop";
import Footer from "../src/components/Footer";

export const metadata = {
  title: "codrigues",
  description: "Desenvolvedor Front-End.",
};

export default function PrincipalLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Fontawesome pro */}
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.7.2/css/all.css"
        />

        {/* Fontes */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        <Header />
        <BackToTop />

        <main className="container">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
