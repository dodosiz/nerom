import styles from "./hero.module.css";

interface HeroProps {
  title: string;
  description: string;
  image: string;
}

export function Hero({ title, description, image }: HeroProps) {
  return (
    <div className={styles.hero} style={{ backgroundImage: `url(${image})` }}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
