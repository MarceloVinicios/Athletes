import React from "react";
import { Route, Routes } from "react-router-dom";
import Feed from "../pages/Feed/Feed";
import Header from "../components/common/Header/Header";
import PublicationOne from "../pages/PublicationOne/PublicationOne";
import PublicationLikes from "../pages/PublicationLikes/PublicationLikes";
import SideBar from "../components/SideBar/SideBar";
import NotFound from "./NotFound";

const RoutesPublication = () => {
  return (
    <div>
      <Header />
      <SideBar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/publication/:id" element={<PublicationOne />} />
        <Route path="/publications/likes" element={<PublicationLikes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default RoutesPublication;

