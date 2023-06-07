// COMPONENTS
import HerosectionRight from "./herosection-right";
import HerosectionLeft from "./herosection-left";

// STYLES
import styles from "./herosection.module.scss";

function Herosection() {
  return (
    <section className={styles.section}>
      <div className={styles.herosectionGrid}>
        <HerosectionLeft />
        <HerosectionRight />
      </div>
    </section>
  );
}

export default Herosection;
