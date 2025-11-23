import { ContentWithTitle } from "../../../_components/content/contentWithTitle";
import { Hero } from "../../../_components/hero/hero";
import { extractLang, getLocalization } from "../../../localization";

export default async function Contact(props: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await extractLang(props.params);
  return (
    <main>
      <Hero
        title={getLocalization("contact.hero.title", lang)}
        description={getLocalization("contact.hero.description", lang)}
        image="/images/hero2.jpg"
      />
      <ContentWithTitle
        lang={lang}
        title={getLocalization("contact.error.title", lang)}
        content={[getLocalization("contact.error.content", lang)]}
        actionButtonLabel={getLocalization(
          "contact.error.actionButtonLabel",
          lang
        )}
        actionButtonLink="contact"
      />
    </main>
  );
}
