import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Apresentation/Home";
import Header from "../components/common/Header/Header";
import Feed from "./Feed";
import Public from "./../components/Publication/Publication";
import NotFound from "../routes/NotFound";
import SideBar from "../components/common/SideBar";
import NewPublication from "../components/newPublication/NewPublication.style";


function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Header />
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="feed" element={<Feed />} />
          <Route path="*" element={<NotFound />} />
          <Route path="public" element={<Public />} />
          <Route path="modal" element={<NewPublication />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
