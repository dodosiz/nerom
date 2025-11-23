import { notFound } from "next/navigation";
import { PROJECTS } from "../../../_data/projects";
import { extractLang, getLocalization } from "../../../localization";
import { ArchProject } from "../../../_components/archProject/archProject";
import { Hero } from "../../../_components/hero/hero";
import { Metadata } from "next";

export async function generateMetadata(props: {
  params: Promise<{ lang: string; projectId: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const { lang: rawLang, projectId } = params;
  const lang = await extractLang(Promise.resolve({ lang: rawLang }));
  const project = PROJECTS.find((p) => p.id === projectId);

  if (!project) {
    return {
      title: "Project Not Found - NEROM",
    };
  }

  const title = `${getLocalization(project.title, lang)} - NEROM`;
  const description = project.description
    ? getLocalization(project.description, lang)
    : getLocalization("architecture.description", lang);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [`/architecture/preview/${project.id}.png`],
    },
    twitter: {
      title,
      description,
      images: [`/architecture/preview/${project.id}.png`],
    },
  };
}

export default async function ArchitectureProject(props: {
  params: Promise<{ lang: string; projectId: string }>;
}) {
  const params = await props.params;
  const { lang: rawLang, projectId } = params;
  const lang = await extractLang(Promise.resolve({ lang: rawLang }));
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
