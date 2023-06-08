// REACT/NEXT
import Image from "next/image";
import Link from "next/link";

// STYLES
import styles from "./client-comment.module.scss";

function ClientComment({
  backgroundColor = "#ff90e8",
  clientImage = "/client_max.png",
  imageHeight = 567,
  imageWidth = 560,
  clientImageSticker = "/stickers/client_comment_sticker_1.svg",
  clientComment = "No comment",
  clientRole = "No role",
  clientLink = "/",
  clientName = "No name",
}) {
  return (
    <section className={styles.section}>
      <div
        className={styles.clientCommentGrid}
        style={{ background: backgroundColor }}
      >
        <div className={styles.clientCommentGridItem}>
          <h2 className={styles.clientCommentGridItemText}>
            “{clientComment}”
          </h2>
          <p className={styles.clientCommentGridItemRole}>
            <strong>{clientRole}</strong>
          </p>
        </div>

        <div
          className={`${styles.clientCommentGridItem} ${styles.clientCommentGridItemRight}`}
        >
          <div className={styles.clientCommentGridItemImage}>
            <Image
              src={clientImage}
              width={imageWidth}
              height={imageHeight}
              style={{ objectFit: "contain", position: "relative" }}
              alt="image"
              id="grid_main_image"
            ></Image>
            <div className={styles.clientCommentGridItemStickers}>
              <Image
                src={clientImageSticker}
                width={184}
                height={207}
                style={{
                  position: "absolute",
                  top: "4.5rem",
                  right: "24rem",
                }}
                alt="image"
                id="grid_sticker"
              ></Image>
            </div>
            <div className={styles.clientCommentGridItemLinkWrapper}>
              <Link
                href={clientLink}
                className={styles.clientCommentGridItemLink}
              >
                <div className={styles.clientCommentGridItemLinkIcon}>
                  <Image
                    src="/herosection_image_link.svg"
                    alt="svg"
                    width={34}
                    height={33}
                  ></Image>
                </div>
                <div className={styles.clientCommentGridItemLinkText}>
                  {clientName}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientComment;
