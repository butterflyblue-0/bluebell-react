import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./components/Home/Home";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import AboutPage from "./components/AboutPage/AboutPage";
import NewsPage from "./components/NewsPage/NewsPage";
import Recipes from "./components/Recipes/Recipes";
import ContactPage from "./components/ContactPage/ContactPage";
import VisitPage from "./components/VisitPage/VisitPage";
import WhereToBuy from "./components/WhereToBuy/WhereToBuy";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/visit" element={<VisitPage />} />
        <Route path="/where" element={<WhereToBuy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

