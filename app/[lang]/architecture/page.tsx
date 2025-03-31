import Link from "next/link";
import { Hero } from "../../_components/hero/hero";
import { getLocalization, Lang } from "../../localization";
import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import { ImageData, PROJECTS } from "../../_data/projects";
import styles from "./architecture.module.css";

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
      <div className={styles.grid}>
        {PROJECTS.map((project) => (
          <Link key={project.id} href={`/${lang}/architecture/${project.id}`}>
            <ProjectCard
              title={getLocalization(project.title, lang)}
              image={{
                src: project.images[0].src,
                alt: getLocalization(project.images[0].alt, lang),
                apectRatio: project.images[0].apectRatio,
              }}
              link={`/${lang}/architecture/${project.id}`}
              lang={lang}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}

interface ProjectCardProps {
  title: string;
  image: ImageData;
  link: string;
  lang: Lang;
}

function ProjectCard(props: ProjectCardProps) {
  const { title, image, link, lang } = props;
  return (
    <Box component="span" className={styles.box}>
      <Card className={styles.card}>
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Image
            src={image.src}
            alt={image.alt}
            width={500}
            height={500 * image.apectRatio}
          />
        </CardContent>
        <CardActions>
          <Link href={link}>
            {getLocalization("architecture.learnMore", lang)}
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
}
