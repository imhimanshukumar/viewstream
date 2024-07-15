import React from "react";
import { useSelector } from "react-redux";
import {
  AiFillHome,
  AiOutlineFire,

  AiOutlineClockCircle,
  AiFillHeart,
  AiOutlineFile,
  AiOutlineSetting,
  AiOutlineFlag,
} from "react-icons/ai";
import {
  MdSubscriptions,
  MdOutlineHistory,
  MdWatchLater,
  MdThumbUp,
  MdThumbDown,
  MdPlaylistPlay,
  MdLocalMovies,
  MdSchool,
} from "react-icons/md";
import { SiYoutube } from "react-icons/si";

const sidebarMainItems = [
  { icons: <AiFillHome size="24px" />, title: "Home" },
  { icons: <AiOutlineFire size="24px" />, title: "Trending" },
  { icons: <SiYoutube size="24px" />, title: " Viewstream Originals" },
  { icons: <MdSubscriptions size="24px" />, title: "Subscriptions" },
  { icons: <MdOutlineHistory size="24px" />, title: "Library" },
  { icons: <MdWatchLater size="24px" />, title: "Watch Later" },
  { icons: <MdThumbUp size="24px" />, title: "Liked Videos" },
  { icons: <MdThumbDown size="24px" />, title: "Disliked Videos" },
  { icons: <AiOutlineClockCircle size="24px" />, title: "History" },
  { icons: <MdPlaylistPlay size="24px" />, title: "Your Videos" },
];

const sidebarChannels = [
  { icons: <MdSchool size="24px" />, title: "StudyIQ IAS" },
  { icons: <MdSchool size="24px" />, title: "Akshay Saini" },
  { icons: <MdSchool size="24px" />, title: "Himanshu Singh" },
  { icons: <MdLocalMovies size="24px" />, title: "Tripti Pathak" },
  { icons: <MdLocalMovies size="24px" />, title: "Take U Forward" },
  { icons: <MdLocalMovies size="24px" />, title: "Thapa Technical" },
];

const sidebarAdditionalItems = [
  { icons: <AiFillHeart size="24px" />, title: "Favorites" },
  { icons: <AiOutlineFile size="24px" />, title: "Purchases" },
  { icons: <AiOutlineSetting size="24px" />, title: "Settings" },
  { icons: <AiOutlineFlag size="24px" />, title: "Report History" },
];

const Sidebar = () => {
  const open = useSelector((store) => store.app.open);

  return (
    <div
      className={`fixed top-16 left-0 ${
        open ? "w-1/6" : "w-1/12"
      } p-5 h-[calc(100vh-4rem)] bg-white overflow-y-auto overflow-x-hidden`}
    >
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-600 uppercase mb-2">Main</p>
        {sidebarMainItems.map((item, index) => (
          <div
            key={index}
            className={`flex my-3 ml-2 items-center ${
              index % 3 === 2 ? "pb-3 border-b border-gray-300" : ""
            } hover:text-gray-900 hover:bg-gray-100 hover:cursor-pointer transition-colors duration-300`}
          >
            {item.icons}
            <p className={`ml-5 ${open ? "" : "hidden"}`}>{item.title}</p>
          </div>
        ))}
      </div>
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-600 uppercase mb-2">
          Channels
        </p>
        {sidebarChannels.map((item, index) => (
          <div
            key={index}
            className={`flex my-3 ml-2 items-center ${
              index % 3 === 2 ? "pb-3 border-b border-gray-300" : ""
            } hover:text-gray-900 hover:bg-gray-100 hover:cursor-pointer transition-colors duration-300`}
          >
            {item.icons}
            <p className={`ml-5 ${open ? "" : "hidden"}`}>{item.title}</p>
          </div>
        ))}
        <div className="flex my-3 ml-2 items-center hover:text-gray-900 hover:bg-gray-100 hover:cursor-pointer transition-colors duration-300">
          <p className={`ml-5 ${open ? "" : "hidden"}`}>Show more</p>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-600 uppercase mb-2">
          Explore
        </p>
        {sidebarAdditionalItems.map((item, index) => (
          <div
            key={index}
            className={`flex my-3 ml-2 items-center ${
              index % 3 === 2 ? "pb-3 border-b border-gray-300" : ""
            } hover:text-gray-900 hover:bg-gray-100 hover:cursor-pointer transition-colors duration-300`}
          >
            {item.icons}
            <p className={`ml-5 ${open ? "" : "hidden"}`}>{item.title}</p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-500">
          &copy; 2024 Viewstream. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
