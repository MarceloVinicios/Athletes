import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Apresentation/Home";
import Header from "../components/common/Header";
import NotFound from "../components/common/NotFound";
import Teste from "./Teste"

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teste" element={<Teste />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
