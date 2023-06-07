// REACT/NEXT
import Link from "next/link";

// STYLES
import styles from "./header.module.scss";
function HeaderButton({ label, href, secondary }) {
  return (
    <Link
      href={href}
      className={`
    ${styles.headerButton}
    ${secondary ? styles.headerButtonSecondary : styles.headerButtonPrimary}
    `}
    >
      {label}
    </Link>
  );
}

export default HeaderButton;
