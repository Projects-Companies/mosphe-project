import React, { useState } from "react";
import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
import Category from "./pages/add/Addcategory";
import Subcategory from "./pages/add/Addsubcategory";
import ViewCategory from "./pages/view/ViewCategory";
import ViewSubcategory from "./pages/view/ViewSubcategory";
import "./App.css";
import Homepage from "./component/Homepage";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/category" element={user ? <Category /> : <Homepage />} />
        <Route
          path="/sub_category"
          element={user ? <Subcategory /> : <Homepage />}
        />
        <Route
          path="/view_category"
          element={user ? <ViewCategory /> : <Homepage />}
        />
        <Route
          path="/view_sub_category"
          element={user ? <ViewSubcategory /> : <Homepage />}
        />
      </Routes>
    </div>
  );
}

export default App;
