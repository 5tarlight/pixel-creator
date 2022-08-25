import { NextPage } from "next";
import Image from "next/image";

interface Props {
  src: string;
  name: string;
  onClick(): void;
}

const ImageItem: NextPage<Props> = ({ src, name, onClick }) => {
  return (
    <>
      <div
        className="container"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onClick();
        }}
      >
        <Image className="img" src={src} alt={name} width={128} height={128} />
        <nav>{name}</nav>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          width: 100%;
          height: 128px;
        }

        .container:hover {
          font-weight: 300;
          cursor: pointer;
        }

        .img {
          margin-right: 16px;
        }

        nav {
          line-height: 128px;
          margin-left: 16px;
        }
      `}</style>
    </>
  );
};

export default ImageItem;
