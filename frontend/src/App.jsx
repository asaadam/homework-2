import { VStack } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";

function App() {
  return (
    <VStack minH="100vh" minW="100vw">
      <Router>
        <Navbar />

        <Routes>
          <Route path={"/"} element={<Homepage />} />
          <Route path={"/register"} element={<Register />} />
        </Routes>
      </Router>
    </VStack>
  );
}

export default App;
