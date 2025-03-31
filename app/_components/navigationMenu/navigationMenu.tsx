"use client";
import Link from "next/link";
import styles from "./navigationMenu.module.css";
import { usePathname } from "next/navigation";
import React from "react";
import { getLocalization, Lang } from "../../localization";

export function NavigationMenu({ lang }: { lang: Lang }) {
  return (
    <NavigationMenuInternal
      lang={lang}
      items={[
        { name: getLocalization("navigation.home", lang), url: `/${lang}` },
        {
          name: getLocalization("navigation.services", lang),
          url: `/${lang}/services`,
        },
        {
          name: getLocalization("architecture.title", lang),
          url: `/${lang}/architecture`,
        },
        {
          name: getLocalization("navigation.contact", lang),
          url: `/${lang}/contact`,
        },
      ]}
    />
  );
}

interface MenuEntry {
  name: string;
  url: string;
}

interface NavigationMenuProps {
  items: MenuEntry[];
  lang: Lang;
}

function NavigationMenuInternal({ items, lang }: NavigationMenuProps) {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        event.target instanceof Element &&
        !event.target.closest(`.${styles.bar}`)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <nav className={styles.bar}>
      <div className={styles.logo}>
        <Link href={`/${lang}/`} onClick={() => setOpen(false)}>
          NEROM
        </Link>
      </div>
      <ul className={`${styles.list} ${open ? styles.open : ""}`}>
        {items.map((item, index) => (
          <li
            key={index}
            className={pathname === item.url ? styles.active : ""}
          >
            <Link href={item.url} onClick={() => setOpen(false)}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <div
        className={`${styles.hamburger} ${open ? styles.open : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
