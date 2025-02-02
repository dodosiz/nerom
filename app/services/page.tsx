"use client";
import { Divider } from "@mui/material";
import { Hero } from "../_components/hero/hero";
import { ContentWithTitle } from "../_components/content/contentWithTitle";
import { useLang, useLocalized } from "../localization";

export default function Services() {
  const lang = useLang();
  return (
    <main>
      <Hero
        title={useLocalized("services.hero.title", lang)}
        description={useLocalized("services.hero.description", lang)}
        image="/images/hero4.jpg"
      />
      <ContentWithTitle
        title={useLocalized("services.engineering.title", lang)}
        content={useLocalized("services.engineering.description", lang)}
      />
      <Divider variant="middle" />
      <ContentWithTitle
        title={useLocalized("services.business.title", lang)}
        content={useLocalized("services.business.description", lang)}
      />
      <Divider variant="middle" />
      <ContentWithTitle
        title={useLocalized("services.other.title", lang)}
        content={useLocalized("services.other.description", lang)}
      />
    </main>
  );
}
