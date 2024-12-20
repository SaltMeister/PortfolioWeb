import React from 'react';
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { useInView } from 'react-intersection-observer';
import styles from "../css/Display.module.css";
import globalStyles from "../css/Global.module.css";
import ImageDisplay from "./ImageDisplay.jsx";

export default function DisplayComponent({title, description, gitLink, images, technologyUsed, isLiveLink, liveLink, willAnimateLeft}) {

  const {ref, inView} = useInView({"triggerOnce": true});
 // const [isLeftAnimated, setIsLeftAnimated] = useState(true);

  const goToLink = (e) => {
    window.open(gitLink, "Null");
  }
  const goToLiveLink = (e) => {
    window.open(liveLink, "Null");
  }

  // useEffect(() => {
  //   setIsLeftAnimated(willAnimateLeft)
  // }, [willAnimateLeft])

  return(
    <div ref={ref} className={styles.displayItem}>

      <div className={` 
        ${inView ?  (willAnimateLeft ? styles.slideFromLeftBox : styles.slideFromRightBox) : null} 
        ${styles.informationContent}`}>
        
        <h3 className={globalStyles.header}>{title}</h3>
        <p className={globalStyles.text}>{description}</p>
        <p className={`${inView ?  (willAnimateLeft ? styles.delaySlideFromLeftBox : styles.delaySlideFromRightBox) : null}  
        ${styles.technologyItems} ${globalStyles.text}`}>{technologyUsed}</p>
        <p className={styles.icon}>
          <span onClick={goToLink}> <AiFillGithub className={styles.linkIcons}/> </span> 
          {isLiveLink? <span onClick={goToLiveLink}><AiOutlineLink className={styles.linkIcons}/></span> : null}
        </p>         
      </div>

      <div className={` ${inView ?  (willAnimateLeft ? styles.imageSlideLeft : styles.imageSlideRight) : null}  ${styles.imageContent}`}>
          <ImageDisplay imageList = {images}/>
          {/* <img src={image} alt="text"/>         */}
      </div> 
    </div>
  )

}