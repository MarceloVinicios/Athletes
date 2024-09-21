import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/common/Header/Header";
import Chat from "../pages/chat/Chat";
import NotFound from "./NotFound";

const ChatRoutes = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default ChatRoutes;
