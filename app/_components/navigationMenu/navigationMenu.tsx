"use client";
import Link from "next/link";
import styles from "./navigationMenu.module.css";
import { usePathname } from "next/navigation";
import React from "react";
import { useLang, useLocalized } from "../../localization";

export function NavigationMenu() {
  const lang = useLang();
  return (
    <NavigationMenuInternal
      items={[
        { name: useLocalized("navigation.home", lang), url: "/" },
        {
          name: useLocalized("navigation.services", lang),
          url: "/services",
        },
        { name: useLocalized("navigation.contact", lang), url: "/contact" },
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
}

function NavigationMenuInternal({ items }: NavigationMenuProps) {
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
        <Link href="/" onClick={() => setOpen(false)}>
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
