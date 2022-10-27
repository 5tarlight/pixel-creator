import type { NextPage } from "next";
import Head from "next/head";
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
  accesary: StaticImageData;
}

const Home: NextPage = () => {
  const initialState: ImageData = {
    clothes: items.clothes.uniform,
    eye: items.eye.lineEye,
    skin: items.skin.brightFace,
    nose: items.nose.lineNose,
    mouth: items.mouth.lineMouth,
    makeup: items.makeup.pinkCheek,
    hair: items.hair.blackHair,
    accesary: items.accesary.cherry,
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
      <Head>
        <title>AI 코디스트 김규산</title>
      </Head>
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
