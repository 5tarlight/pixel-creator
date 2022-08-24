import { NextPage } from "next";

interface Props {
  text: string;
}

const CategoryItem: NextPage<Props> = ({ text }) => {
  return (
    <>
      <div className="item">{text}</div>

      <style jsx>{`
        .item {
          width: 20%;
          height: 64px;
          display: flex;
          justify-content: center;
          line-height: 64px;
          color: grey;
        }

        .item:hover {
          cursor: pointer;
          font-weight: bold;
          color: black;
        }
      `}</style>
    </>
  );
};

export default CategoryItem;
