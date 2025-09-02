import type { Metadata } from "next";
import { Poppins, DM_Sans } from "next/font/google";
import AnchorProvider from "@/contexts/AnchorContext";
import { Product, WithContext } from "schema-dts";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const jsonLd: WithContext<Product> = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Bruno Alves - DEV",
  description:
    "Bruno Alves, desenvolvedor especializado em React, Next.js e TypeScript. Confira meu portfólio e projetos de desenvolvimento web.",
  brand: {
    "@type": "Brand",
    name: "Bruno Alves DEV",
    description: "Desenvolvedor de Software",
  },
  url: "https://portfolio-brunoalves.netlify.app/",
  sameAs: [
    "https://github.com/BrunoAlves22",
    "https://www.linkedin.com/in/bruno-alves-830455230",
  ],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "BRL",
  },
};

export const metadata: Metadata = {
  title: "Bruno Alves - DEV",
  authors: [
    {
      name: "Bruno Alves",
      url: "https://portfolio-brunoalves.netlify.app/",
    },
  ],
  description:
    "Bruno Alves, desenvolvedor especializado em React, Next.js e TypeScript. Confira meu portfólio e projetos de desenvolvimento web.",
  keywords: [
    "Bruno Alves",
    "Desenvolvedor Front-end",
    "Desenvolvedor Web",
    "Desenvolvedor de Software",
    "React Developer",
    "Next.js Developer",
    "ReactJS",
    "TypeScript Developer",
    "JavaScript Developer",
    "Desenvolvimento Web",
    "Portfólio de Desenvolvedor",
    "Desenvolvedor Freelancer",
    "Freelancer React",
    "Programador Front-end",
    "Programador JavaScript",
    "Next.js Freelancer",
    "TailwindCSS",
  ],
  verification: {
    google: "DP2nL2FEKyWcp0eaNhdXtaBoLbjCMCSeHaQSwHaU4sY",
  },
  icons: [
    {
      rel: "icon",
      href: "/favicon.ico",
      type: "image/x-icon",
      url: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      href: "/favicon.svg",
      sizes: "32x32",
      type: "image/svg+xml",
      url: "/favicon.svg",
    },
    {
      rel: "icon",
      href: "/favicon-96x96.png",
      sizes: "96x96",
      type: "image/png",
      url: "/favicon-96x96.png",
    },
  ],
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Bruno Alves - Dev",

    description:
      "Meu nome é Bruno Alves, sou um desenvolvedor de software Atualmente, estou cursando Tecnologia da Informação na UNIVESP -Universidade Virtual do Estado de São Paulo e sou apaixonado por tecnologia e programação. Tenho experiência com desenvolvimento web, utilizando tecnologias como JavaScript, TypeScript, React, Next.js e Tailwind CSS. Estou sempre em busca de novos desafios e oportunidades para aprender e crescer como profissional.",
    type: "website",
    locale: "pt_BR",
    url: "https://portfolio-brunoalves.netlify.app/",
    siteName: "Bruno Alves DEV",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className="scroll-smooth scroll-p-20 overflow-x-hidden bg-[#02030F]"
    >
      <body
        cz-shortcut-listen="true"
        className={`${poppins.variable} ${dmSans.variable} antialiased overflow-hidden`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AnchorProvider>{children}</AnchorProvider>
      </body>
    </html>
  );
}
