"use client";
import Image from "next/image";
import styles from "./archProject.module.css";
import { useEffect, useState } from "react";
import { ImageData } from "../../_data/projects";
import { getLocalization, Lang } from "../../localization";
import Link from "next/link";
import { Button } from "@mui/material";

interface ArchProjectProps {
  title: string;
  description?: string;
  images: ImageData[];
  lang: Lang;
}

export function ArchProject(props: ArchProjectProps) {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const maxWidth = windowWidth < 768 ? windowWidth * 0.95 : windowWidth * 0.8;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className={styles.imagesContainer}>
        {props.images.map((image, index) => (
          <div key={index} className={styles.imageContainer}>
            {index === 0 && <h2>{props.title}</h2>}
            {index === 0 && props.description && (
              <p style={{ maxWidth: maxWidth }}>{props.description}</p>
            )}
            <Image
              src={image.src}
              alt={image.alt}
              width={maxWidth}
              height={maxWidth * image.apectRatio}
            />
            <p>{image.alt}</p>
          </div>
        ))}
        <Link href={`/${props.lang}/architecture`} passHref>
          <Button
            style={{ marginTop: "10px" }}
            color="inherit"
            variant="outlined"
          >
            {getLocalization("architecture.back", props.lang)}
          </Button>
        </Link>
      </div>
    </>
  );
}
