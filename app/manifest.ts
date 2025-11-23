import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NEROM Engineering & Business Services",
    short_name: "NEROM",
    description:
      "With expertise in engineering, business strategy, and executive training, we offer comprehensive solutions tailored to meet the modern market's demands.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1976d2",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    categories: ["business", "engineering", "consulting"],
    lang: "en",
    dir: "ltr",
  };
}
