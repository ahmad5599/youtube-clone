import React from "react";

import SearchPage from "./SearchPage";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    //BEM naming convention
    <div className="App">
      <h1>Lets Gooooo!༼ つ ◕_◕ ༽つ(╯°□°）╯︵ ┻━┻</h1>
      <Router>
        <Header />
        <Routes>
          <div className="app_page">
            <Route path="/" element={[<Sidebar />, <SearchPage />]} />
            <Route
              path="/search/:searchTerm"
              element={[<Sidebar />, <RecommendedVideos />]}
            />
          </div>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
