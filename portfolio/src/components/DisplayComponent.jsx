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

      <div >
        {isHover? (        
        
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class={styles.arrow} viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
          </svg>) : 
          
          (<div/>)}
   
      </div>

    </div>
  )

}