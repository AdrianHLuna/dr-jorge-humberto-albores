import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { poppins, jakarta } from "@/lib/fonts";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { PhysicianStructuredData } from "@/components/StructuredData";
import { doctor } from "@/data/doctor";

export const metadata: Metadata = {
  metadataBase: new URL("https://drjorgealbores.com"),
  title: {
    default: "Dr. Jorge Humberto Albores Mejía | Ginecólogo y Mastólogo en Tuxtla Gutiérrez",
    template: "%s | Dr. Jorge Humberto Albores Mejía",
  },
  description:
    "Especialista en Ginecología, Obstetricia, Cirugía Oncológica de la Mama (FUCAM/UNAM) y Cirugía Endoscópica Ginecológica en Tuxtla Gutiérrez, Chiapas. Consulta desde $800 MXN.",
  keywords: [
    "ginecologo tuxtla gutierrez",
    "mastologo tuxtla",
    "cirujano oncologo de mama chiapas",
    "fucam mastologia chiapas",
    "checkup ginecologico tuxtla",
    "biopsia de mama tuxtla",
    "histeroscopia tuxtla gutierrez",
    "control prenatal alto riesgo tuxtla",
  ],
  authors: [{ name: doctor.name }],
  creator: doctor.name,
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://drjorgealbores.com",
    title: "Dr. Jorge Humberto Albores Mejía | Ginecologo en Tuxtla Gutiérrez",
    description:
      "Atención ginecológica y mastológica de alta especialidad en Tuxtla Gutiérrez, Chiapas. Formación en FUCAM / UNAM y UAEH.",
    siteName: "Dr. Jorge Humberto Albores Mejía",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Dr. Jorge Humberto Albores Mejía - Ginecología y Mastología",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Jorge Humberto Albores Mejía | Ginecólogo y Mastólogo",
    description:
      "Ginecología, Obstetricia y Alta Especialidad en Cirugía Oncológica de la Mama en Tuxtla Gutiérrez, Chiapas.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#653A57",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${poppins.variable} ${jakarta.variable} scroll-smooth`}>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PB93VX9G');`,
          }}
        />

        {/* Google Ads (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18484994724"
          strategy="afterInteractive"
        />
        <Script
          id="google-ads"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18484994724');
            `,
          }}
        />

        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6Z4QB04SEB"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6Z4QB04SEB');
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-[#FDFBFC] text-[#2B1D26] antialiased selection:bg-[#E8B7B7]/50 selection:text-[#653A57]">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PB93VX9G"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <PhysicianStructuredData doctor={doctor} />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
