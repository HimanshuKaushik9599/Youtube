import React, { useState } from "react";
import { useSelector } from "react-redux";

const VideoCard = ({ info }) => {
  // const [autoplay, setAutoplay] = useState(false);

  const isSideBar = useSelector((store) => store.app.isMenuOpen);
  // console.log(info);
  const { snippet, statistics } = info;
  const { thumbnails, channelTitle, localized } = snippet; 
  const { likeCount } = statistics;
  const cardWidth = isSideBar ? "w-[240px]" : "w-[340px]";
  // console.log(id)

  // console.log(snippet);
  // console.log(snippet.thumbnails.high.url);
  // const videosrc = `https://www.youtube.com/embed/${id}?${autoplay ? 'autoplay=1' : ''}&modestbranding=1&rel=0&showinfo=0`;
  // const handleMouseEnter = () => {
  //   setAutoplay(true);
  // };

  // const handleMouseLeave = () => {
  //   setAutoplay(false);
  // };
  return (
    <div
      className={` overflow-hidden  shadow-xl p-2 mb-1 h-[320px] hover:scale-105 hover:shadow-2xl transition duration-300  m-[1px]  ${cardWidth}`}
    >
      <img
        alt="poster"
        className="hover:rounded-lg"
        src={thumbnails.medium.url}
      ></img>
      {/* <iframe
        width="226"
        height="126"
        src={videosrc}
        // title="YouTube video player"
        // frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        // allowFullScreen
        onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
      ></iframe> */}
      <ul>
        <li className="font-bold">{localized.title}</li>
        <li className="  ">{channelTitle}</li>
        <li>{likeCount} likes</li>
      </ul>
    </div>
  );
};

export default VideoCard;
