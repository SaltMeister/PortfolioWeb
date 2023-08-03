import React from "react";
import styles from "../css/Header.module.css";

export default function HeaderComponent({arrayOfHeaders, setMode}){
  return(
    <div className={styles.name}>
      <div className={styles.rightItems}>
        {arrayOfHeaders.map((value, key) => {
          return(
            <button className={styles.header} onClick={(event) => setMode(key)} key={key}>{value}</button>
          )
        })}        
      </div>
    </div>
  );
}