import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Apresentation/Home";
import Header from "../components/common/Header";
import NotFound from "../components/common/NotFound";
import Publication from "../components/Publication/Publication";
import Like from "../components/Publication/Like";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Publi" element={< Publication />} />
          <Route path="/like" element={< Like />} />
        </Routes>

      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
