import { Divider } from "@mui/material";
import { Hero } from "../../_components/hero/hero";
import { extractLang, getLocalization, Lang } from "../../localization";
import { ContentWithList } from "../../_components/content/contentWithList";
import { BUSINESS, ENGINEERING, OTHER } from "../../constants";

export default async function Services({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const lang = await extractLang(params);
  return (
    <main>
      <Hero
        title={getLocalization("services.hero.title", lang)}
        description={getLocalization("services.hero.description", lang)}
        image="/images/hero4.jpg"
      />
      <ContentWithList
        lang={lang}
        id={ENGINEERING}
        title={getLocalization("services.engineering.title", lang)}
        content={[getLocalization("services.engineering.description", lang)]}
        listTitle={getLocalization("services.engineering.listTitle", lang)}
        list={[
          getLocalization("services.engineering.first", lang),
          getLocalization("services.engineering.second", lang),
          getLocalization("services.engineering.third", lang),
          getLocalization("services.engineering.fourth", lang),
        ]}
        secondListTitle={getLocalization(
          "services.engineering.secondListTitle",
          lang
        )}
        secondList={[
          getLocalization("services.engineering.secondList.first", lang),
          getLocalization("services.engineering.secondList.second", lang),
          getLocalization("services.engineering.secondList.third", lang),
          getLocalization("services.engineering.secondList.fourth", lang),
          getLocalization("services.engineering.secondList.fifth", lang),
        ]}
        actionButtonLabel={getLocalization(
          "services.engineering.actionLabel",
          lang
        )}
        actionButtonLink="architecture"
      />
      <Divider variant="middle" />
      <ContentWithList
        lang={lang}
        id={BUSINESS}
        title={getLocalization("services.business.title", lang)}
        content={[getLocalization("services.business.description", lang)]}
        listTitle={getLocalization("services.business.listTitle", lang)}
        list={[
          getLocalization("services.business.first", lang),
          getLocalization("services.business.second", lang),
          getLocalization("services.business.third", lang),
          getLocalization("services.business.fourth", lang),
        ]}
        secondListTitle={getLocalization(
          "services.business.secondListTitle",
          lang
        )}
        secondList={[
          getLocalization("services.business.secondList.first", lang),
          getLocalization("services.business.secondList.second", lang),
          getLocalization("services.business.secondList.third", lang),
          getLocalization("services.business.secondList.fourth", lang),
        ]}
      />
      <Divider variant="middle" />
      <ContentWithList
        lang={lang}
        id={OTHER}
        title={getLocalization("services.other.title", lang)}
        content={[getLocalization("services.other.description", lang)]}
        listTitle={getLocalization("services.other.listTitle", lang)}
        list={[
          getLocalization("services.other.first", lang),
          getLocalization("services.other.second", lang),
          getLocalization("services.other.third", lang),
        ]}
      />
    </main>
  );
}
