import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { NavigationMenu } from "../_components/navigationMenu/navigationMenu";
import { Footer } from "../_components/footer/footer";
import { LangSelect } from "../_components/langSelect/langSelect";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Lang } from "../localization";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEROM Engineering & Business Services",
  description:
    "With expertise in engineering, business strategy, and executive training, we offer comprehensive solutions tailored to meet the modern market's demands.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Lang }>;
}>) {
  const { lang } = await params;
  return (
    <html lang={lang}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NavigationMenu lang={lang} />
        {children}
        <LangSelect lang={lang} />
        <Footer lang={lang} />
      </body>
      <GoogleAnalytics gaId="G-E4XLKVF21M" />
    </html>
  );
}
