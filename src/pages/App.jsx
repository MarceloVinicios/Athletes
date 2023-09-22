import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Apresentation/Home";
import Header from "../components/common/Header/Header";
import NotFound from "../routes/NotFound";
import Publication from "../components/Publication/Publication";
import Feed from "./Feed";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="feed" element={      <Feed />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Publi" element={< Publication />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
