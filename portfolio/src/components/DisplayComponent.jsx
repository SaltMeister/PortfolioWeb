import React from 'react';
import styles from "../css/Display.module.css";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import ImageDisplay from "./ImageDisplay.jsx";
import { useInView } from 'react-intersection-observer';

export default function DisplayComponent({title, description, gitLink, images, technologyUsed, isLiveLink, liveLink, direction}) {

  const {ref, inView} = useInView({"triggerOnce": true});

  const goToLink = (e) => {
    window.open(gitLink, "Null");
  }
  const goToLiveLink = (e) => {
    window.open(liveLink, "Null");
  }
  const styleDirection = direction === "right" ? styles.slideFromRightBox : styles.slideFromLeftBox
  return(
    <div ref={ref} className={styles.displayItem}>

      <div className={` 
        ${inView ? styleDirection : null} ${styles.content}`}>

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