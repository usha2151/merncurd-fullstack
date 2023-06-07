import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Register from "./components/Register";
import About from "./components/About";
import Edit from "./components/Edit";
import Login from "./components/Login";
import Details from "./components/Details";


function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/view/:id" element={<Details />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
