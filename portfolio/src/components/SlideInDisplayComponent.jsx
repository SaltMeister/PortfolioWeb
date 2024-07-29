import React from "react";
import styles from "../css/SlideInDisplayComponent.module.css";
import { useInView } from "react-intersection-observer";

export default function SlideInDisplayComponent() { 

  const {ref, inView} = useInView({"triggerOnce": true});

  return (
    <div ref={ref}>
      <div  className={`${inView ? styles.slideFromRightBox: null}`}>
        <h2>{`Header inside viewport ${inView}.`}</h2>
      </div>
     
    </div>
  );
}