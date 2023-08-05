import React, {useState} from 'react';
import styles from "../css/Display.module.css";

export default function DisplayComponent({title, description, gitLink, projLink, image, technologyUsed}) {
  
  const [isHover, setIsHover] = useState(false);
  const goToLink = (e) => {
    window.open(gitLink, "Null");
  }
  const setFalse = () => {
    setIsHover(false);
  }
  const setTrue = () => {
    setIsHover(true);
  }
  return(
    <div className={styles.displayItem} onClick={goToLink}
        onMouseEnter={setTrue} onMouseLeave={setFalse}>


      <div className={styles.content}>

        <div className={styles.informationContent}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.text}>{description}</p>
          <p className={styles.technologyItems}>{technologyUsed}</p>
          <p className={styles.icon}>Github - Link</p>
        </div>

        <div className={styles.imageContent}>
          <img src={image} alt="text"/>        
        </div> 
               
      </div>

    </div>
  )

}