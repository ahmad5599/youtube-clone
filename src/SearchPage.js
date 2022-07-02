import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import React from "react";
import "./searchPage.css";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_filter">
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr></hr>
    </div>
  );
}

export default SearchPage;
