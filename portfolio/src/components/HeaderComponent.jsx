import React from "react";
import styles from "../css/Header.module.css";
import pdf from "../Simon_Resume.pdf";
export default function HeaderComponent({arrayOfHeaders}){
  const handleClick = (value) => {
    if(value === "Resume") {
      window.open(pdf, "_blank")
      return
    }  

    window.scrollTo({top: document.getElementById(value).offsetTop, behavior: "smooth"})
  }
  
  return(
    <div className={styles.name}>
      <div className={styles.rightItems}>
        {arrayOfHeaders.map((value, key) => {
          return(
            <button className={styles.header} onClick={() => handleClick(value)}
              key={key}>
                {value}
            </button>
          )
        })}        
      </div>
    </div>
  );
}