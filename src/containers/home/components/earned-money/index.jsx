// REACT/NEXT
import Image from "next/image";

// STYLES
import styles from "./earned-money.module.scss";

// COMPONENTS
import Container from "@/components/container";

function EarnedMoney() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.earnedMoneyTexts}>
          <h3 className={styles.earnedMoneyTitle}>
            $<span>3,085,860</span>
          </h3>
          <div className={styles.earnedMoneySubtitle}>
            The amount of income earned by Gumroad digital entrepreneurs last
            week.
          </div>
        </div>
      </Container>

      <div className={styles.earnedMoneyImage}>
        <Image
          src="/earned_money_cartoon.svg"
          fill
          alt="image"
          style={{ objectFit: "cover" }}
        ></Image>
      </div>

      <div className={styles.coinsStickers}>
        <Image
          src="/stickers/gum-coin-6.svg"
          alt="sticker"
          width={160}
          height={136}
          style={{ position: "absolute", top: "1rem", left: "-3rem" }}
        />
        <Image
          src="/stickers/gum-coin-1.svg"
          alt="sticker"
          width={192}
          height={232}
          style={{
            position: "absolute",
            top: "-9rem",
            left: "16vw",
          }}
        />
        <Image
          src="/stickers/gum-coin-3.svg"
          alt="sticker"
          width={144}
          height={146}
          style={{
            position: "absolute",
            top: "1rem",
            right: "10vw",
          }}
        />
        <Image
          src="/stickers/gum-coin-5.svg"
          alt="sticker"
          width={192}
          height={200}
          style={{
            position: "absolute",
            top: "12rem",
            right: "1rem",
          }}
        />
        <Image
          src="/stickers/gum-coin-4.svg"
          alt="sticker"
          width={224}
          height={225}
          style={{
            position: "absolute",
            top: "18rem",
            left: "1.6rem",
          }}
        />
      </div>
    </section>
  );
}

export default EarnedMoney;
