import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";
import { Navigation } from "../components/Navigation";
import { ParticleBackground } from "../components/ParticleBackground";
import { ShootingStars } from "../components/ShootingStars";
import { Loader } from "../components/Loader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shota Inai | Portfolio",
  description: "Professional Portfolio of Shota Inai - IT/Tech Enthusiast & Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={inter.className}>
      <body>
        <LanguageProvider>
          <Loader />
          <ParticleBackground />
          <ShootingStars />
          <Navigation />
          <main>{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
