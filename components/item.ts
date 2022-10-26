import line from "./img/line.png";

import uniformMan from "./img/clothes/uniform-man.png";
import m2mGrey from "./img/clothes/m2m_grey.png";

import lineEye from "./img/eye/line-eye.png";
import chorongEye from "./img/eye/chorong_chrong.png";
import blueEye from "./img/eye/blue_eye.png";
import toughEye from "./img/eye/tough_eye.png";
import injuredEye from "./img/eye/injured_eye.png";
import purpleEye from "./img/eye/purple_eye.png";

// import pinkFace from "./img/skin/pink-face.png";
import brightFace from "./img/skin/bright_skin.png";

import blackHair from "./img/hair/black-hair.png";
import yellowTail from "./img/hair/yello-hair.png";
import blueTwin from "./img/hair/blue_twin.png";
import pinkShucream from "./img/hair/pink-shucream.png";
import cherryJuice from "./img/hair/cherry_juice.png";
import silverDong from "./img/hair/silver_dong.png";
import goldMessedHair from "./img/hair/gold_messed.png";
import blackMessedHair from "./img/hair/messed_black.png";
import bananaHair from "./img/hair/bananaHair.png";

import chickPink from "./img/makeup/chick-pink.png";
import fullMakeup from "./img/makeup/full_makeup.png";

import lineMouth from "./img/mouth/line-mouth.png";
import redStrokeMouth from "./img/mouth/red_stripe_mouth.png";

import lineNose from "./img/nose/line-nose.png";
import yellowSmallNose from "./img/nose/small_yello_nose.png";

export const categories = {
  skin: "피부",
  hair: "머리",
  eye: "눈",
  nose: "코",
  mouth: "입",
  clothes: "옷",
  makeup: "화장",
};

export const items = {
  line: line,
  skin: { brightFace },
  hair: {
    blackHair,
    yellowTail,
    blueTwin,
    pinkShucream,
    cherryJuice,
    silverDong,
    goldMessedHair,
    blackMessedHair,
    bananaHair,
  },
  eye: { lineEye, chorongEye, blueEye, toughEye, injuredEye, purpleEye },
  nose: { lineNose, yellowSmallNose },
  mouth: { lineMouth, redStrokeMouth },
  clothes: { uniformMan, m2mGrey },
  makeup: { chickPink, fullMakeup },
};
