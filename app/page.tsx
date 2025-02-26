"use client";
import { Divider } from "@mui/material";
import { Hero } from "./_components/hero/hero";
import { GridWithContent } from "./_components/content/gridWithContent";
import { ContentWithTitle } from "./_components/content/contentWithTitle";
import { useLang, useLocalized } from "./localization";
import { BUSINESS, ENGINEERING } from "./constants";

export default function Home() {
  const lang = useLang();
  return (
    <main>
      <Hero
        title={useLocalized("hero.title", lang)}
        description={useLocalized("hero.description", lang)}
        image="/images/hero.jpg"
      />
      <ContentWithTitle
        title={useLocalized("whoWeAre.title", lang)}
        content={[
          useLocalized("whoWeAre.first", lang),
          useLocalized("whoWeAre.second", lang),
          useLocalized("whoWeAre.third", lang),
        ]}
      />
      <Divider variant="middle" />
      <GridWithContent
        title={useLocalized("expertise.title", lang)}
        size={{ xs: 12, md: 6 }}
        items={[
          {
            id: ENGINEERING,
            title: useLocalized("expertise.engineering.title", lang),
            description: useLocalized(
              "expertise.engineering.description",
              lang
            ),
          },
          {
            id: BUSINESS,
            title: useLocalized("expertise.business.title", lang),
            description: useLocalized("expertise.business.description", lang),
          },
        ]}
      />
    </main>
  );
}
