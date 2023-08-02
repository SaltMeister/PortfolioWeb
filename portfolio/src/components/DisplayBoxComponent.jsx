import React from "react";
import styles from "../css/DisplayBox.module.css";
export default function DisplayBoxComponent({children, title}) {
  return(
    <div className={styles.displayBox}>
      <h3 className={styles.header}>{title}</h3>

      <div className={styles.children}>
        {children}
      </div>
    </div>
  )
}