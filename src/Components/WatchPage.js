import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import { useLocation, useSearchParams } from "react-router-dom";
import VideoContainer from "./VideoContainer";

const WatchPage = () => {
  const location = useLocation();
  const { videoInfo } = location.state || {};
  const { snippet } = videoInfo;
  const { channelTitle, description, localized, title } = snippet;
  const [params] = useSearchParams();
  const dispatch = useDispatch();
  const [autoplay, setAutoplay] = useState(false);
  
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const handleMouseEnter = () => {
    setAutoplay(true);
  };

  const handleMouseLeave = () => {
    setAutoplay(false);
  };

  const videoSrc = `https://www.youtube.com/embed/${params.get("v")}?${autoplay ? 'autoplay=1' : ''}`;

  return (
    <div className="flex mt-[60px] w-screen flex-1">
      <div className="flex-none w-[1000px] overflow-y-hidden overflow-x-hidden   object-fill pl-2">
        <iframe
          width="1020"
          height="500"
          src={videoSrc}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
        ></iframe>
        {title && <div className="font-bold pl-2 text-xl">{title}</div>}
        <div className="flex justify-between pl-2">
          <h1 className="font-bold">👤{channelTitle}</h1>
          <div className="flex">
            {videoInfo.statistics && videoInfo.statistics.likeCount && (
              <h2 className="font-bold">👍{videoInfo.statistics.likeCount} Likes</h2>
            )}
            {videoInfo.statistics && videoInfo.statistics.viewCount && (
              <h2 className="pl-5 font-bold pr-3">{videoInfo.statistics.viewCount} Views</h2>
            )}
          </div>
        </div>
        {videoInfo.statistics && videoInfo.statistics.commentCount && (
          <div className="pl-2 font-bold">{videoInfo.statistics.commentCount} Comments🗒️</div>
        )}
      </div>
      <div className="flex-1 overflow-y-auto">
        <VideoContainer />
      </div>
    </div>
  );
};

export default WatchPage;
