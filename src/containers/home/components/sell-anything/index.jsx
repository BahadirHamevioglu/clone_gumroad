import TextBasedSection from "@/components/text-based-section";

import styles from "./sell-anything.module.scss";

function SellAnything() {
  return (
    <TextBasedSection
      title="Sell anything"
      label="Video lessons. Monthly subscriptions. Physical products. Whatever! Gumroad was created to help you experiment with all kinds of ideas and formats."
      background="#23a094"
      image="/sell_anything_1.svg"
    >
      <ul className={styles.gridItemList}>
        <li className={styles.gridItemListItem}>Sell your Top 10 lists</li>
        <li className={styles.gridItemListItem}>Sell your crypto tips</li>
        <li className={styles.gridItemListItem}>Sell your fractal pack</li>
        <li className={styles.gridItemListItem}>Sell your keto cookbook</li>
        <li className={styles.gridItemListItem}>Sell your C4D scenes</li>
        <li className={styles.gridItemListItem}>Sell your new emojis</li>
        <li className={styles.gridItemListItem}>Seriously, sell anything!</li>
      </ul>
    </TextBasedSection>
  );
}

export default SellAnything;
