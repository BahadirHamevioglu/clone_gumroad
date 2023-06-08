// REACT/NEXT
import Image from "next/image";

// STYLES
import styles from "./component.module.scss";

function TextBasedComponent({ title, background, image, id, label, children }) {
  return (
    <section className={styles.section} id={id}>
      <div className={styles.TextBasedComponentGrid}>
        <div
          className={`${styles.TextBasedComponentGridItem} ${styles.borderRight}`}
          style={{ background: background }}
        >
          <div className={styles.TextBasedComponentGridItemImage}>
            <Image
              alt="section image"
              src={image}
              width={558}
              height={557}
            ></Image>
          </div>
        </div>
        <div
          className={`${styles.TextBasedComponentGridItem} ${styles.TextBasedComponentGridRight}`}
        >
          <h3 className={styles.gridItemTitle}>{title}</h3>
          <p className={styles.gridItemDescription}>{label}</p>
          {children}
        </div>
      </div>
    </section>
  );
}

export default TextBasedComponent;
