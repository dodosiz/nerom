"use client";
import { Divider } from "@mui/material";
import { Hero } from "../_components/hero/hero";
import { useLang, useLocalized } from "../localization";
import { ContentWithList } from "../_components/content/contentWithList";

export default function Services() {
  const lang = useLang();
  return (
    <main>
      <Hero
        title={useLocalized("services.hero.title", lang)}
        description={useLocalized("services.hero.description", lang)}
        image="/images/hero4.jpg"
      />
      <ContentWithList
        title={useLocalized("services.engineering.title", lang)}
        content={[useLocalized("services.engineering.description", lang)]}
        listTitle={useLocalized("services.engineering.listTitle", lang)}
        list={[
          useLocalized("services.engineering.first", lang),
          useLocalized("services.engineering.second", lang),
          useLocalized("services.engineering.third", lang),
          useLocalized("services.engineering.fourth", lang),
        ]}
      />
      <Divider variant="middle" />
      <ContentWithList
        title={useLocalized("services.business.title", lang)}
        content={[useLocalized("services.business.description", lang)]}
        listTitle={useLocalized("services.business.listTitle", lang)}
        list={[
          useLocalized("services.business.first", lang),
          useLocalized("services.business.second", lang),
          useLocalized("services.business.third", lang),
          useLocalized("services.business.fourth", lang),
        ]}
      />
      <Divider variant="middle" />
      <ContentWithList
        title={useLocalized("services.other.title", lang)}
        content={[useLocalized("services.other.description", lang)]}
        listTitle={useLocalized("services.other.listTitle", lang)}
        list={[
          useLocalized("services.other.first", lang),
          useLocalized("services.other.second", lang),
          useLocalized("services.other.third", lang),
        ]}
      />
    </main>
  );
}
