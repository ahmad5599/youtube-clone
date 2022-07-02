import React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";

import "./Header.css";
import { Avatar } from "@mui/material";

function Header() {
  const [inputSearch, setInputSearch] = React.useState("");
  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon />
        <link to="/">
          <img
            className="header_logo"
            src="https://www.clipartmax.com/png/full/109-1095050_youtube-logo-youtube-logo-2017.png "
            alt=""
          />
        </link>
      </div>

      <div className="header_input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          type="text"
          placeholder="Search"
        />
        <link to={`/search/${inputSearch}`}>
          <SearchIcon className="header_inputBtn" />
        </link>
      </div>

      <div className="header_icons">
        <VideoCallIcon />
        <AppsIcon />
        <NotificationsIcon />
        <Avatar
          alt="Ahmad Hamid"
          src="https://i.pinimg.com/564x/98/62/7d/98627de4cdc3e63242fe7ab8e868a09b.jpg"
        />
      </div>
    </div>
  );
}

export default Header;
