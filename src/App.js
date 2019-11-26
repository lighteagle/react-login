import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Login from "./components/Login";
import ListData from "./components/ListData";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <h1 style={{ paddingTop: 50 }}>Welcome</h1> */}
      {/* <Login /> */}
      <ListData />
    </BrowserRouter>
  );
}

export default App;
