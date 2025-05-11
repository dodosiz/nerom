import "../globals.css";
import { NavigationMenu } from "../_components/navigationMenu/navigationMenu";
import { Footer } from "../_components/footer/footer";
import { LangSelect } from "../_components/langSelect/langSelect";
import { extractLang, Lang } from "../localization";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Lang }>;
}>) {
  const lang = await extractLang(params);
  return (
    <>
      <NavigationMenu lang={lang} />
      {children}
      <LangSelect lang={lang} />
      <Footer lang={lang} />
    </>
  );
}
