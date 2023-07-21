import React from "react";
import styles from "../css/DisplayBox.module.css";
export default function DisplayBoxComponent({children, title}) {
  return(
    <div class={styles.displayBox}>
      <h3 class={styles.header}>{title}</h3>
      <div>
        {children}
      </div>
    </div>
  )
}