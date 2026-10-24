import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Contect from "./Components/Contect.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App></App>} />
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contect" element={<Contect></Contect>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
