import React, {useState} from "react";
import styles from '../css/SideBar.module.css';

export default function SideBarComponent({arrayOfHeaders}) {
  const [isDisplayText, setIsDisplayText] = useState(false);
  const [isPopupCollision, setIsPopupCollision] = useState(false);

  console.log(isDisplayText);
  return(
    <div class={styles.sideBarWrapper}
    onMouseEnter={() => setIsDisplayText(true)} 
    onMouseLeave={() => setIsDisplayText(false)}>
      
      {/* ICONS */}
      <div class={styles.sideBarContainer} >
        
          {arrayOfHeaders.map((index, key) => 
            <div key={key} class={styles.sideBarItem}> 
              <p>{index} </p> 
            </div>
          )}
      </div> 
      
      {/* Hold TEXT */}
      {isDisplayText? (
      <div class={`${styles.sideBarContainer} ${styles.sideBarPopupContainer} ${(isDisplayText ? (styles.display) : (styles.hide))}`}>
      {arrayOfHeaders.map((index, key) => 
        <div key={key} class={styles.sideBarItem} > 
            <p>{index} </p> 
        </div>
      )}
    </div>   ) : (<div/>)}
      
     


    </div>
  );
}