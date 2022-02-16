import React from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as CgIcons from "react-icons/cg";
import * as BsIcons from "react-icons/bs";
import * as GiIcons from "react-icons/gi";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
  
export const SidebarData = [
  {
    title: "Catverse",
    path: "/catverse",
    icon: <FaIcons.FaNapster/>,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <CgIcons.CgProfile/>,
    iconClosed: <MdIcons.MdOutlineKeyboardArrowDown />,
    iconOpened: <MdIcons.MdKeyboardArrowUp />,
  
    subNav: [
      {
        title: "Following",
        path: "/profile/following",
        icon: <BsIcons.BsPersonPlus />,
        cName: "sub-nav",
      },
      {
        title: "Followers",
        path: "/profile/followers",
        icon: <BsIcons.BsPersonPlusFill />,
        cName: "sub-nav",
      },
      {
        title: "Likes",
        path: "/profile/likes",
        icon: <GiIcons.GiPawHeart/>,
      },
    ],
  },
  
  {
    title: "Messages",
    path: "/messages",
    icon: <AiIcons.AiOutlineMessage />,
  
    iconClosed: <MdIcons.MdKeyboardArrowDown />,
    iconOpened: <MdIcons.MdKeyboardArrowUp />,
  
    subNav: [
      {
        title: "New Messages",
        path: "/messages/newmessages",
        icon: <AiIcons.AiOutlineWechat />,
      },
      {
        title: "Event 2",
        path: "/events/events2",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
      title: "Settings",
      path: "/settings",
      icon: <BsIcons.BsGear/>,
    
      iconClosed: <MdIcons.MdOutlineKeyboardArrowDown />,
      iconOpened: <MdIcons.MdOutlineKeyboardArrowUp />,
    
      subNav: [
        {
          title: "Logout",
          path: "/logout/logout",
          icon: <AiIcons.AiOutlineLogout />,
        },
        {
          title: "Change Password",
          path: "/Password/changepassword",
          icon: <MdIcons.MdPassword />,
        },
      ],
  },
];
