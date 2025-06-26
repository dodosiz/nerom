import { Divider } from "@mui/material";
import { Hero } from "../_components/hero/hero";
import { GridWithContent } from "../_components/content/gridWithContent";
import { ContentWithTitle } from "../_components/content/contentWithTitle";
import { extractLang, getLocalization, Lang } from "../localization";
import { BUSINESS, ENGINEERING, SOFTWARE } from "../constants";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const lang = await extractLang(params);
  return (
    <main>
      <Hero
        title={getLocalization("hero.title", lang)}
        description={getLocalization("hero.description", lang)}
        image="/images/hero.jpg"
      />
      <ContentWithTitle
        lang={lang}
        title={getLocalization("whoWeAre.title", lang)}
        content={[
          getLocalization("whoWeAre.first", lang),
          getLocalization("whoWeAre.second", lang),
          getLocalization("whoWeAre.third", lang),
        ]}
      />
      <Divider variant="middle" />
      <GridWithContent
        title={getLocalization("expertise.title", lang)}
        size={{ xs: 12, md: 6 }}
        lang={lang}
        items={[
          {
            id: ENGINEERING,
            title: getLocalization("expertise.engineering.title", lang),
            description: getLocalization(
              "expertise.engineering.description",
              lang
            ),
          },
          {
            id: BUSINESS,
            title: getLocalization("expertise.business.title", lang),
            description: getLocalization(
              "expertise.business.description",
              lang
            ),
          },
          {
            id: SOFTWARE,
            title: getLocalization("expertise.software.title", lang),
            description: getLocalization(
              "expertise.software.description",
              lang
            ),
          }
        ]}
      />
    </main>
  );
}
