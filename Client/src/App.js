import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormCreate from "./Form";
import FormBuild from "./components/FormBuilder";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormBuild />} />
        <Route path="/createForm" element={<FormCreate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
