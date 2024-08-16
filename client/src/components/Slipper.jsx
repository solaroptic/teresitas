import React, { useState, useRef, useEffect } from "react";
import black from "../assets/blackTray.avif";
import fancy from "../assets/fancy.avif";
import fancy2 from "../assets/fancy2.avif";
import three from "../assets/three.avif";
import one from "../assets/one.avif";
import styles from "../css/Landing.module.css";

function Slipper() {
  const delay = 4500;
  const images = [black, fancy, fancy2, three, one];
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className={styles["slider-container"]}>
      <img
        src={images[index]}
        className={`${styles.slide} ${styles.active}`}
        key={index}
      ></img>
    </div>
  );
}
export default Slipper;
