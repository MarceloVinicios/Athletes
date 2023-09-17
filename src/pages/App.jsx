import { useState } from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import PushButton from "../components/PushButton";
import Navbar from "../components/common/Nav.Styled";
import Content from "../components/common/Content.styled";
import LandingPage from "./landingPage";

function App() {
  return (
    <ChakraProvider>
      <LandingPage></LandingPage>
    </ChakraProvider>
  );
}

export default App;
