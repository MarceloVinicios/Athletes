import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/common/Header/Header";
import Explore from "../pages/Explore/Explore";
import ListPublicationByCategory from "../components/ui/ListPublicationByCategory/ListPublicationByCategory";
import NotFound from "./NotFound";

const ExploreRoutes = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/:category/:idCategory" element={<ListPublicationByCategory />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default ExploreRoutes;
