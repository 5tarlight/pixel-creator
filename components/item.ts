import line from "./img/line.png";
import uniformMan from "./img/clothes/uniform-man.png";
import lineEye from "./img/eye/line-eye.png";
import pinkFace from "./img/skin/pink-face.png";
import blackHair from "./img/hair/black-hair.png";
import chickPink from "./img/makeup/chick-pink.png";
import lineMouth from "./img/mouth/line-mouth.png";
import lineNose from "./img/nose/line-nose.png";

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
  skin: { pinkFace },
  hair: { blackHair },
  eye: { lineEye },
  nose: { lineNose },
  mouth: { lineMouth },
  clothes: { uniformMan },
  makeup: { chickPink },
};
