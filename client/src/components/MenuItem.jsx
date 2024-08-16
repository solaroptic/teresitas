import React from "react";
import styles from "../css/Landing.module.css";
import long3 from "../assets/long3.avif";
import black from "../assets/blackTray.avif";
import fancy from "../assets/fancy.avif";
import fancy2 from "../assets/fancy2.avif";
import single from "../assets/single.avif";
import two from "../assets/two.avif";
import three from "../assets/three.avif";
import one from "../assets/one.avif";
import pancho from "../assets/pancho.avif";
import twoSpace from "../assets/twoSpace.avif";
import water from "../assets/water.avif";
import waffle from "../assets/waffle.avif";
import coke from "../assets/coke.avif";
import topo from "../assets/topo.avif";
import tortilla from "../assets/tortilla.avif";

const MenuItem = ({ item, contents, price, shot }) => {
  const imgMap = {
    long3,
    black,
    fancy,
    fancy2,
    single,
    two,
    three,
    one,
    pancho,
    twoSpace,
    tortilla,
    water,
    waffle,
    topo,
    coke,
  };
  const imagePath = imgMap[shot];
  console.log(imagePath);
  return (
    <main className={`${styles["menuItem-main"]} `}>
      <img className={`${styles["menu-img"]} `} src={imagePath} alt={item} />
      <h3>{item}</h3>
      <p>{contents}</p>
      <p>{price}</p>
    </main>
  );
};

export default MenuItem;
