import React from "react";
import styles from "../css/Contact.module.css";
import { SiLinkedin } from "react-icons/si";
export default function ContactComponent() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Contact Me</h3>
      <p>If you want to talk for say hello, lets connect on LinkedIn or send me an Email.</p>

      <div className={styles.contactBox}>
        <button className={styles.button}>Email</button>

        <div className={styles.icon}>
          <SiLinkedin  size={70}/>
        </div>        
      </div>

      
      
    </div>
  )
}