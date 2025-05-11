import Link from "next/link";
import { Hero } from "../../_components/hero/hero";
import { extractLang, getLocalization, Lang } from "../../localization";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";
import { ImageData, PROJECTS } from "../../_data/projects";
import styles from "./architecture.module.css";

export default async function Architecture({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const lang = await extractLang(params);
  return (
    <main>
      <Hero
        title={getLocalization("architecture.title", lang)}
        description={getLocalization("architecture.description", lang)}
        image="/images/hero3.jpg"
      />
      <div className={styles.grid}>
        {PROJECTS.map((project) => (
          <div key={project.id} className={styles.container}>
            <Link href={`/${lang}/architecture/${project.id}`}>
              <ProjectCard
                title={getLocalization(project.title, lang)}
                image={{
                  src: `/architecture/preview/${project.id}.png`,
                  alt: getLocalization(project.images[0].alt, lang),
                  apectRatio: 4 / 3,
                }}
              />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

interface ProjectCardProps {
  title: string;
  image: ImageData;
}

function ProjectCard(props: ProjectCardProps) {
  const { title, image } = props;
  return (
    <Box component="span" className={styles.box}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={image.src}
            alt={image.alt}
          />
          <CardContent>
            <p>{title}</p>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
