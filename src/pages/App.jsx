import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Apresentation/Home";
import Header from "../components/common/Header/Header";
import Feed from "./Feed";
import Public from "./../components/Publication/Publication";
import NotFound from "../routes/NotFound";
import NewPublication from "../components/newPublication/NewPublication";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="feed" element={<Feed />} />
          <Route path="*" element={<NotFound />} />
          <Route path="public" element={<Public />} />
          <Route path="newPub" element={<NewPublication  />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
