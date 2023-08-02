import { useState } from "react";
import downVector from "../assets/downVector.png";
import upVector from "../assets/upVector.png";
import styles from "../styles/Collapse.module.sass";

function Collapse({ title, children, className, contentClassName }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div
      className={`${styles.collapse} ${className} ${isOpen ? styles.open : ""}`}
    >
      <div className={styles.header} onClick={toggleOpen}>
        <h2>{title}</h2>
        <img
          src={isOpen ? upVector : downVector}
          alt={isOpen ? "Fermer" : "Ouvrir"}
        />
      </div>
      <div
        className={`${styles.content} ${contentClassName} ${
          isOpen ? styles.showContent : styles.hideContent
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default Collapse;
