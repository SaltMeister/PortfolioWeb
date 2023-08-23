import React, {useState} from 'react';
import styles from "../css/Display.module.css";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

export default function DisplayComponent({title, description, gitLink, projLink, image, technologyUsed, isLiveLink, liveLink}) {
  
  const [isHover, setIsHover] = useState(false);
  const [iconSize, setIconSize] = useState(60);

  

  const goToLink = (e) => {
    window.open(gitLink, "Null");
  }
  const goToLiveLink = (e) => {
    window.open(liveLink, "Null");
  }
  const setFalse = () => {
    setIsHover(false);
  }
  const setTrue = () => {
    setIsHover(true);
  }
  return(
    <div className={styles.displayItem}
        onMouseEnter={setTrue} onMouseLeave={setFalse}>


      <div className={styles.content}>

        <div className={styles.informationContent}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.text}>{description}</p>
          <p className={styles.technologyItems}>{technologyUsed}</p>
          <p className={styles.icon}>
            <span onClick={goToLink}> <AiFillGithub size={50} className={styles.linkIcons}/> </span> 
            {isLiveLink? <span onClick={goToLiveLink}><AiOutlineLink size={50} className={styles.linkIcons}/></span> : null}
          </p>

        </div>

        <div className={styles.imageContent}>
          <img src={image} alt="text"/>        
        </div> 
               
      </div>

    </div>
  )

}