import { notFound } from "next/navigation";
import { PROJECTS } from "../../../_data/projects";
import { getLocalization, Lang } from "../../../localization";
import { ArchProject } from "../../../_components/archProject/archProject";
import { Hero } from "../../../_components/hero/hero";

export default async function ArchitectureProject({
  params,
}: {
  params: Promise<{ lang: Lang; projectId: string }>;
}) {
  const { lang, projectId } = await params;
  const project = PROJECTS.find((p) => p.id === projectId);
  if (!project) {
    notFound();
  }
  return (
    <main>
      <Hero
        title={getLocalization("architecture.title", lang)}
        description={getLocalization("architecture.description", lang)}
        image="/images/hero3.jpg"
      />
      <ArchProject
        lang={lang}
        title={getLocalization(project.title, lang)}
        description={
          project.description ? getLocalization(project.description, lang) : ""
        }
        images={project.images.map((image) => ({
          ...image,
          alt: getLocalization(image.alt, lang),
        }))}
      />
    </main>
  );
}
