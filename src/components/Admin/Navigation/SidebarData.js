import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import {
  faPlusCircle,
  faShoppingBag,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Add Service",
    path: "/admin-add-service",
    icon: <FontAwesomeIcon icon={faPlusCircle} />,
    cName: "nav-text",
  },
  {
    title: "Manage Service",
    path: "/admin-manage-service",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Make Admin",
    path: "/add-new-admin",
    icon: <FontAwesomeIcon icon={faUserPlus} />,
    cName: "nav-text",
  },

  {
    title: "All User",
    path: "/admin-all-user",
    icon: <FontAwesomeIcon icon={faUserCircle} />,
    cName: "nav-text",
  },

  {
    title: "Order List",
    path: "/all-order-list",
    icon: <FontAwesomeIcon icon={faShoppingBag} />,
    cName: "nav-text",
  },
  // {
  //   title: "User Login",
  //   path: "/login",
  //   icon: <FontAwesomeIcon icon={faPersonBooth} />,
  //   cName: "nav-text",
  // },
  // {
  //   title: "Support",
  //   path: "/support",
  //   icon: <IoIcons.IoMdHelpCircle />,
  //   cName: "nav-text",
  // },
];
