import React from "react";
import { Route, Routes } from "react-router-dom";
import Feed from "../../../pages/Feed/Feed";
import NewPublicationModal from "../NewPublication/NewPublicationModal";

const RoutesPublication = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="post" element={<NewPublicationModal />} />
      </Routes>
    </div>
  );
};

export default RoutesPublication;
