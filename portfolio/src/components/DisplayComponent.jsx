import React from 'react';
import styles from "../css/Display.module.css";

export default function DisplayComponent({title, description, link}) {
  
  const goToLink = (e) => {
    window.open(link, "Null");
  }

  return(
    <div class={styles.displayItem} onClick={goToLink}>
      <h3 class={styles.title}>{title}</h3>
      <p class={styles.text}>{description}</p>
    </div>
  )

}