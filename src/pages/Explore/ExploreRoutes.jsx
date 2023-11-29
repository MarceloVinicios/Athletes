import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../../components/common/Header/Header";
import Explore from "./Explore";

const ExploreRoutes = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Explore />} />
      </Routes>
    </div>
  );
};

export default ExploreRoutes;
