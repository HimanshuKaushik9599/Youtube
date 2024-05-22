import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../Utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState();
  useEffect(() => {
    getVideos();
  }, []);
  // console.log(videos);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json);
    setVideos(json.items);
  };
  return (
    <div className="  flex flex-wrap      ">
      {videos &&
        videos.map((myvideo) => (
          // console.log(myvideo);
        <Link to={"/watch?v="+myvideo.id} state={{videoInfo:myvideo}} key={myvideo.id}>  <VideoCard key={myvideo.id} info={myvideo}  /> </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
