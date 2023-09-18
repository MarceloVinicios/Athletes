import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Apresentation/Home";
import Header from "../components/common/Header";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
