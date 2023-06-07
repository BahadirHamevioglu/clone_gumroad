"use client";
// REACT/NEXT
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

// COMPONENTS
import HeaderButton from "./header-button";

// *** DATA
// ** NAVIGATION LINKS
import { navLinks } from "./navLinks";

// STYLES
import styles from "./header.module.scss";

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const headerLogo = document.querySelector(`.${styles.headerLogo}`);
      if (window.scrollY > 266 && window.innerWidth > 1024) {
        headerLogo.style.display = "block";
      } else {
        headerLogo.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link
          href="/"
          className={styles.headerLogo}
          style={{ display: "none" }}
        >
          <Image src="/normalLogo.svg" alt="header logo" fill />
        </Link>

        <ul className={styles.headerNav}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={styles.headerNavItem}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.headerActions}>
          <HeaderButton label="Login" href="/auth/login" secondary={true} />
          <HeaderButton
            label="Start Selling"
            href="/auth/register"
            secondary={false}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
