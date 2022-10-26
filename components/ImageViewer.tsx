import mergeImages from "merge-images";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { ImageData } from "../pages";
import { items } from "./item";

interface Props {
  data: ImageData;
  resetImg(): void;
}

const ImageViewer: NextPage<Props> = ({ data, resetImg }) => {
  const [img, setImg] = useState<string>("");

  useEffect(() => {
    mergeImages([
      data.skin,
      data.mouth,
      data.nose,
      data.eye,
      data.makeup,
      items.line,
      data.clothes,
      data.hair,
    ]).then((b64) => {
      setImg(b64);
    });
  }, [data]);

  return (
    <>
      <div className="container">
        <img src={img} width={786} height={786} />
        <div className="btn-container">
          <button
            className="print"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              // window.open("google.com", "_blank")?.focus();

              const src =
                "<html><head><scri" +
                "pt>function step1(){\n" +
                "setTimeout('step2()', 10);}\n" +
                "function step2(){window.print();window.close()}\n" +
                "</scri" +
                "pt>" +
                `
                <style>
                  img {
                    width: 512px;
                    height: 512px;
                  }
                </style>
                ` +
                "</head><body onload='step1()'>\n" +
                "<img src='" +
                img +
                "' /></body></html>";
              const Pagelink = "about:blank";
              const pwa = window.open(Pagelink, "_new");
              pwa?.document.open();
              pwa?.document.write(src);
              pwa?.document.close();
            }}
          >
            출력
          </button>
          <button
            className="reset"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              resetImg();
            }}
          >
            초기화
          </button>
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
          font-size: 1.5rem;
          border: none;
          cursor: pointer;
        }

        .print {
          background-color: #83f783;
          border-top-left-radius: 7px;
          border-bottom-left-radius: 7px;
        }

        .reset {
          background-color: #ff7171;
          border-top-right-radius: 7px;
          border-bottom-right-radius: 7px;
        }
      `}</style>
    </>
  );
};

export default ImageViewer;
