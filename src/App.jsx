import React from "react";
import{Route,Routes} from "react-router-dom"


import Home from "./Home";
import Form from "./Form";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>

     
    </div>
  );
}
