import { NextPage } from "next";
import CategoryItem from "./CategoryItem";

interface Props {}

export const categories = {
  skin: "피부",
  hair: "머리",
  eye: "눈",
  nose: "코",
  mouth: "입",
  clothes: "옷",
  makeup: "화장",
};

const ImageSelecter: NextPage<Props> = () => {
  return (
    <>
      <div className="selecter">
        <div className="category">
          {Object.values(categories).map((k, i) => (
            <CategoryItem text={k} key={i} />
          ))}
        </div>
      </div>
      <style jsx>{`
        .selecter {
          width: 30%;
          border-right: 1px solid rgb(0, 0, 0);
          display: flex;
          flex-direction: column;
        }

        .category {
          width: 100%;
          border-bottom: 1px solid black;
          display: flex;
          flex-wrap: wrap;
        }
      `}</style>
    </>
  );
};

export default ImageSelecter;
