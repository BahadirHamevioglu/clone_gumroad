// REACT/NEXT
import Link from "next/link";

// CONTAINER
import Container from "@/components/container";

// STYLES
import styles from "./ownroad.module.scss";
function Ownroad() {
  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.sectionTitle}>Make your own road</h2>
        <p className={styles.sectionText}>
          Whether you need more balance, flexibility, or just a different gig,
          we make it easier to chart a new path. You do not have to be a tech
          expert or even understand how to start a business. You just gotta take
          what you know and sell it.
        </p>
        <Link href="/features" className={styles.sectionLink}>
          <span>Explore Features</span>
          <span>→</span>
        </Link>
      </Container>
    </section>
  );
}

export default Ownroad;
