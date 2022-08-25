import { NextPage } from "next";
import { useState } from "react";
import CategoryItem from "./CategoryItem";
import { categories } from "./item";

interface Props {}

const ImageSelecter: NextPage<Props> = () => {
  const [category, setCategory] = useState(Object.keys(categories)[0]);

  return (
    <>
      <div className="selecter">
        <div className="category">
          {Object.keys(categories).map((k, i) => (
            <CategoryItem
              text={categories[k]}
              key={i}
              selected={k === category}
            />
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
