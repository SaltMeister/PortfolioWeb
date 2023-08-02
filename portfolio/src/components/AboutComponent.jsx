import React from "react";
import styles from "../css/About.module.css";

export default function AboutComponent() {
  return(
    <div className={styles.aboutWrapper}>
      <h3 className={styles.largeTitle}>Hello I'm Simon</h3>
      <h2 className={styles.smallTitle}>Student - Software Engineer</h2>

      <div className={styles.contentBox}>
        <div>
          <p className={styles.text}>I am a 4th year student studying Computer Science at the 
            University of California Davis. I am a motivated individual
            looking to develop my skills developing front-end and back-end applications.
          </p>

          <p className={styles.text}>Outside, you can find me hiking, learning new skills,
            or playing games with friends.
          </p>          
        </div>

        <div>'
          <img src="images/profile.jpg" className={styles.image} alt="Profile"/>  
        </div>
      </div>

    </div>
  )
}