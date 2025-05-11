import { ContentWithTitle } from "../../../_components/content/contentWithTitle";
import { Hero } from "../../../_components/hero/hero";
import { extractLang, getLocalization, Lang } from "../../../localization";

export default async function Contact({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const lang = await extractLang(params);
  return (
    <main>
      <Hero
        title={getLocalization("contact.hero.title", lang)}
        description={getLocalization("contact.hero.description", lang)}
        image="/images/hero2.jpg"
      />
      <ContentWithTitle
        lang={lang}
        title={getLocalization("contact.success.title", lang)}
        content={[getLocalization("contact.success.content", lang)]}
        actionButtonLabel={getLocalization(
          "contact.success.actionButtonLabel",
          lang
        )}
        actionButtonLink="contact"
      />
    </main>
  );
}
