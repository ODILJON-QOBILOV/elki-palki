import React from 'react'
import './Home.css'

import mainImg1 from "../../assets/mainImg1.png";
import mainImg2 from "../../assets/mainImg2.png";
import mainImg3 from "../../assets/mainImg3.png";

const Home = () => {
  return (
    <>
      <div className="main-box">
        <div className="section-1">
          <div className="img-box">
            <img src={mainImg1} alt="" />
            <p>Женщинам</p>
          </div>
          <div className="img-box">
            <img src={mainImg2} alt="" />
            <p>Мужчинам</p>
          </div>
          <div className="img-box">
            <img src={mainImg3} alt="" />
            <p>Детям</p>
          </div>
        </div>
        <div className="section-2"></div>
      </div>
    </>
  );
}

export default Home
