import React from "react";
import styles from "../css/Landing.module.css";
// import mike from "../assets/mikeB.avif";

const About = () => {
  return (
    <main className={`${styles["about-main"]}`}>
      <h3 className={`${styles["about-h3"]}`}>
        It all started in San Diego around 2004. We learned how to make birria
        from a powerful sorceress named Teresita. She imbued the birria with a
        special magic, not MSG.
      </h3>
      <h3 className={`${styles["about-h3"]}`}>
        When we moved back to Waco; a series of terrible restaurant experiences
        and a dream involving a talking dolphin led us to recreate Teresita's
        amazing birria.
      </h3>
      <h3 className={`${styles["about-h3"]}`}>
        Teresita's Birria - Rooted in culture and community
      </h3>
      <p className={`${styles["about-p"]}`}>(254)294-4913</p>
      {/* <div className={`${styles["containMike-div"]}`}>
        <img
          src={mike}
          alt="Mike in a Waldo suit"
          className={`${styles["aboutMike-img"]}`}
        />
      </div> */}
    </main>
  );
};

export default About;
