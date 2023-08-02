import React, {useState} from "react";
import styles from '../css/SideBar.module.css';

export default function SideBarComponent({arrayOfHeaders, arrayOfImages, setMode}) {
  const [isDisplayText, setIsDisplayText] = useState(false);

  const handleClick = (key) => {;
    setMode(key);
  }
  return(
    <div className={styles.sideBarWrapper}
    onMouseLeave={() => setIsDisplayText(false)}>
      {/* ICONS */}
      <div className={styles.sideBarContainer}
          onMouseEnter={() => setIsDisplayText(true)}  >
        
          {arrayOfHeaders.map((index, key) => 
            <div className={styles.sideBarItem} key={key} onClick={event => handleClick(key)}> 
              <img className={styles.image} key={key} alt="icon" src={arrayOfImages[key]}/>
            </div>
          )}
      </div> 
      
      {/* Hold TEXT */}
      <div className={`${styles.sideBarContainer} 
        ${styles.sideBarPopupContainer} 
        ${(isDisplayText ? (styles.display) : (styles.hide))}`}>
          
        {arrayOfHeaders.map((index, key) => 
          <div className={styles.sideBarItem} key={key} onClick={event => handleClick(key)}> 
              <p key={key}>{index} </p> 
          </div>
        )}
      </div>
      
     


    </div>
  );
}