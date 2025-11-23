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
  metadataBase: new URL("https://www.nerom-ebs.gr"),
  title: "NEROM Engineering & Business Services",
  description:
    "With expertise in engineering, business strategy, and executive training, we offer comprehensive solutions tailored to meet the modern market's demands.",
  keywords: [
    "engineering services",
    "business consulting",
    "architectural design",
    "executive training",
    "Athens",
    "Greece",
    "NEROM",
    "μηχανικός",
    "επιχειρηματική συμβουλευτική",
    "αρχιτεκτονική",
  ],
  authors: [{ name: "NEROM Engineering & Business Services" }],
  creator: "NEROM Engineering & Business Services",
  publisher: "NEROM Engineering & Business Services",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
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
  verification: {
    google: "google-site-verification-code", // Add your verification code when available
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
      <GoogleAnalytics gaId="G-E4XLKVF21M" />
    </html>
  );
}
