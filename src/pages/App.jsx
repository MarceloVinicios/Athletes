import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Apresentation/Home";
import Header from "../components/common/Header";
import NotFound from "../components/common/NotFound";
import Publication from "../components/common/Publication";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Publi" element={< Publication />} />
        </Routes>

      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
