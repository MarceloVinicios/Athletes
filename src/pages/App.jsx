import { useState } from "react";
import "./App.css";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../components/Profile";
import { ChakraProvider } from "@chakra-ui/react";
import PushButton from "../components/PushButton";

function App() {
  return (
    <ChakraProvider>
      <div className="column">
        <h1>Auth0 Login</h1>
        <LoginButton />
        <LogoutButton />
        <Profile />
      </div>
    </ChakraProvider>
  );
}

export default App;
