import { NextPage } from "next";
import Image from "next/image";

interface Props {
  src: string;
  name: string;
}

const ImageItem: NextPage<Props> = ({ src, name }) => {
  return (
    <>
      <div className="container">
        <Image className="img" src={src} alt={name} width={128} height={128} />
        <nav>{name}</nav>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          width: 100%;
          height: 128px;
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
