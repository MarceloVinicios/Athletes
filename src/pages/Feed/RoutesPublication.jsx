import React from "react";
import { Route, Routes } from "react-router-dom";
import Feed from "./Feed";
import Header from "../../components/common/Header/Header";
import PublicationOne from "./PublicationOne/PublicationOne";

const RoutesPublication = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/publication/:id" element={<PublicationOne />} />
      </Routes>
    </div>
  );
};

export default RoutesPublication;

