import type { NextPage } from "next";
import { StaticImageData } from "next/image";
import { useState } from "react";
import ImageSelecter from "../components/ImageSelecter";
import ImageViewer from "../components/ImageViewer";
import { items } from "../components/item";

export interface ImageData {
  clothes: StaticImageData;
  eye: StaticImageData;
  skin: StaticImageData;
  nose: StaticImageData;
  mouth: StaticImageData;
  makeup: StaticImageData;
  hair: StaticImageData;
}

const Home: NextPage = () => {
  const initialState: ImageData = {
    clothes: items.clothes.uniformMan,
    eye: items.eye.lineEye,
    skin: items.skin.pinkFace,
    nose: items.nose.lineNose,
    mouth: items.mouth.lineMouth,
    makeup: items.makeup.chickPink,
    hair: items.hair.blackHair,
  };

  const [obj, setObj] = useState<ImageData>(initialState);

  const setItem = (cat: string, item: string) => {
    setObj({
      ...obj,
      [cat]: item,
    });
  };

  return (
    <>
      <div className="container">
        <ImageSelecter setItem={setItem} />
        <ImageViewer data={obj} resetImg={() => setObj(initialState)} />
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
