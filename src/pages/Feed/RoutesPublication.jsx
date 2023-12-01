import React from "react";
import { Route, Routes } from "react-router-dom";
import Feed from "./Feed";
import Header from "../../components/common/Header/Header";
import PublicationOne from "./PublicationOne/PublicationOne";
import PublicationLikes from "./PublicationLikes/PublicationLikes";

const RoutesPublication = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/publication/:id" element={<PublicationOne />} />
        <Route path="/publications/likes" element={<PublicationLikes />} />
      </Routes>
    </div>
  );
};

export default RoutesPublication;

