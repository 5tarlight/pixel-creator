import { NextPage } from "next";
import { useState } from "react";
import CategoryItem from "./CategoryItem";
import ImageItem from "./ImageItem";
import { categories, items } from "./item";

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
              onClick={() => {
                setCategory(k);
              }}
            />
          ))}
        </div>
        <div className="img">
          {Object.keys(items[category]).map((k, i) => (
            <ImageItem src={items[category][k]} name={k} key={i} />
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

        .img {
          height: 30%;
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default ImageSelecter;
