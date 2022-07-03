import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

import VideoRow from "./VideoRow";
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
        subs="13.8 K"
        noOfVideos="140"
        description="This channel is all about programming, Linux and computers.
        I am a guy from UP India. Love to spend most of my time in front of my computer. I write code and stuff.
        Enjoy making videos
        So please subscribe to my channel."
      />
      <hr />

      <VideoRow
        views="3.5M"
        subs="8.41M"
        description="NF Tour dates, merch, and more available at nfrealmusic.com"
        timestamp="May 30, 2019"
        channel="NFrealmusic 🎶"
        title="NF - The Search"
        image="https://i.ytimg.com/an_webp/fnlJw9H0xAM/mqdefault_6s.webp?du=3000&sqp=COC6hZYG&rs=AOn4CLDUk4gs_RWghI_f544Z4pgynPqrQg"
      />
    </div>
  );
}

export default SearchPage;
