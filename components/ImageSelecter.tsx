import { NextPage } from "next";
import CategoryItem from "./CategoryItem";

interface Props {}

const ImageSelecter: NextPage<Props> = () => {
  return (
    <>
      <div className="selecter">
        <div className="category">
          <CategoryItem text="test" />
          <CategoryItem text="test" />
          <CategoryItem text="test" />
          <CategoryItem text="test" />
          <CategoryItem text="test" />
          <CategoryItem text="test" />
          <CategoryItem text="test" />
          <CategoryItem text="test" />
          <CategoryItem text="test" />
          <CategoryItem text="test" />
          <CategoryItem text="test" />
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
