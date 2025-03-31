import Link from "next/link";
import styles from "./footer.module.css";
import { getLocalization, Lang } from "../../localization";

export function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className={styles.footer}>
      <Link href={`/${lang}/privacy`}>
        {getLocalization("privacy.link", lang)}
      </Link>
      <p>© {new Date().getFullYear()} Nerom Engineering & Business Services</p>
    </footer>
  );
}
