// COMPONENTS
import Container from "@/components/container";

// STYLES
import styles from "./roadmap.module.scss";
function RoadMap() {
  return (
    <section className={styles.section}>
      <Container>
        <p className={styles.text}>
          You know all those great ideas you have? We want you to try them, lots
          of them, and find out what works.
        </p>
        <div className={styles.roadmapLoop}>
          <div className={styles.roadmapLoopInner}>
            <div className={styles.roadmapLoopInnerTop}>
              <div className={styles.roadmapLoopInnerTopItem}>
                The Gumroad Way
              </div>
              <div className={styles.roadmapLoopInnerTopItem}>Start Small</div>
            </div>

            <div className={styles.roadmapLoopInnerBottom}>
              <div className={styles.roadmapLoopInnerBottomItem}>
                Get Better Together
              </div>
              <div className={styles.roadmapLoopInnerBottomItem}>
                Learn Quickly
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default RoadMap;
