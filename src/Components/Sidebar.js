import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPlay,
  faFire,
  faHeart,
  faHistory,
  faVideo,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const isTheme = useSelector((store) => store.theme.isTheme);
  // console.log(isTheme);
  const isSideBar = useSelector((store) => store.app.isMenuOpen);
  const theme = isTheme ? " bg-white text-black" : "bg-black text-white";
  return !isSideBar ? null : (
    <div
      className={`  p-2 ${theme}   h-full overflow-y-auto  mt-[56px]  w-30px `}
    >
      <ul>
        <li className="py-3 px-2  hover:text-gray-800 border-l-4 border-transparent hover:border-red-500 font-bold">
          <Link to="/">
            <FontAwesomeIcon icon={faHouse} className="pr-1" /> Home
          </Link>
        </li>
        <li className="py-3 px-2 hover:text-gray-800 border-l-4 border-transparent hover:border-red-500 font-bold">
          <FontAwesomeIcon icon={faPlay} className="pr-1" /> Shorts
        </li>
        <li className="py-3 px-2 hover:text-gray-800 border-l-4 border-transparent hover:border-red-500 font-bold">
          <FontAwesomeIcon icon={faFire} className="pr-1" /> Trending
        </li>
        <li className="py-3 px-2 hover:text-gray-800 border-l-4 border-transparent hover:border-red-500 font-bold">
          <FontAwesomeIcon icon={faVideo} className="pr-1" /> Subscriptions
        </li>
        
        <li className="py-3 px-2 hover:text-gray-800 border-l-4 border-transparent hover:border-red-500 font-bold">
          <FontAwesomeIcon icon={faHistory} className="pr-1" /> History
        </li>
        <li className="py-3 px-2 hover:text-gray-800 border-l-4 border-transparent hover:border-red-500 font-bold">
          <FontAwesomeIcon icon={faVideo} className="pr-1" /> Your Videos
        </li>
        <li className="py-3 px-2 hover:text-gray-800 border-l-4 border-transparent hover:border-red-500 font-bold">
          <FontAwesomeIcon icon={faClock} className="pr-1" /> Watch Later
        </li>
        <li className="py-3 px-2 hover:text-gray-800 border-l-4 border-transparent hover:border-red-500 font-bold">
          <FontAwesomeIcon icon={faHeart} className="pr-1" /> Liked Videos
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
