import React from "react";
import styles from "../css/DisplayBox.module.css";
export default function DisplayBoxComponent({children}) {
  return(
    <div className={styles.displayBox}>
      <h3 className={styles.header}>Some projects I've worked on</h3>

      <div className={styles.children}>
        {children}
      </div>
    </div>
  )
}