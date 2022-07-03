import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

import React from "react";
import ChannelRow from "./ChannelRow";
import "./searchPage.css";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_filter">
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://yt3.ggpht.com/ytc/AKedOLS9Xfvx4dE32hC5DGbBeFKgHVT8HDSskYb-TpeH=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="BugsWriter"
        verified
        subs="13.8 K Subscribers"
        noOfVideos="140 videos"
        description="This channel is all about programming, Linux and computers.
        I am a guy from UP India. Love to spend most of my time in front of my computer. I write code and stuff.
        Enjoy making videos
        So please subscribe to my channel."
      />
    </div>
  );
}

export default SearchPage;
