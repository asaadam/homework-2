import { VStack } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import BookForm from "./pages/NewBooks";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import BookDetails from "./pages/BooksDetail";

function App() {
  return (
    <VStack minH="100vh" minW="100vw">
      <Router>
        <Navbar />

        <Routes>
          <Route path={"/"} element={<Homepage />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/newbook"} element={<BookForm />} />
          <Route path={"/books/:id"} element={<BookDetails />} />
        </Routes>
      </Router>
    </VStack>
  );
}

export default App;
