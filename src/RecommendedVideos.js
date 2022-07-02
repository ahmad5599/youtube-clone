import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";

function RecommendedVideos() {
  return (
    <div className="RecommendedVideos">
      <h2>Recommended</h2>
      <div className="RecommendedVideos_videos">
        <VideoCard
          title="Eminem - Venom (Official Video)"
          views="9.6M views"
          timestamp="Oct 5, 2018"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLSk-AeebphZllYPnC6dyL4Ebaufx9EfWWcpWi5kvw=s176-c-k-c0x00ffffff-no-rj"
          channel="EminemMusic"
          image="https://i.ytimg.com/an_webp/8CdcCD5V-d8/mqdefault_6s.webp?du=3000&sqp=CKe7gZYG&rs=AOn4CLCf8COhzxrduYe8E97xJyH4P6SmIQ"
        />
        <VideoCard
          title="NF - The Search"
          views="3.5M views"
          timestamp="May 30, 2019"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLTCEWKf6KiI01RUGgAYDgz02tzuRfdaK31v42et8A=s176-c-k-c0x00ffffff-no-rj"
          channel="NFrealmusic 🎶"
          image="https://i.ytimg.com/an_webp/fnlJw9H0xAM/mqdefault_6s.webp?du=3000&sqp=COXNgZYG&rs=AOn4CLAg24ufdjGksdRdPp0Y4IWslQVKUA"
        />
        {/* <VideoCard
          title="HELLO WORLD 「 AMV 」 - Kimi No Toriko Song"
          views="64k views"
          timestamp=" Apr 13, 2020"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLTXnLo2HZUyDaBJiT2hBx0_6BnnfN4YJe67xL0VgQ=s48-c-k-c0x00ffffff-no-rj"
          channel="Ryuuzi"
          image="https://i.ytimg.com/an_webp/kR_Eas14Sik/mqdefault_6s.webp?du=3000&sqp=CLvX_5UG&rs=AOn4CLCDpN24uqfFZXUpvVZlDtMWgo-FMg"
        /> */}
        <VideoCard
          title="Willow - Wait A Minute! (Tiktok Remix)[Lyrics]I think I left my consciousness in the sixth dimension"
          views="28k views"
          timestamp="Mar 13, 2022"
          channelImage="https://yt3.ggpht.com/Gfec7WO4NRXYj_CcdbwxN-8RZFT9PfoytnEFlr4e8RNuSM-mM9DHNekHV-Gk8_5Ody9Adfcj9w=s68-c-k-c0x00ffffff-no-rj"
          channel="TheDopeLyrics"
          image="https://i.ytimg.com/an_webp/ZCqTOGTYmos/mqdefault_6s.webp?du=3000&sqp=CNyygZYG&rs=AOn4CLD0ks3cvNOyAapyTIXoTuQGKuQQOA"
        />
        <VideoCard
          title="295 (Official Audio) | Sidhu Moose Wala | The Kidd | Moosetape"
          views="5.5M views"
          timestamp="Premiered Jul 14, 2021"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLQesbGjGyGl0gvQGiE659v4PbAZQI3NnkhG8VqBKw=s48-c-k-c0x00ffffff-no-rj-mo"
          channel="Sidhu Moosa Wala"
          image="https://i.ytimg.com/an_webp/n_FCrCQ6-bA/mqdefault_6s.webp?du=3000&sqp=CIDCgZYG&rs=AOn4CLCCKb6LnsGnj6zPYxDR7tDryGIGag"
        />
        <VideoCard
          title="Konosuba! ED/Ending Theme - Chiisana Boukensha ft. Megumin, Aqua, Lalatina"
          views="73K views"
          timestamp="May 3, 2018"
          channelImage="https://i.ytimg.com/an_webp/n_FCrCQ6-bA/mqdefault_6s.webp?du=3000&sqp=CIDY_5UG&rs=AOn4CLBEnzVcIXSuIflM9teCJPHETzfXSw"
          channel="Cute Melodic"
          image="https://i.ytimg.com/an_webp/NevwXF6ZdtI/mqdefault_6s.webp?du=3000&sqp=CNK6gZYG&rs=AOn4CLBlp__iTsGZaFoy7DxeUQvFLuwr_A"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
