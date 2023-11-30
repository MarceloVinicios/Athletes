import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../../components/common/Header/Header";
import Explore from "./Explore";
import ListPublicationByCategory from "./ListPublicationByCategory/ListPublicationByCategory";

const ExploreRoutes = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/:category/:idCategory" element={<ListPublicationByCategory />} />
      </Routes>
    </div>
  );
};

export default ExploreRoutes;
