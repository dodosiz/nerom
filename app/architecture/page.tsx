"use client";

import { ArchProject } from "../_components/archProject/archProject";
import { Hero } from "../_components/hero/hero";
import { useLang, useLocalized } from "../localization";

export default function Architecture() {
  const lang = useLang();
  return (
    <main>
      <Hero
        title={useLocalized("architecture.title", lang)}
        description={useLocalized("architecture.description", lang)}
        image="/images/hero3.jpg"
      />
      <ArchProject
        title={useLocalized("architecture.projects.filiates.title", lang)}
        description={useLocalized(
          "architecture.projects.filiates.description",
          lang
        )}
        images={[
          {
            src: "/architecture/filiates/bath.png",
            alt: useLocalized("architecture.projects.filiates.alt1", lang),
            apectRatio: 3000 / 4951,
          },
          {
            src: "/architecture/filiates/kitchen2.png",
            alt: useLocalized("architecture.projects.filiates.alt2", lang),
            apectRatio: 3000 / 7876,
          },
          {
            src: "/architecture/filiates/kitchen.png",
            alt: useLocalized("architecture.projects.filiates.alt3", lang),
            apectRatio: 3000 / 7876,
          },
        ]}
      />
      <ArchProject
        title={useLocalized("architecture.projects.lux_home.title", lang)}
        description={useLocalized(
          "architecture.projects.lux_home.description",
          lang
        )}
        images={[
          {
            src: "/architecture/luxury_home/kitchen.jpg",
            alt: useLocalized("architecture.projects.lux_home.alt1", lang),
            apectRatio: 2250 / 4000,
          },
          {
            src: "/architecture/luxury_home/kid-room.jpg",
            alt: useLocalized("architecture.projects.lux_home.alt2", lang),
            apectRatio: 3375 / 6000,
          },
          {
            src: "/architecture/luxury_home/bedroom1.jpg",
            alt: useLocalized("architecture.projects.lux_home.alt3", lang),
            apectRatio: 2250 / 4000,
          },
          {
            src: "/architecture/luxury_home/bedroom2.jpg",
            alt: useLocalized("architecture.projects.lux_home.alt4", lang),
            apectRatio: 2250 / 4000,
          },
          {
            src: "/architecture/luxury_home/closet.png",
            alt: useLocalized("architecture.projects.lux_home.alt5", lang),
            apectRatio: 2502 / 5693,
          },
        ]}
      />
    </main>
  );
}
