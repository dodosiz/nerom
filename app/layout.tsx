import { GoogleAnalytics } from "@next/third-parties/google";
import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
      <GoogleAnalytics gaId="G-E4XLKVF21M" />
    </html>
  );
}
