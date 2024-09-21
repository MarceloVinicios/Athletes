import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Apresentation/Home";
import Header from "./components/common/Header/Header";
import NotFound from "./routes/NotFound";
import RoutesPublication from "./routes/RoutesPublication";
import Register from "./pages/Register/Register";
import "./App.css";
import ProtectedRoute from "./components/helper/ProtectedRoute";
import ChatRoutes from "./routes/ChatRoutes";
import RoutesProfile from "./routes/RoutesProfile";
import ExploreRoutes from "./routes/ExploreRoutes";
import ConnectionRoutes from "./routes/ConnectionRoutes";
import { UserStorage } from "./Context/UserContext";
import { PublicationStorage } from "./Context/PublicationContext";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <UserStorage>
          <PublicationStorage>
          <Header />
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route
                path="feed/*"
                element={
                  <ProtectedRoute>
                    <RoutesPublication />
                  </ProtectedRoute>
                }
              />
              <Route
                path="profile/*"
                element={
                  <ProtectedRoute>
                    <RoutesProfile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="chat/*"
                element={
                  <ProtectedRoute>
                    <ChatRoutes />
                  </ProtectedRoute>
                }
              />
              <Route
                path="explore/*"
                element={
                  <ProtectedRoute>
                    <ExploreRoutes />
                  </ProtectedRoute>
                }
              />
              <Route
                path="connections/*"
                element={
                  <ProtectedRoute>
                    <ConnectionRoutes />
                  </ProtectedRoute>
                }
              />
              <Route path="register" element={<Register />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          </PublicationStorage>
        </UserStorage>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
