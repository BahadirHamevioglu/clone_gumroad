// REACT/NEXT
import Link from "next/link";

// STYLES
import styles from "./herosection.module.scss";

function HerosectionLeft() {
  return (
    <div className={`${styles.herosectionGridItem} ${styles.gridItemLeft}`}>
      <h1 className={styles.gridItemTitle}>
        Go from <br />
        <span style={{ whiteSpace: "nowrap", display: "block" }}>
          zero to $1
        </span>
      </h1>
      <p className={styles.gridItemSubhead}>
        With Gumroad, anyone can earn their first dollar online. Just start with
        what you know, see what sticks, and get paid. It’s that easy.
      </p>
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
  );
}

export default HerosectionLeft;
