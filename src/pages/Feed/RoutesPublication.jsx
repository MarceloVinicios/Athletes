import React from "react";
import { Route, Routes } from "react-router-dom";
import Feed from "./Feed";
import Modal from "../../components/ui/NewPublication/Modal";
import Header from "../../components/common/Header/Header";

const RoutesPublication = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/publication/:id" element={<Feed />} />
      </Routes>
    </div>
  );
};

export default RoutesPublication;
