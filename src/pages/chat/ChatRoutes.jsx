import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../../components/common/Header/Header";
import Chat from "./Chat";

const ChatRoutes = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Chat />} />
      </Routes>
    </div>
  );
};

export default ChatRoutes;
