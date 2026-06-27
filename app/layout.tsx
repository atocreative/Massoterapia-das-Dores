import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Massoterapia das Dores — Alívio para corpo, mente e emoções",
  description:
    "Especialistas em bem-estar em Brasília, DF. Terapias personalizadas com carinho: massagem terapêutica, drenagem linfática, shiatsu e muito mais. Agende pelo WhatsApp.",
  keywords:
    "massoterapia, massagem terapêutica, bem-estar, Brasília, drenagem linfática, shiatsu, alívio de dores",
  openGraph: {
    title: "Massoterapia das Dores — Alívio para corpo, mente e emoções",
    description:
      "Especialistas em bem-estar em Brasília, DF. Terapias personalizadas com carinho.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-white text-[#333333] antialiased">
        {children}
      </body>
    </html>
  );
}
