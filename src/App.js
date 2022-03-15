import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/componentMap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Blogs from "./pages/blog";
import SignUp from "./pages/signup";
import Contact from "./pages/contact";
import Recipes from "./pages/recipes";
import Footer from "./Footer";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/recipes' element={<Recipes />} />
      </Routes>
    </Router>
    <Footer></Footer>
    </>
  );
};

export default App;