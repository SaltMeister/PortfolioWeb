import React, { useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import styles from "../css/ImageDisplay.module.css";

const ImageDisplay = ({ imageList }) => {
  const [index, setIndex] = useState(0);
  const setImageIndex = (changeValue) => {
    if (index === 0 && changeValue === -1)
      return;

    if (index === imageList.length - 1 && changeValue === 1)
      return;
    console.log(index);
    setIndex(index + changeValue);

  }

  return (
    <div className={styles.wrapper}>
      {imageList.length > 0 && index > 0 && (
        <button
          className={`${styles.leftButton} ${styles.button}`}
          onClick={() => setImageIndex(-1)}
        >
          <AiOutlineArrowLeft size={50} />
        </button>
      )}

      <img
        src={imageList[index]}
        alt=' '
      />

      {imageList.length > 0 && index < imageList.length - 1 && (
        <button
          className={`${styles.rightButton} ${styles.button}`}
          onClick={() => setImageIndex(1)}
        >

          <AiOutlineArrowRight size={50}/> 
        </button>
      )}
    </div>
  );
};

export default ImageDisplay;