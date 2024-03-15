import React, { useContext } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

import logoEl1 from "../../assets/logoElement-1.svg";
import logo from "../../assets/logo.svg";
import logoEl2 from "../../assets/logoElement-2.svg";
import userIcon from "../../assets/userIcon.png";
import korzinaIcon from "../../assets/karzinaIcon.png";
import likedItems from "../../assets/liked.png";

const Header = ({ likedCount }) => {
  console.log(likedCount, "clikc");
  return (
    <div>
      <header>
        <div className="content">
          <div className="logo">
            <img src={logoEl1} alt="" />
            <img src={logo} alt="" />
            <img src={logoEl2} alt="" />
          </div>
          <nav>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Главная
            </NavLink>
            <NavLink
              to={"femalesPage"}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Женщинам
            </NavLink>
            <NavLink
              to={"malesPage"}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Мужчинам
            </NavLink>
            <NavLink
              to={"kidsPage"}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Детям
            </NavLink>
          </nav>
          <div className="header-details">
            <img src={userIcon} alt="" />
            <img src={korzinaIcon} alt="" />
            <div className="header-element">
              <img src={likedItems} alt="" />
              <span>{likedCount}</span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
