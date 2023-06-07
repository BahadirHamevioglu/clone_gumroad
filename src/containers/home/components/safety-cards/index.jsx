// STYLES
import styles from "./safety-cards.module.scss";

function SafetyCards() {
  return (
    <section className={styles.section}>
      <div className={styles.safetyCards}>
        <div
          className={`${styles.safetyCardsItem} ${styles.violet} ${styles.borderRight}`}
        >
          Don’t take risks. <br /> That’s scary!
        </div>
        <div className={`${styles.safetyCardsItem} ${styles.pink}`}>
          Place small bets. <br /> That’s exciting!
        </div>
      </div>
    </section>
  );
}

export default SafetyCards;
