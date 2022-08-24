import type { NextPage } from "next";
import ImageSelecter from "../components/ImageSelecter";

const Home: NextPage = () => {
  return (
    <>
      <div className="container">
        <ImageSelecter />
      </div>

      <style jsx>{`
        .container {
          margin: 10px;

          width: 97vw;
          height: 97vh;
          display: flex;
          border: 1px solid black;
        }
      `}</style>
    </>
  );
};

export default Home;
