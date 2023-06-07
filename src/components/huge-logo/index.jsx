// REACT/NEXT
import Link from "next/link";
import Image from "next/image";

// STYLES
import styles from "./huge-logo.module.scss";

function HugeLogo() {
  return (
    <section className={styles.section}>
      <Link href="/" className={styles.logo}>
        <Image src="/hugeLogo.svg" alt="huge logo" fill></Image>
      </Link>
    </section>
  );
}

export default HugeLogo;
