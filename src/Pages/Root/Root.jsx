import React from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Heart from "../../components/Heart";

const Root = ({ likedCount }) => {
  return (
    <div>
      <Header likedCount={likedCount} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
