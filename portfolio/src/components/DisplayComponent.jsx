import React from 'react';
import styles from "../css/Display.module.css";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import ImageDisplay from "./ImageDisplay.jsx";

export default function DisplayComponent({title, description, gitLink, images, technologyUsed, isLiveLink, liveLink}) {

  const goToLink = (e) => {
    window.open(gitLink, "Null");
  }
  const goToLiveLink = (e) => {
    window.open(liveLink, "Null");
  }

  return(
    <div className={styles.displayItem}>


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
          <ImageDisplay imageList = {images}/>
          {/* <img src={image} alt="text"/>         */}
        </div> 
               
      </div>

    </div>
  )

}