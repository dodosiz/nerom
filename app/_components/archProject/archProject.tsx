"use client";
import Image from "next/image";
import styles from "./archProject.module.css";
import { useEffect, useState } from "react";

interface ImageElement {
  src: string;
  alt: string;
  apectRatio: number;
}

interface ArchProjectProps {
  title: string;
  description?: string;
  images: ImageElement[];
}

export function ArchProject(props: ArchProjectProps) {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const maxWidth = windowWidth * 0.8;

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
      </div>
    </>
  );
}
