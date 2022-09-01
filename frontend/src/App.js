import React from "react";
import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
import Category from "./pages/add/Addcategory";
import Subcategory from "./pages/add/Addsubcategory";
import ViewCategory from "./pages/view/ViewCategory";
import ViewSubcategory from "./pages/view/ViewSubcategory";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/category" element={<Category />} />
        <Route path="/sub_category" element={<Subcategory />} />
        <Route path="/view_category" element={<ViewCategory />} />
        <Route path="/view_sub_category" element={<ViewSubcategory />} />
      </Routes>
    </div>
  );
}

export default App;
