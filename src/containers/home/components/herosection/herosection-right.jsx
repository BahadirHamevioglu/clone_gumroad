"use client";
// REACT/NEXT
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

// STYLES
import styles from "./herosection.module.scss";

function HerosectionRight() {
  useEffect(() => {
    let stickerCoins = document.querySelector(
      `#${"herosection_right_sticker_coins"}`
    );
    let stickerBrush = document.querySelector(
      `#${"herosection_right_sticker_brush"}`
    );

    let mainImage = document.querySelector(
      `#${"herosection_right_main_image"}`
    );

    window.addEventListener("scroll", () => {
      if (window.scrollY && window.innerWidth > 1024) {
        stickerCoins.style.transition = "all 0.2s ease-in-out";
        stickerCoins.style.transform = `translateY(${-Math.floor(
          window.scrollY / 20
        )}px)`;

        stickerBrush.style.transition = "all 0.2s ease-in-out";
        stickerBrush.style.transform = `translateY(${-Math.floor(
          window.scrollY / 20
        )}px)`;

        mainImage.style.transition = "all 0.2s ease-in-out";
        mainImage.style.transform = `translateY(${Math.floor(
          window.scrollY / 30
        )}px)`;

        return () => {
          window.removeEventListener("scroll", () => {
            console.log("!!!");
          });
        };
      }
    });
  }, []);
  return (
    <div className={`${styles.herosectionGridItem} ${styles.gridItemRight}`}>
      <div className={styles.gridImages}>
        <div className={styles.mainImage}>
          <Image
            src="/herosection_image.png"
            alt="hero"
            width={553}
            height={574}
            style={{ objectFit: "contain", position: "relative" }}
            id="herosection_right_main_image"
          />
        </div>
        <Image
          src="/stickers/herosection_image_1.svg"
          width={216}
          height={177}
          alt="svg"
          style={{
            objectFit: "contain",
            position: "absolute",
            bottom: "-1rem",
            left: "-1rem",
          }}
          id="herosection_right_sticker_coins"
        />
        <Image
          src="/stickers/herosection_image_2.svg"
          width={128}
          height={184}
          alt="svg"
          style={{
            objectFit: "contain",
            position: "absolute",
            top: "5.5rem",
            right: "-2rem",
          }}
          id="herosection_right_sticker_brush"
        />
        <div className={styles.gridItemLinkWrapper}>
          <Link href="/" className={styles.gridItemLink}>
            <div className={styles.gridItemLinkIcon}>
              <Image
                src="/herosection_image_link.svg"
                alt="svg"
                width={34}
                height={33}
              ></Image>
            </div>
            <div className={styles.gridItemLinkText}>Vegalia</div>
          </Link>
        </div>
      </div>

      <div className={styles.creatorText}>Vegalia sells Procreate brushes</div>
    </div>
  );
}

export default HerosectionRight;
