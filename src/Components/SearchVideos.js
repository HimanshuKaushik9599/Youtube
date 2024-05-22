import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "../Utils/constant";
import VideoCard from "./VideoCard";
import SearchedVideoCard from "./SearchedVideoCard";
import { useDispatch, useSelector } from "react-redux";
import appSlice, { toggleMenu } from "../Utils/appSlice";

const SearchVideos = () => {
  const dispatch=useDispatch();
  dispatch(toggleMenu());

  const [ videoData, setVideoData ] = useState();
  const [params] = useSearchParams();
  console.log(params.get("query"));
  console.log(videoData);
  useEffect(() => {
    getSearchData();
  }, []);

  const getSearchData = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${GOOGLE_API_KEY}&q=${params.get(
        "query"
      )}&part=snippet&maxResults=20`
    );
    const json = await data.json();
    setVideoData(json.items)
    console.log(json.items);
    
  };

  return (
    <div className="  flex flex-wrap  mt-[60px] overflow-y-auto  flex-1  ">
    {videoData &&
      videoData.map((myvideo,index) => (
        // console.log(myvideo)
      <Link to={"/watch?v="+myvideo.id.videoId}   state={{videoInfo:myvideo}} key={index}>  <SearchedVideoCard key={index} info={myvideo}  /> </Link>
      ))}
  </div>
  );
};

export default SearchVideos;
