import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom"

import "./index.css";
import App from "./App.jsx";

// import Contect from "./Components/Contect.jsx";
import About from "./Components/About.jsx";
import Home from "./Components/Home.jsx";

 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* <Route path="/" element={<App/>}/> */}
      <App></App>
    <Routes>
      <Route path="/home" element= {<Home/>}/>
      <Route path="/about" element= {<About/>}/>

    </Routes>
    </BrowserRouter>
    
  </StrictMode>,
);
