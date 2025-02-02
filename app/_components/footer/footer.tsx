import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Nerom Engineering & Business Services</p>
    </footer>
  );
}
