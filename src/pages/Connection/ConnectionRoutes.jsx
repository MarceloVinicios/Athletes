import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../../components/common/Header/Header";
import Connection from "./Connection";

const ConnectionRoutes = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Connection />} />
      </Routes>
    </div>
  );
};

export default ConnectionRoutes;
