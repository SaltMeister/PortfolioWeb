import React from "react";
import styles from "../css/About.module.css";

export default function AboutComponent() {
  return(
    <div className={styles.aboutWrapper}>
      <h3 className={styles.largeTitle}>Hello, I'm Simon</h3>
      <h2 className={styles.smallTitle}>Student - Software Engineer</h2>

      <div className={styles.contentBox}>
        <div className={styles.textBox}>
          <p className={styles.text}>I am a recent Computer Science from 
            <span className={styles.highlight}> UC Davis</span> who is a Software Engineering 
            Fellow at <span className={styles.highlight}>Headstarter</span>. I am a motivated individual
            looking to apply my skills developing Full-Stack applications.  
          </p>
          
          <p className={styles.text}>Outside, you can find me hiking, gardening,
            or playing games with friends.
          </p>          
        </div>
      </div>

    </div>
  )
}