// REACT/NEXT
import Image from "next/image";
import Link from "next/link";

// COMPONENTS
import Container from "@/components/container";

// STYLES
import styles from "./footer.module.scss";

// DATA
import { footerLinks, footerSocialLinks } from "./data.jsx";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerGrid}>
          <div className={styles.footerInput}>
            <h4 className={styles.inputLabel}>
              Subscribe to get tips and tactics to grow the way you want.
            </h4>
            <form className={styles.form}>
              <input
                type="text"
                placeholder="Your email address"
                className={styles.formInput}
              />
              <button type="submit" className={styles.formButton}>
                →
              </button>
            </form>
          </div>
          <div className={styles.footerLinks}>
            {footerLinks.map((item) => (
              <ul className={styles.footerLinksList} key={item.key}>
                {item.links.map((link) => (
                  <li className={styles.footerLinksItem} key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className={styles.footerCopyright}>
            <Image
              src="/gum-icon.svg"
              alt="icon"
              width={32}
              height={32}
            ></Image>
            Ⓒ Gumroad, Inc.
          </div>
          <div className={styles.footerSocial}>
            {footerSocialLinks.map((item) => (
              <Link
                href={item.href}
                key={item.key}
                className={styles.footerSocialItem}
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
