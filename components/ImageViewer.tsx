import mergeImages from "merge-images";
import { NextPage } from "next";
import { useState } from "react";
import { ImageData } from "../pages";
import { items } from "./item";

interface Props {
  data: ImageData;
}

const ImageViewer: NextPage<Props> = ({ data }) => {
  const [img, setImg] = useState<string>("");

  mergeImages([
    data.skin,
    data.mouth,
    data.nose,
    data.eye,
    data.makeup,
    data.hair,
    data.clothes,
    items.line,
  ]).then((b64) => {
    setImg(b64);
  });

  return (
    <>
      <div className="container">
        <img src={img} width={786} height={786} />
        <div className="btn-container">
          <button className="print">출력</button>
          <button className="reset">초기화</button>
        </div>
      </div>

      <style jsx>{`
        .container {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        img {
          margin: 0 auto;
          display: block;
        }

        .btn-container {
          display: flex;
          align-content: center;
          justify-content: center;
          margin-top: 16px;
        }

        button {
          width: 250px;
          height: 64px;
          line-height: 64px;
        }
      `}</style>
    </>
  );
};

export default ImageViewer;
