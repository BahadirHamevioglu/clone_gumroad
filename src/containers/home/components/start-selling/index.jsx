// REACT/NEXT
import Link from "next/link";

// COMPONENTS
import Container from "@/components/container";

// STYLES
import styles from "./start-selling.module.scss";

function StartSelling() {
  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.startSellingTitle}>
          Share your work. <br />
          <span style={{ whiteSpace: "nowrap" }}>
            Someone out there needs it.
          </span>
        </h2>
        <div className={styles.startSellingCta}>
          <Link href="/auth/signup" className={styles.gridItemButton}>
            <div className={styles.gridItemButtonText}>Start Selling</div>
            <div
              className={`${styles.gridItemButtonShadow} ${styles.gridItemButtonShadowFirst}`}
            ></div>
            <div
              className={`${styles.gridItemButtonShadow} ${styles.gridItemButtonShadowSecond}`}
            ></div>
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default StartSelling;
