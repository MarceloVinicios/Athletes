import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/common/Header/Header";
import Profile from "../pages/Profile/Profile";
import SideBar from "../components/SideBar/SideBar";
import NotFound from "./NotFound";

const RoutesProfile = () => {
  return (
    <div>
      <Header />
      <SideBar/>
      <Routes>
        <Route path="/:id" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default RoutesProfile;
