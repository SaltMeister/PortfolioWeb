import React from "react";
// Global Styles for text sizes
import globalStyles from "../css/Global.module.css"; 
import styles from "../css/About.module.css";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import ChangingTextComponent from "./ChangingTextComponent";
export default function AboutComponent() {
  const redirectLink = (url) => {
    window.open(url, "_blank");
  }


  const textDisplayList = ["Software Engineer", "IT Technician"];

  return(
    <div className={styles.aboutWrapper}>
      {/* Top Section of About */}
      <div>
        <h3 className={globalStyles.largeTitle}>Hello, I'm Simon</h3>
        <ChangingTextComponent 
          textList={textDisplayList}
        />

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
      </div>
      {/* Gap */}
      {/* Bottom Section of About */}
      <div className={[styles.contentBox, styles.flex]}>
        <div className={styles.textBox}>
          <p className={globalStyles.text}>I am a recent Computer Science from 
            <span className={globalStyles.highlight}> UC Davis</span> interested in both Software Engineering and Information Technology.
            I enjoy solving people's tech related problems and have plenty of customer service experience from previous jobs. 
            Currently pursuing Google IT Helpdesk certification before moving on to Comp TIA A+.  
          </p>
          
          <p className={globalStyles.text}>Outside, you can find me hiking, gardening,
            or playing games with friends.
          </p>          
        </div>
      </div>

    </div>
  )
}