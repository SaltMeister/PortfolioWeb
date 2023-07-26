import React, {useState} from "react";
import styles from '../css/SideBar.module.css';

export default function SideBarComponent({arrayOfHeaders, arrayOfImages, setMode}) {
  const [isDisplayText, setIsDisplayText] = useState(false);

  console.log(isDisplayText);
  const handleClick = (key) => {
    console.log(key);
    
    setMode(key);
  }
  return(
    <div class={styles.sideBarWrapper}
    onMouseLeave={() => setIsDisplayText(false)}>
      {/* ICONS */}
      <div class={styles.sideBarContainer}
          onMouseEnter={() => setIsDisplayText(true)}  >
        
          {arrayOfHeaders.map((index, key) => 
            <div class={styles.sideBarItem} onClick={event => handleClick(key)}> 
              <img class={styles.image} key={key} alt="icon" src={arrayOfImages[key]}/>
            </div>
          )}
      </div> 
      
      {/* Hold TEXT */}
      <div class={`${styles.sideBarContainer} 
      ${styles.sideBarPopupContainer} 
      ${(isDisplayText ? (styles.display) : (styles.hide))}`}>
        
        {arrayOfHeaders.map((index, key) => 
          <div class={styles.sideBarItem} onClick={event => handleClick(key)}> 
              <p key={key}>{index} </p> 
          </div>
        )}
      </div>
      
     


    </div>
  );
}