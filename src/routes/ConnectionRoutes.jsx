import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/common/Header/Header";
import Connection from "../pages/Connection/Connection";
import NotFound from "./NotFound";

const ConnectionRoutes = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Connection />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default ConnectionRoutes;
