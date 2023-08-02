import React from "react";
import styles from "../css/Header.module.css";

export default function HeaderComponent({arrayOfHeaders, setMode}){
  const handleClick = (key) => {
    setMode(key);
  }
  return(
    <div className={styles.name}>
      <div className={styles.rightItems}>
        {arrayOfHeaders.map((value, key) => {
          return(
            <button className={styles.header} onClick={(event) => handleClick(key)} key={key}>{value}</button>
          )
        })}        
      </div>
    </div>
  );
}