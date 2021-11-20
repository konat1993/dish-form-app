import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Loader from "./components/Loader/Loader";
import HomePage from "./components/HomePage"
import ResultPage from "./components/ResultPage/ResultPage"

import './App.scss';

function App() {
  return (

    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Loader />} />
          <Route path="home" element={<HomePage />}>
            <Route path="result" element={<ResultPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
