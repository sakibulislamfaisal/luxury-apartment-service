import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navigation.css";
import { IconContext } from "react-icons";
import { useAuth } from "../Login/Login";

function Navigation() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const auth = useAuth();

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar-admin">
          <Link to="#" className="menu-bars-admin">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>{" "}
          <div className=" d-flex" style={{ marginLeft: "470px" }}>
            {/* {auth.user ? (
              <img
                src={auth.user.photoURL}
                alt=""
                style={{
                  width: "40px",
                  height: "40px",
                  color: "white",
                  borderRadius: "20px",
                }}
              />
            ) : null} */}
            {auth.user ? (
              <h6 className="text-light m-2 text-xl">
                Username : {auth.user.displayName}
              </h6>
            ) : null}
            {auth.user ? (
              <h6 className="text-light m-2 text-xl">
                {" "}
                Email : {auth.user.email}
              </h6>
            ) : null}
          </div>
          <div className="ml-auto">
            {auth.user ? (
              <button
                onClick={() => auth.signOut()}
                className="btn btn-danger px-5 py-2 text-center text-light rounded-sm"
              >
                Logout
              </button>
            ) : null}
          </div>
        </div>

        {auth.user && (
          <nav className={sidebar ? "nav-menu-admin active" : "nav-menu-admin"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars-admin">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      <span> {item.icon}</span>
                      <span className="title">{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </IconContext.Provider>
    </>
  );
}

export default Navigation;
