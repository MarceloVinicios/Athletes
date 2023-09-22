import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Apresentation/Home";
import Header from "../components/common/Header/Header";
import NotFound from "../routes/NotFound";
import Publication from "../components/Publication/Publication";
import Feed from "./Feed";
import BannerProfile from "../components/Profile/BannerProfile";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="feed" element={      <Feed />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Publi" element={< Publication />} />
          <Route path="/Banner" element={<BannerProfile/>} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
