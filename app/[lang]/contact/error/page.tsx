import { ContentWithTitle } from "../../../_components/content/contentWithTitle";
import { Hero } from "../../../_components/hero/hero";
import { getLocalization, Lang } from "../../../localization";

export default async function Contact({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
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
