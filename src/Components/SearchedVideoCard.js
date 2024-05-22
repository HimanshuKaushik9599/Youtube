import React from "react";

const SearchedVideoCard = ({ info }) => {
  const { snippet  } = info;
  const { thumbnails,title,description } = snippet;
  return (
    <div className="flex m-2 ">
      <img className="h-[250px] w-[400px] object-cover" src={thumbnails.high.url} alt="loading"></img>
      <div className="px-2">
      <h1 className=" font-bold">{title}</h1>
      <h3>{description}</h3>
      </div>
    </div>
  );
};

export default SearchedVideoCard;
