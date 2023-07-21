import React, {useState} from "react";
import styles from '../css/SideBar.module.css';

export default function SideBarComponent({arrayOfHeaders}) {
  const [isDisplayText, setIsDisplayText] = useState(false);

  console.log(isDisplayText);
  const handleClick = (event) => {

  }
  return(
    <div class={styles.sideBarWrapper}
    onMouseLeave={() => setIsDisplayText(false)}>
      
      {/* ICONS */}
      <div class={styles.sideBarContainer}
          onMouseEnter={() => setIsDisplayText(true)}  >
        
          {arrayOfHeaders.map((index, key) => 
            <div key={key} class={styles.sideBarItem}> 
              <p>{index} </p> 
            </div>
          )}
      </div> 
      
      {/* Hold TEXT */}
      <div class={`${styles.sideBarContainer} 
      ${styles.sideBarPopupContainer} 
      ${(isDisplayText ? (styles.display) : (styles.hide))}`}>
        
        {arrayOfHeaders.map((index, key) => 
          <div key={key} class={styles.sideBarItem} > 
              <p>{index} </p> 
          </div>
        )}
      </div>
      
     


    </div>
  );
}