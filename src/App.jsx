import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Apresentation/Home";
import Header from "./components/common/Header/Header";
import Feed from "./pages/Feed/Feed";
import NotFound from "./routes/NotFound";
import { Main } from "./StyledApp";
import "./App.css"
import RoutesPublication from "./pages/Feed/RoutesPublication";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="feed/*" element={< RoutesPublication />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Main>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
