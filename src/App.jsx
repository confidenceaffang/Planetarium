import React from "react";
<<<<<<< HEAD
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
>>>>>>> 15f36f10e30c9ee13ecec5695ed437a2b074cdb0
const App = () => {
  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
=======
    <main>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
      </BrowserRouter>
    </main>
>>>>>>> 15f36f10e30c9ee13ecec5695ed437a2b074cdb0
  );
};

export default App;
