// REACT/NEXT
import Image from "next/image";

// STYLES
import styles from "./sell-to-anyone.module.scss";

function SellToAnyone() {
  return (
    <section className={styles.section}>
      <div className={styles.sellToAnyoneGrid}>
        <div
          className={`${styles.sellToAnyoneGridItem} ${styles.black} ${styles.borderRight}`}
        >
          <div className={styles.sellToAnyoneGridItemImage}>
            <Image
              alt="section image"
              src="/sell_to_anyone_image.svg"
              width={558}
              height={557}
            ></Image>
          </div>
        </div>
        <div
          className={`${styles.sellToAnyoneGridItem} ${styles.sellToAnyoneGridRight}`}
        >
          <h3 className={styles.gridItemTitle}>Sell to anyone</h3>
          <p className={styles.gridItemDescription}>
            Build a loyal following with simple posts, email newsletters, and
            automated workflows. Plus let your customers pay what they want or
            choose between one-time, recurring, or fixed-length payments in your
            currency of choice. (We’ll handle the fine print, like VAT).
          </p>
        </div>
      </div>
    </section>
  );
}

export default SellToAnyone;
