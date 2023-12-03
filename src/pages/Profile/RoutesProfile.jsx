import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../../components/common/Header/Header";
import Profile from "./Profile";

const RoutesProfile = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/:id" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default RoutesProfile;
