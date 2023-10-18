import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Apresentation/Home";
import Header from "./components/common/Header/Header";
import NotFound from "./routes/NotFound";
import { Main } from "./StyledApp";
import RoutesPublication from "./pages/Feed/RoutesPublication";
import Register from "./pages/Register/Register";
import "./App.css"

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="feed/*" element={< RoutesPublication />} />
            <Route path="register" element={< Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Main>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
