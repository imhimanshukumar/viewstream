

import React, { useEffect, useState, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import Avatar from "react-avatar";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleSidebar,
  setCategory,
  setSearchSuggestion,
} from "../utils/appSlice";
import { SEARCH_SUGGESTIONS_API } from "../constant/youtube";
import axios from "axios";

const Navbar = () => {
  const [input, setInput] = useState("");
  const [suggestion, setSuggestion] = useState(false);
  const dispatch = useDispatch();
  const { searchSuggestion } = useSelector((store) => store.app);

  const suggestionRef = useRef(null);

  const searchVideo = () => {
    dispatch(setCategory(input));
  };

  const toggleHandler = () => {
    dispatch(toggleSidebar());
  };

  const showSuggestion = async () => {
    try {
      const res = await axios.get(SEARCH_SUGGESTIONS_API + input);
      dispatch(setSearchSuggestion(res?.data[1]));
      setSuggestion(true);
    } catch (error) {
      console.log(error);
    }
  };

  const openSuggestion = (text) => {
    setInput(text); // Set input value to the clicked suggestion
    setSuggestion(false); // Hide suggestions
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      searchVideo();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (input) showSuggestion();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  const handleBlur = (e) => {
    if (!suggestionRef.current.contains(e.relatedTarget)) {
      setSuggestion(false); // Hide suggestions when clicking outside
    }
  };

  return (
    <div className="flex fixed top-0 justify-center items-center w-[100%] z-10 bg-white">
      <div className="flex w-[96%] py-3 justify-between items-center">
        <div className="flex items-center">
          <GiHamburgerMenu
            onClick={toggleHandler}
            size="24px"
            className="cursor-pointer"
          />
          <a href="/" className="px-4">
            <img
              width="115px"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png"

              alt="yt_logo"
            />
          </a>
        </div>

        <div className="flex w-[40%] items-center relative">
          <div className="flex w-[100%]">
            <input
              value={input}
              onFocus={() => setSuggestion(true)}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              onBlur={handleBlur}
              type="text"
              placeholder="Search"
              className="w-full py-2 px-4 border border-gray-400 rounded-l-full outline-none"
            />
            <button
              onClick={searchVideo}
              className="py-2 border border-gray-400 rounded-r-full px-4"
            >
              <CiSearch size="24px" />
            </button>
          </div>
          {suggestion && searchSuggestion.length !== 0 && (
            <div
              ref={suggestionRef}
              className="absolute top-12 z-50 w-full bg-white shadow-lg mt-2 rounded-lg border border-gray-200"
              onMouseDown={(e) => e.preventDefault()} // Prevents blur event when clicking on suggestions
            >
              <ul>
                {searchSuggestion.map((text, idx) => (
                  <div
                    className="flex items-center px-4 hover:bg-gray-100 cursor-pointer"
                    key={idx}
                    onClick={() => openSuggestion(text)}
                  >
                    <CiSearch size="24px" />
                    <li className="px-2 py-1 text-md font-medium">{text}</li>
                  </div>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex w-[10%] justify-between items-center">
          <IoIosNotificationsOutline size={"24px"} className="cursor-pointer" />
          <CiVideoOn size={"24px"} className="cursor-pointer" />
          <Avatar
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            size={35}
            round={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
