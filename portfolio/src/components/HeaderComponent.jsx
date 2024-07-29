import React from "react";
import styles from "../css/Header.module.css";

export default function HeaderComponent({arrayOfHeaders}){
  return(
    <div className={styles.name}>
      <div className={styles.rightItems}>
        {arrayOfHeaders.map((value, key) => {
          return(
            <button className={styles.header} onClick={() => 
              window.scrollTo({top: document.getElementById(value).offsetTop, behavior: "smooth"})}
              key={key}>{value}</button>
          )
        })}        
      </div>
    </div>
  );
}