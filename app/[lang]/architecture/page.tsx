import { ArchProject } from "../../_components/archProject/archProject";
import { Hero } from "../../_components/hero/hero";
import { getLocalization, Lang } from "../../localization";

export default async function Architecture({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  return (
    <main>
      <Hero
        title={getLocalization("architecture.title", lang)}
        description={getLocalization("architecture.description", lang)}
        image="/images/hero3.jpg"
      />
      <ArchProject
        title={getLocalization("architecture.projects.filiates.title", lang)}
        description={getLocalization(
          "architecture.projects.filiates.description",
          lang
        )}
        images={[
          {
            src: "/architecture/filiates/kitchen2.png",
            alt: getLocalization("architecture.projects.filiates.alt2", lang),
            apectRatio: 3000 / 7876,
          },
          {
            src: "/architecture/filiates/kitchen.png",
            alt: getLocalization("architecture.projects.filiates.alt3", lang),
            apectRatio: 3000 / 7876,
          },
          {
            src: "/architecture/filiates/bath.png",
            alt: getLocalization("architecture.projects.filiates.alt1", lang),
            apectRatio: 3000 / 4951,
          },
        ]}
      />
      <ArchProject
        title={getLocalization("architecture.projects.lux_home.title", lang)}
        description={getLocalization(
          "architecture.projects.lux_home.description",
          lang
        )}
        images={[
          {
            src: "/architecture/luxury_home/kitchen.jpg",
            alt: getLocalization("architecture.projects.lux_home.alt1", lang),
            apectRatio: 2250 / 4000,
          },
          {
            src: "/architecture/luxury_home/kid-room.jpg",
            alt: getLocalization("architecture.projects.lux_home.alt2", lang),
            apectRatio: 3375 / 6000,
          },
          {
            src: "/architecture/luxury_home/bedroom1.jpg",
            alt: getLocalization("architecture.projects.lux_home.alt3", lang),
            apectRatio: 2250 / 4000,
          },
          {
            src: "/architecture/luxury_home/bedroom2.jpg",
            alt: getLocalization("architecture.projects.lux_home.alt4", lang),
            apectRatio: 2250 / 4000,
          },
          {
            src: "/architecture/luxury_home/closet.png",
            alt: getLocalization("architecture.projects.lux_home.alt5", lang),
            apectRatio: 2502 / 5693,
          },
        ]}
      />
    </main>
  );
}
