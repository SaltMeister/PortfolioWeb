import React from "react";
import styles from "../css/About.module.css";

export default function AboutComponent({about, imageLink}) {
  return(
    <div class={styles.aboutWrapper}>
      <img src={imageLink} class={styles.image} alt="Profile"/>
      <p class={styles.text}>{about}</p>
    </div>
  )
}