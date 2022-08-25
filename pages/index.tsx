import type { NextPage } from "next";
import { useState } from "react";
import ImageSelecter from "../components/ImageSelecter";
import { items } from "../components/item";

const Home: NextPage = () => {
  const [obj, setObj] = useState({
    clothes: items.clothes.uniformMan,
    eye: items.eye.lineEye,
    skin: items.skin.pinkFace,
    nose: items.nose.lineNose,
    mouth: items.mouth.lineMouth,
    makeup: items.makeup.chickPink,
    hair: items.hair.blackHair,
  });

  const setItem = (cat: string, item: string) => {
    setObj({
      ...obj,
      [cat]: item,
    });
  };

  console.log(obj);

  return (
    <>
      <div className="container">
        <ImageSelecter setItem={setItem} />
      </div>

      <style jsx>{`
        .container {
          margin: 10px;
          width: 97vw;
          height: 97vh;
          display: flex;
          border: 1px solid black;
        }
      `}</style>
    </>
  );
};

export default Home;
