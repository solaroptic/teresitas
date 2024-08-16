import React from "react";
import styles from "../css/Landing.module.css";
import MessageBoard from "../components/MessageBoard";
import Slider from "../components/Slider";

const HomeDisplay = () => {
  return (
    <main className={`${styles["home-main"]} ${styles.center}`}>
      <section className={`${styles["home-main-section"]}`}>
        <p className={`${styles["home-main-headline"]}`}>
          Flavorful, authentic birria
        </p>
        <Slider />
      </section>
      <aside>
        <MessageBoard />
      </aside>
    </main>
  );
};

export default HomeDisplay;
