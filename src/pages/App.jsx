import { ChakraProvider } from "@chakra-ui/react";
import Home from "./Apresentation/Home";
import Header from "../components/common/Header";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Home />
    </ChakraProvider>
  );
}

export default App;
