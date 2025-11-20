import type { Metadata } from "next";
import "./globals.css";
import Header from "../src/components/Header";

export const metadata: Metadata = {
  title: "codrigues",
  description: "Desenvolvedor Front-End.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link 
         rel="stylesheet" 
         href="https://site-assets.fontawesome.com/releases/v6.7.2/css/all.css"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
