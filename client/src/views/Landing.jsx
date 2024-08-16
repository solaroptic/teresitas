import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../utility/Context";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GiMirrorMirror } from "react-icons/gi";
import styles from "../css/Landing.module.css";
import taco from "../assets/Taco.svg";
import logo from "../assets/logoTop.avif";
import logo2 from "../assets/logoTopGold.avif";
////////////////////////////////////////////
import HomeDisplay from "./HomeDisplay";
import Admin from "./Admin";
import Menu from "./Menu";
import Login from "./Login";
import Nav from "../components/Nav";
import Reviews from "./Reviews";
import About from "./About";

const Landing = () => {
  const [section, setSection] = useState("home");
  const [isAdmin, setIsAdmin] = useState(false);

  const sendHome = () => {
    setSection("home");
  };
  return (
    <MyContext.Provider value={{ section, setSection, isAdmin, setIsAdmin }}>
      <Nav />

      <svg className={styles.svg}>
        <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
          <path d="M0,1 L0,.18 C0.6,0.75,0.85,0.5,1,1"></path>
        </clipPath>
      </svg>
      <div className={styles.clipped}></div>
      <img
        src={logo}
        className={styles["logo-img"]}
        alt="Classical Mexican woman with a flower in her hair"
      />
      <img
        src={logo2}
        className={`${styles["logo-img"]} ${styles["logo2-img"]}`}
        alt="Classical Mexican woman with a flower in her hair"
      />
      <div className={`${styles["landing-container"]} ${styles.center}`}>
        <div
          className={`${styles["headingGrid-div"]} ${styles.grid2}`}
          onClick={sendHome}
        >
          <img src={taco} className={styles["tacos"]} />
          <span className={styles["heading"]}>Teresita's</span>
          <img src={taco} className={styles["tacos"]} />
        </div>
        <p className={styles["birria-p"]}>BIRRIA</p>
        {!isAdmin && section === "home" && <HomeDisplay />}
        {isAdmin && <Admin />}
        {section === "menu" && <Menu />}
        {section === "about" && <About />}
        {section === "admin" && <Login />}
        {section === "reviews" && <Reviews />}
        {(section === "menu" || section === "home") && (
          <Link
            className={styles["order"]}
            to="https://teresitas-birria.square.site/"
          >
            Order Now!
          </Link>
        )}
        <section className={styles["icons"]}>
          <Link to="https://www.facebook.com/teresitas.birria/">
            <FaFacebook />
          </Link>
          <Link to="https://www.instagram.com/teresitas_birria/">
            <FaInstagram />
          </Link>
          <Link to="https://www.linkedin.com/in/john-fabiszewski-00b8322a9?trk=public_post_feed-actor-name">
            <FaLinkedin />
          </Link>
        </section>
      </div>
    </MyContext.Provider>
  );
};

export default Landing;
