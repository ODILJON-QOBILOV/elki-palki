import React from "react";

import mainImg1 from "../../assets/fmainImg1.png";
import mainImg2 from "../../assets/fmainImg2.png";
import mainImg3 from "../../assets/fmainImg3.png";
import './Females.css'

const FemalesPage = () => {
  return (
    <>
      <div className="main-box">
        <div
          className="fsection-1"
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <div className="img-box">
            <img src={mainImg1} alt="" />
            <p>Пиджаки</p>
            <b>На улицу и в офис</b>
          </div>
          <div className="right">
            <div className="img-box">
              <img src={mainImg2} alt="" />
              <p>Колготки</p>
              <b>Новая коллекция</b>
            </div>
            <div className="img-box">
              <img src={mainImg3} alt="" />
              <p>Колготки</p>
              <b>Новая коллекция</b>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FemalesPage;
