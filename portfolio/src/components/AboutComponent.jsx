import React from "react";
import styles from "../css/About.module.css";

export default function AboutComponent() {
  return(
    <div className={styles.aboutWrapper}>
      <h3 className={styles.largeTitle}>Hello, I'm Simon</h3>
      <h2 className={styles.smallTitle}>Student - Software Engineer</h2>

      <div className={styles.contentBox}>
        <div className={styles.textBox}>
          <p className={styles.text}>I am a 4th year student studying Computer Science at 
            <span className={styles.highlight}> UC Davis</span>. I am a motivated individual
            looking to develop my skills developing front-end and back-end applications.
          </p>
          
          <p className={styles.text}>Outside, you can find me hiking, learning new skills,
            or playing games with friends.
          </p>          
        </div>
      </div>

    </div>
  )
}