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
      items.line,
      data.clothes,
      data.makeup,
      data.hair,
      data.accesary,
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
            onClick={async (e) => {
              // e.stopPropagation();
              // e.preventDefault();
              // // window.open("google.com", "_blank")?.focus();

              // const src =
              //   "<html><head><scri" +
              //   "pt>function step1(){\n" +
              //   "setTimeout('step2()', 10);}\n" +
              //   "function step2(){window.print();window.close()}\n" +
              //   "</scri" +
              //   "pt>" +
              //   `
              //   <style>
              //     img {
              //       width: 512px;
              //       height: 512px;
              //     }
              //   </style>
              //   ` +
              //   "</head><body onload='step1()'>\n" +
              //   "<img src='" +
              //   img +
              //   "' /></body></html>";
              // const Pagelink = "about:blank";
              // const pwa = window.open(Pagelink, "_new");
              // pwa?.document.open();
              // pwa?.document.write(src);
              // pwa?.document.close();

              // function copyToClipboard(textToCopy) {
              //   // navigator clipboard api needs a secure context (https)
              //   if (navigator.clipboard && window.isSecureContext) {
              //     // navigator clipboard api method'
              //     return navigator.clipboard.writeText(textToCopy);
              //   } else {
              //     // text area method
              //     let textArea = document.createElement("textarea");
              //     textArea.value = textToCopy;
              //     // make the textarea out of viewport
              //     textArea.style.position = "fixed";
              //     textArea.style.left = "-999999px";
              //     textArea.style.top = "-999999px";
              //     document.body.appendChild(textArea);
              //     textArea.focus();
              //     textArea.select();
              //     return new Promise<void>((res, rej) => {
              //       // here the magic happens
              //       document.execCommand("copy") ? res() : rej();
              //       textArea.remove();
              //     });
              //   }
              // }

              // copyToClipboard("I'm going to the clipboard !")
              //   .then(() => console.log("text copied !"))
              //   .catch(() => console.log("error"));

              function fixBinary(bin: string) {
                var length = bin.length;
                var buf = new ArrayBuffer(length);
                var arr = new Uint8Array(buf);
                for (var i = 0; i < length; i++) {
                  arr[i] = bin.charCodeAt(i);
                }
                return buf;
              }

              const binary = fixBinary(atob(img.split(",")[1]));
              navigator.clipboard.write([
                new ClipboardItem({
                  "image/png": new Blob([binary], { type: "image/png" }),
                }),
              ]);
            }}
          >
            클립보드에 복사
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
