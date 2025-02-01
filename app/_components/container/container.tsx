import styles from "./container.module.css";

export function Container({ children }: { children: React.ReactNode }) {
  return <section className={styles.container}>{children}</section>;
}
