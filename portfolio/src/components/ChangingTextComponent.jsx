import { useState, useEffect } from "react";
import styles from "../css/ChangingText.module.css"
import globalStyles from "../css/Global.module.css";
export default function ChangingTextComponent({textList}) {
  let [currentIndex, setCurrentIndex] = useState(0);

  // Changing Subheading text animation
  useEffect(() => {
    const interval = setInterval(() => {
      const index = currentIndex+1 > textList.length - 1 ? 0 : currentIndex+1;
        
      setCurrentIndex(index);
    }, 6000); 
    
    return () => clearInterval(interval);
  }, [currentIndex, textList.length])


  if(textList === null)
    return <></>

  return (
    <div className={`${styles.container}`}>
      {textList[currentIndex].split('').map((char, index) => (
        <h2 
          key={char+index} 
          className={`${styles.slideUp} ${globalStyles.subTitle}`} 
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {char === ' ' ? (<pre>{char}</pre>) : char}
        </h2>
      ))}
    </div>
  )
}