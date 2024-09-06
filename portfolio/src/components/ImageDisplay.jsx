import React, { useState } from "react";
import styles from "../css/ImageDisplay.module.css";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";

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
      {/* Image Wrapper */}
      <div className={styles.imageContainer} >
        <img
          src={imageList[index]}
          alt=' '
        />
      </div>
      {/* Image Slider */}
      <div className={styles.navigator}>
        <button
          className={`${styles.leftButton} ${styles.button}`}
          onClick={() => setImageIndex(-1)}
        >
        <FaLessThan opacity={index === 0 ? 0 : 1} />

        </button>

        {/*  Dots for images */}
        {imageList?.map((image, i) => {
          if (i === index)
            return <GoDotFill color="#00ADB5"/>

          else return <GoDot />
        })}

        <button
          className={`${styles.rightButton} ${styles.button}`}
          onClick={() => setImageIndex(1)}
        >
            <FaGreaterThan opacity={index === imageList.length-1 ? 0 : 1} />
        </button>
      </div>
    </div>
  );
};

export default ImageDisplay;