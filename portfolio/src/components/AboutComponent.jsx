import React from "react";
import styles from "../css/About.module.css";

export default function AboutComponent({about, imageLink}) {
  return(
    <div className={styles.aboutWrapper}>
      <img src={imageLink} className={styles.image} alt="Profile"/>
      <p className={styles.text}>{about}</p>
    </div>
  )
}