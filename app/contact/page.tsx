"use client";
import { ContentWithTitle } from "../_components/content/contentWithTitle";
import { Hero } from "../_components/hero/hero";
import { useLang, useLocalized } from "../localization";

export default function Contact() {
  const lang = useLang();
  return (
    <main>
      <Hero
        title={useLocalized("contact.hero.title", lang)}
        description={useLocalized("contact.hero.description", lang)}
        image="/images/hero2.jpg"
      />
      <ContentWithTitle
        title={useLocalized("contact.title", lang)}
        content={useLocalized("contact.content", lang)}
      />
    </main>
  );
}
