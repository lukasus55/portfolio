import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald } from "next/font/google";
import "../globals.css";
import LanguageSwitcher from "./components/LanguageSwitcher";
import HeaderSection from "./components/HeaderSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Łukasz Kostyk - Portfolio",
  description: "Łukasz Kostyk - Portfolio",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {


  const { lang } = await params;

  return (
    <html lang={lang}>
      <body className="bg-background text-foreground">
        <header className="fixed z-100 top-0 left-0 site_header p-6 flex justify-end w-full">
          <HeaderSection />
        </header>
        {children}
      </body>
    </html>
  );
}