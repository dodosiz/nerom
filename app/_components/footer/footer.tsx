"use client";
import Link from "next/link";
import styles from "./footer.module.css";
import { useLang, useLocalized } from "../../localization";

export function Footer() {
  const lang = useLang();
  return (
    <footer className={styles.footer}>
      <Link href="/privacy">{useLocalized("privacy.link", lang)}</Link>
      <p>© {new Date().getFullYear()} Nerom Engineering & Business Services</p>
    </footer>
  );
}
