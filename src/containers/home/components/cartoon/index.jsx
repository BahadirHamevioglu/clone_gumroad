// REACT/NEXT
import Image from "next/image";

// STYLES
import styles from "./cartoon.module.scss";

function Cartoon() {
  return (
    <section className={styles.section}>
      <div className={styles.cartoonCards}>
        <div
          className={`${styles.cartoonCard} ${styles.borderRight} ${styles.black}`}
        >
          <div className={styles.cartoonCardImage}>
            <Image
              alt="cartoon"
              src="/cartoon_1.svg"
              width={525}
              height={524}
            ></Image>
            <div className={styles.cartoonCardText}>
              Instead of selling a book...
            </div>
          </div>
        </div>
        <div className={`${styles.cartoonCard} ${styles.yellowDark}`}>
          <div className={styles.cartoonCardImage}>
            <Image
              alt="cartoon"
              src="/cartoon_2.svg"
              width={525}
              height={524}
            ></Image>
            <div className={styles.cartoonCardText}>
              ...start by selling a blog post!
            </div>
          </div>
          <div className={styles.cartoonSticker}>
            <Image
              alt="cartoon sticker"
              src="/stickers/cartoon_sticker.svg"
              width={288}
              height={220}
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cartoon;
