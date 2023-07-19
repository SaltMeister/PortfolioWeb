import React from 'react';
import styles from "../css/Display.module.css";

export default function DisplayComponent({title, description, link, image}) {
  
  const goToLink = (e) => {
    window.open(link, "Null");
  }

  return(
    <div onClick={goToLink}>
      <img src={image} href={link} alt="no"></img>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )

}