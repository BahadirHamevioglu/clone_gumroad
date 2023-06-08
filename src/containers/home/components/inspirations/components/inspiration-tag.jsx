// REACT/NEXT
import Image from "next/image";
import Link from "next/link";

// STYLES
import styles from "../inspirations.module.scss";

function InspirationTag({
  children,
  image,
  title,
  text,
  href,
  backgroundColor,
}) {
  return (
    <div
      className={styles.inspirationsCategoryItem}
      style={{ background: backgroundColor }}
    >
      <Link href={href} className={styles.inspirationsCategoryItemTop}>
        <Image
          src={image}
          alt="sticker"
          width={101}
          height={72}
          style={{ objectFit: "contain" }}
        />
        <div className={styles.inspirationsCategoryItemTopTitle}>{title}</div>
        <div className={styles.inspirationsCategoryItemTopText}>{text}</div>
      </Link>
      <div className={styles.inspirationsCategoryItemBottom}>
        <div className={styles.inspirationsCategoryItemBottomTitle}>
          <strong>Popular Tag</strong>
        </div>
        {children}
      </div>
    </div>
  );
}

export default InspirationTag;
