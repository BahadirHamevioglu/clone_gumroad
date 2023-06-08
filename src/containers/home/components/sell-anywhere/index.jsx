// REACT/NEXT
import Image from "next/image";

// STYLES
import styles from "./sell-anywhere.module.scss";

function SellToAnyone() {
  return (
    <section className={styles.section}>
      <div className={styles.sellToAnyoneGrid}>
        <div
          className={`${styles.sellToAnyoneGridItem} ${styles.darkYellow} ${styles.borderRight}`}
        >
          <div className={styles.sellToAnyoneGridItemImage}>
            <Image
              alt="section image"
              src="/sell_anywhere_image.svg"
              width={558}
              height={557}
            ></Image>
          </div>
        </div>
        <div
          className={`${styles.sellToAnyoneGridItem} ${styles.sellToAnyoneGridRight}`}
        >
          <h3 className={styles.gridItemTitle}>Sell anywhere</h3>
          <p className={styles.gridItemDescription}>
            Create and customize your storefront with our all-in-one platform or
            choose to use your personal site instead. With Zapier, you can
            seamlessly connect your Gumroad account to thousands of apps in your
            current stack.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SellToAnyone;
