import React, { useEffect } from "react";
import "./Males.css";

import mMainImg1 from "../../assets/mMainImg1.png";
import likeditems from "../../assets/heart-solid.svg";
import Heart from "../../components/Heart";
import Header from "../../components/Header/Header";
import Root from "../Root/Root";

const Males = () => {
  const [likedCount, setLikedCount] = React.useState(0);

  // const counts = () => {
  //   setLikedCount(likedCount + 1);
  //   setLikedCount(likedCount + 1);
  //   <Heart likedCount={likedCount} />
  // }
  useEffect(() => {
    <Root likedCount={likedCount} />;
    console.log(likedCount);
  }, [likedCount]);

  return (
    <div>
      <div className="main-box">
        <div className="section-1 mMain-s1">
          <div className="img-box mMain-box">
            <img src={mMainImg1} alt="" />
            <p className="first-p">
              <span style={{ textDecoration: "line-through" }}>2 999₽</span> 2
              599₽
            </p>
            <p>Брюки</p>
            <b>O`stin</b>
            <img
              src={likeditems}
              alt=""
              width={20}
              onClick={() => setLikedCount((prev) => prev + 1)}
            />
          </div>
          <div className="img-box mMain-box">
            <img src={mMainImg1} alt="" />
            <p className="first-p">
              <span style={{ textDecoration: "line-through" }}>2 999₽</span> 2
              599₽
            </p>
            <p>Брюки</p>
            <b>O`stin</b>
            <img
              src={likeditems}
              alt=""
              width={20}
              onClick={() => setLikedCount((prev) => prev + 1)}
            />
          </div>
          <div className="img-box mMain-box">
            <img src={mMainImg1} alt="" />
            <p className="first-p">
              <span style={{ textDecoration: "line-through" }}>2 999₽</span> 2
              599₽
            </p>
            <p>Брюки</p>
            <b>O`stin</b>
            <img
              src={likeditems}
              alt=""
              width={20}
              onClick={() => setLikedCount((prev) => prev + 1)}
            />
          </div>
          <div className="img-box mMain-box">
            <img src={mMainImg1} alt="" />
            <p className="first-p">
              <span style={{ textDecoration: "line-through" }}>2 999₽</span> 2
              599₽
            </p>
            <p>Брюки</p>
            <b>O`stin</b>
            <img
              src={likeditems}
              alt=""
              width={20}
              onClick={() => setLikedCount((prev) => prev + 1)}
            />
          </div>
          <div className="img-box mMain-box">
            <img src={mMainImg1} alt="" />
            <p className="first-p">
              <span style={{ textDecoration: "line-through" }}>2 999₽</span> 2
              599₽
            </p>
            <p>Брюки</p>
            <b>O`stin</b>
            <img
              src={likeditems}
              alt=""
              width={20}
              onClick={() => setLikedCount(likedCount + 1)}
            />
          </div>
          <div className="img-box mMain-box">
            <img src={mMainImg1} alt="" />
            <p className="first-p">
              <span style={{ textDecoration: "line-through" }}>2 999₽</span> 2
              599₽
            </p>
            <p>Брюки</p>
            <b>O`stin</b>
            <img
              src={likeditems}
              alt=""
              width={20}
              onClick={() => setLikedCount((prev) => prev + 1)}
            />
          </div>
          <div className="img-box mMain-box">
            <img src={mMainImg1} alt="" />
            <p className="first-p">
              <span style={{ textDecoration: "line-through" }}>2 999₽</span> 2
              599₽
            </p>
            <p>Брюки</p>
            <b>O`stin</b>
            <img
              src={likeditems}
              alt=""
              width={20}
              onClick={() => setLikedCount((prev) => prev + 1)}
            />
          </div>
          <div className="img-box mMain-box">
            <img src={mMainImg1} alt="" />
            <p className="first-p">
              <span style={{ textDecoration: "line-through" }}>2 999₽</span> 2
              599₽
            </p>
            <p>Брюки</p>
            <b>O`stin</b>
            <img
              src={likeditems}
              alt=""
              width={20}
              onClick={() => setLikedCount((prev) => prev + 1)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Males;
