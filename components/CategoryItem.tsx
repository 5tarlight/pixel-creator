import { NextPage } from "next";

interface Props {
  text: string;
  selected?: boolean;
}

const CategoryItem: NextPage<Props> = ({ text, selected = false }) => {
  const name = selected ? "item selected" : "item";

  return (
    <>
      <div className={name}>{text}</div>

      <style jsx>{`
        .item {
          width: 20%;
          height: 64px;
          display: flex;
          justify-content: center;
          line-height: 64px;
          color: grey;
        }

        .item:hover,
        .selected {
          cursor: pointer;
          font-weight: bold;
          color: black;
        }
      `}</style>
    </>
  );
};

export default CategoryItem;
