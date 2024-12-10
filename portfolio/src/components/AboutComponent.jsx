import React from "react";
import globalStyles from "../css/Global.module.css";
import styles from "../css/About.module.css";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
export default function AboutComponent() {
  const redirectLink = (url) => {
    window.open(url)
  }

  return(
    <div className={styles.aboutWrapper}>

      <h3 className={globalStyles.largeTitle}>Hello, I'm Simon</h3>
      <h2 className={globalStyles.subTitle}>Student - Software Engineer</h2>

      <div className={styles.flex}>
        <div onClick={() => redirectLink('https://github.com/SaltMeister')} 
        className={styles.socialLinks}>
          <AiFillGithub/>
        </div>

        <div onClick={() => redirectLink('https://www.linkedin.com/in/sihuang5/')}
        className={styles.socialLinks}>
          <AiFillLinkedin/>
        </div >        
      </div>

      

      <div className={[styles.contentBox, styles.flex]}>
        <div className={styles.textBox}>
          <p className={globalStyles.text}>I am a recent Computer Science from 
            <span className={globalStyles.highlight}> UC Davis</span> who is a Software Engineering 
            Fellow at <span className={globalStyles.highlight}>Headstarter</span>. I am a motivated individual
            looking to apply my skills developing Full-Stack applications.  
          </p>
          
          <p className={globalStyles.text}>Outside, you can find me hiking, gardening,
            or playing games with friends.
          </p>          
        </div>
      </div>

    </div>
  )
}