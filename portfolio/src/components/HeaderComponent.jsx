import React from "react";
import styles from "../css/Header.module.css";

export default function HeaderComponent({headerText}){
  return(
    <div>
      <h1 class={`${styles.text} ${styles.botBorder}` }>{headerText}</h1>
    </div>
  );
}