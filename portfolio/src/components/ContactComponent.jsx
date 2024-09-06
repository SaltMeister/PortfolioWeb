import React from "react";
import styles from "../css/Contact.module.css";
import { SiLinkedin } from "react-icons/si";
export default function ContactComponent() {

  const sendEmail = (e) => {
    window.open(`mailto:simonhuang647@gmail.com`, `Comms`);
  }

  const goLI = (e) => {
    window.open("https://www.linkedin.com/in/sihuang5/");
  }
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Contact Me</h3>
      <p>If you want to talk or say hello, lets connect on LinkedIn or send me an Email.</p>

      <div className={styles.contactBox}>
        <button className={styles.button} onClick={sendEmail}>Email</button>

        <div className={styles.icon} onClick={goLI}>
          <SiLinkedin/>
        </div>        
      </div>

      
      
    </div>
  )
}