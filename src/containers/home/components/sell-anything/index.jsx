// REACT/NEXT
import Image from "next/image";

// STYLES
import styles from "./sell-anything.module.scss";

function SellAnything() {
  return (
    <section className={styles.section}>
      <div className={styles.sellAnythingGrid}>
        <div
          className={`${styles.sellAnythingGridItem} ${styles.teal} ${styles.borderRight}`}
        >
          <div className={styles.sellAnythingGridItemImage}>
            <Image
              alt="section image"
              src="/sell_anything_1.svg"
              width={643}
              height={703}
            ></Image>
          </div>
        </div>
        <div
          className={`${styles.sellAnythingGridItem} ${styles.sellAnythingGridRight}`}
        >
          <h3 className={styles.gridItemTitle}>Sell anything</h3>
          <p className={styles.gridItemDescription}>
            Video lessons. Monthly subscriptions. Physical products. Whatever!
            Gumroad was created to help you experiment with all kinds of ideas
            and formats.
          </p>
          <ul className={styles.gridItemList}>
            <li className={styles.gridItemListItem}>Sell your Top 10 lists</li>
            <li className={styles.gridItemListItem}>Sell your crypto tips</li>
            <li className={styles.gridItemListItem}>Sell your fractal pack</li>
            <li className={styles.gridItemListItem}>Sell your keto cookbook</li>
            <li className={styles.gridItemListItem}>Sell your C4D scenes</li>
            <li className={styles.gridItemListItem}>Sell your new emojis</li>
            <li className={styles.gridItemListItem}>
              Seriously, sell anything!
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SellAnything;
