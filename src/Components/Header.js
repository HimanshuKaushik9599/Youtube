import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../Utils/constant";
import { cacheResults } from "../Utils/searchSlice";
import { Link, useNavigate } from "react-router-dom";
import store from "../Utils/store";
import { toogleTheme } from "../Utils/themeSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleHalfStroke,
  faMagnifyingGlass,
  faBars,faUser
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const isTheme = useSelector((store) => store.theme.isTheme);
  // console.log(isTheme)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSugestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const handleOnclick = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const Timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSugestion(searchCache[searchQuery]);
      } else {
        getSeachSuggestion();
      }
    }, 200);
    return () => {
      clearTimeout(Timer);
    };
  }, [searchQuery]);

  const getSeachSuggestion = async () => {
    // console.log("api call:", searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSugestion(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const handleSuggestionClick = (s) => {
    
    setShowSuggestion(false);
    const query = encodeURIComponent(s.replace(/\s+/g, " ")).replace(
      /%20/g,
      "+"
    );
    navigate(`/search?query=${query}`);
  };

  const handleSearchButtonClick = () => {
    console.log("btn click");
    handleSuggestionClick(searchQuery);
  };
  const handleThemeButton = () => {
    dispatch(toogleTheme());
  };
  const theme = isTheme ? "bg-white text-black" : "bg-black text-white";

  return (
    <div className={`  grid  grid-flow-col  ${theme}       w-full fixed  `}>
      <div className="flex">
        
          <span onClick={() => {
            handleOnclick();
          }} className="mt-[18px] ml-3   "><FontAwesomeIcon className="size-5" icon={faBars} /></span>
        {isTheme ? <Link to="/">
         
          <img
            className=" h-12  m-1  w-24 rounded-xl"
            alt="icon"
            src="https://t3.ftcdn.net/jpg/04/03/98/64/360_F_403986499_hB7zfgOXezReA0sKkxl34RoT9TbNkbpH.jpg"
          ></img>
          </Link> :
          <Link  to="/">
          <img
            className=" h-12  W-24 m-1 rounded-xl"
            alt="icon"
            src="https://betanews.com/wp-content/uploads/2017/08/new-youtube-logo.jpg"
          ></img>
          </Link>
         
        }
      </div>
      <div>
        <div className="flex">
          <input
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            onFocus={() => setShowSuggestion(true)}
            //  onBlur={() => setShowSuggestion(false)}
            className=" border-black border w-3/4 h-[35px] mt-2 rounded-l-3xl px-5 text-black"
          ></input>
          <button
            onClick={() => handleSearchButtonClick()}
            className="border border-black bg-white h-[35px] mt-2 rounded-r-3xl  px-2 "
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-black" />
          </button>
        </div >
        {showSuggestion && (
          <div className="fixed bg-white p-4 w-[26rem] rounded-md  border border-gray-200  ">
            
            <ul>
              {suggestion.map((s) => (
                <li
                  key={s}
                  onClick={() => handleSuggestionClick(s)}
                  className="py-1 px-1 shadow-sm hover:bg-gray-100 text-black"
                >
                  <FontAwesomeIcon className="mr-2" icon={faMagnifyingGlass} />
                  {s} 
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="  flex justify-end items-center">
        <button onClick={() => handleThemeButton()}>
          <FontAwesomeIcon
            className=" size-6 mr-4 mt-1"
            icon={faCircleHalfStroke}
          />
        </button>
       
        <span className="mr-3 mt-1"><FontAwesomeIcon className=" size-5" icon={ faUser} /></span>
      </div>
    </div>
  );
};

export default Header;
