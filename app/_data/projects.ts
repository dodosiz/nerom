export interface Project {
  id: string;
  title: string;
  description?: string;
  images: ImageData[];
}

export interface ImageData {
  src: string;
  alt: string;
  apectRatio: number;
}

export const PROJECTS: Project[] = [
  {
    id: "filiates",
    title: "architecture.projects.filiates.title",
    description: "architecture.projects.filiates.description",
    images: [
      {
        src: "/architecture/filiates/kitchen2.png",
        alt: "architecture.projects.filiates.alt2",
        apectRatio: 3000 / 7876,
      },
      {
        src: "/architecture/filiates/kitchen.png",
        alt: "architecture.projects.filiates.alt3",
        apectRatio: 3000 / 7876,
      },
      {
        src: "/architecture/filiates/bath.png",
        alt: "architecture.projects.filiates.alt1",
        apectRatio: 3000 / 4951,
      },
    ],
  },
  {
    id: "lux_home",
    title: "architecture.projects.lux_home.title",
    description: "architecture.projects.lux_home.description",
    images: [
      {
        src: "/architecture/luxury_home/kitchen.jpg",
        alt: "architecture.projects.lux_home.alt1",
        apectRatio: 2250 / 4000,
      },
      {
        src: "/architecture/luxury_home/kid-room.jpg",
        alt: "architecture.projects.lux_home.alt2",
        apectRatio: 3375 / 6000,
      },
      {
        src: "/architecture/luxury_home/bedroom1.jpg",
        alt: "architecture.projects.lux_home.alt3",
        apectRatio: 2250 / 4000,
      },
      {
        src: "/architecture/luxury_home/bedroom2.jpg",
        alt: "architecture.projects.lux_home.alt4",
        apectRatio: 2250 / 4000,
      },
      {
        src: "/architecture/luxury_home/closet.png",
        alt: "architecture.projects.lux_home.alt5",
        apectRatio: 2502 / 5693,
      },
    ],
  },
  {
    id: "expo",
    title: "architecture.projects.expo.title",
    description: "architecture.projects.expo.description",
    images: [
      {
        src: "/architecture/expo/expo1.jpg",
        alt: "architecture.projects.expo.alt1",
        apectRatio: 2759 / 8000,
      },
      {
        src: "/architecture/expo/expo2.jpg",
        alt: "architecture.projects.expo.alt2",
        apectRatio: 3302 / 8000,
      },
      {
        src: "/architecture/expo/expo3.jpg",
        alt: "architecture.projects.expo.alt3",
        apectRatio: 3286 / 8000,
      },
    ],
  },
  {
    id: "kindergarten",
    title: "architecture.projects.kindergarten.title",
    description: "architecture.projects.kindergarten.description",
    images: [
      {
        src: "/architecture/kindergarten/kindergarten.jpg",
        alt: "architecture.projects.kindergarten.alt1",
        apectRatio: 2069 / 6000,
      },
    ],
  },
];
