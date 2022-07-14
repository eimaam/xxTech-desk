import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Nav from "./components/nav";
import ErrorPage from "./ErrorPage";
import Home from "./Home";


function App() {
  
  return (
    <Router>
      <Nav />
    <div>
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="*" element={<ErrorPage /> } />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
