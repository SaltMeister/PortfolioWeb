import React from "react";
import styles from "../css/DisplayBox.module.css";
export default function DisplayBoxComponent({children}) {
  return(
    <div class={styles.displayBox}>
      {children}
    </div>
  )
}