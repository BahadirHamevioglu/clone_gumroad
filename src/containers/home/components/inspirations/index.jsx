// REACT/NEXT
import Image from "next/image";
import Link from "next/link";

// COMPONENTS
import Container from "@/components/container";
import InspirationTag from "./components/inspiration-tag";

// STYLES
import styles from "./inspirations.module.scss";

// DATA
import { inspirationsData } from "./data";

function Inspirations() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.inspirationsTop}>
          <div className={styles.inspirationsTopTitle}>
            Looking for inspiration on what you can sell?
          </div>
          <div className={styles.inspirationsTopSubtitle}>
            Discover the best-selling products and creators on Gumroad
          </div>
        </div>

        <div className={styles.inspirationsBottom}>
          {inspirationsData.map((item, index) => (
            <InspirationTag
              title={item.title}
              href={item.href}
              key={item.href}
              image={item.image}
              text={item.text}
              backgroundColor={item.backgroundColor}
            >
              <div className={styles.inspirationsCategoryItemTags}>
                {...item.tags.map((tag) => (
                  <div
                    className={styles.inspirationsCategoryItemTagWrapper}
                    key={tag.title}
                  >
                    <Link
                      href={tag.href}
                      className={styles.inspirationsCategoryItemTag}
                    >
                      {tag.label}
                    </Link>
                  </div>
                ))}
              </div>
            </InspirationTag>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Inspirations;
