import "../globals.css";
import { NavigationMenu } from "../_components/navigationMenu/navigationMenu";
import { Footer } from "../_components/footer/footer";
import { LangSelect } from "../_components/langSelect/langSelect";
import { extractLang } from "../localization";
import { Metadata } from "next";

export async function generateMetadata(props: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = await extractLang(props.params);
  const baseUrl = "https://www.nerom-ebs.gr";

  return {
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: "/en",
        el: "/el",
      },
    },
    openGraph: {
      locale: lang === "en" ? "en_US" : "el_GR",
      type: "website",
      url: `${baseUrl}/${lang}`,
      siteName: "NEROM Engineering & Business Services",
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default async function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
  }>
) {
  const lang = await extractLang(props.params);
  return (
    <div lang={lang}>
      <NavigationMenu lang={lang} />
      {props.children}
      <LangSelect lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}
