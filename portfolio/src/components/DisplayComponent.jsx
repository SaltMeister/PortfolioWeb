import React, {useState} from 'react';
import styles from "../css/Display.module.css";

export default function DisplayComponent({title, description, link}) {
  
  const [isHover, setIsHover] = useState(false);
  const goToLink = (e) => {
    window.open(link, "Null");
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


      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{description}</p>


    </div>
  )

}