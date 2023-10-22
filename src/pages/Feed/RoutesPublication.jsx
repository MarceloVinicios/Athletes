import React from "react";
import { Route, Routes } from "react-router-dom";
import Feed from "./Feed";
import Modal from "../../components/ui/NewPublication/Modal";

const RoutesPublication = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="post" element={<Modal />} />
      </Routes>
    </div>
  );
};

export default RoutesPublication;
