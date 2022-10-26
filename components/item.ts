import line from "./img/line.png";

import uniformMan from "./img/clothes/uniform-man.png";
import m2mGrey from "./img/clothes/m2m_grey.png";
import orange from "./img/clothes/orange.png";

import lineEye from "./img/eye/line-eye.png";
import chorongEye from "./img/eye/chorong_chrong.png";
import blueEye from "./img/eye/blue_eye.png";
import toughEye from "./img/eye/tough_eye.png";
import injuredEye from "./img/eye/injured_eye.png";
import purpleEye from "./img/eye/purple_eye.png";
import smilingEye from "./img/eye/smiling_eye.png";
import bwEye from "./img/eye/bwEye.png";

// import pinkFace from "./img/skin/pink-face.png";
import brightFace from "./img/skin/bright_skin.png";
import shiningSkin from "./img/skin/shining_skin.png";

import blackHair from "./img/hair/black-hair.png";
import yellowTail from "./img/hair/yello-hair.png";
import blueTwin from "./img/hair/blue_twin.png";
import pinkShucream from "./img/hair/pink-shucream.png";
import cherryJuice from "./img/hair/cherry_juice.png";
import silverDong from "./img/hair/silver_dong.png";
import goldMessedHair from "./img/hair/gold_messed.png";
import blackMessedHair from "./img/hair/messed_black.png";
import bananaHair from "./img/hair/bananaHair.png";
import rainbowHair from "./img/hair/rainbow_hair.png";
import devilHair from "./img/hair/devil_hair.png";

import pinkCheek from "./img/makeup/cheek-pink.png";
import fullMakeup from "./img/makeup/full_makeup.png";
import lineCheek from "./img/makeup/line_cheek.png";
import redScar from "./img/makeup/red_scar.png";
import bearCap from "./img/makeup/bear_cap.png";
import devilCap from "./img/makeup/devil_cap.png";

import lineMouth from "./img/mouth/line-mouth.png";
import redStrokeMouth from "./img/mouth/red_stripe_mouth.png";
import merong from "./img/mouth/tongue.png";
import smile from "./img/mouth/smile.png";

import lineNose from "./img/nose/line-nose.png";
import yellowSmallNose from "./img/nose/small_yello_nose.png";
import dotNose from "./img/nose/dot_nose.png";

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
  skin: { brightFace, shiningSkin },
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
    rainbowHair,
    devilHair,
  },
  eye: {
    lineEye,
    chorongEye,
    blueEye,
    toughEye,
    injuredEye,
    purpleEye,
    smilingEye,
    bwEye,
  },
  nose: { lineNose, yellowSmallNose, dotNose },
  mouth: { lineMouth, redStrokeMouth, merong, smile },
  clothes: { uniformMan, m2mGrey, orange },
  makeup: { pinkCheek, fullMakeup, lineCheek, redScar, bearCap, devilCap },
};
