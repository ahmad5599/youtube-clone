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
      {/* <h1>Lets Gooooo!༼ つ ◕_◕ ༽つ(╯°□°）╯︵ ┻━┻</h1> */}
      <Header />
      <div className="app_page">
        <Router>
          <Routes>
            <Route path="/" element={[<Sidebar />, <RecommendedVideos />]} />
            <Route
              path="/search/:searchTerm"
              element={[<Sidebar />, <SearchPage />]}
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
