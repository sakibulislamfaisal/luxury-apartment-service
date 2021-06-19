import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/Image/heading.PNG";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../redux/action/userAction";
import { NavDropdown } from "react-bootstrap";
import UserProfile from "../UserProfile/UserProfile";

function Navbar() {
  document.title = "Home Page";
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const username = useSelector((state) => state.user.loggedInUserInfo.username);
  const userImage = useSelector((state) => state.user.loggedInUserInfo.image);
  console.log(username);
  const dispatch = useDispatch();

  const handleLogout = () => {
    userLogout(dispatch(userLogout()));
  };

  document.title = "Home Page";
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  let style = {
    textDecoration: "none",
    padding: "15px",
    fontSize: "17px",
    fontWeight: "bold",
    color: "black",
  };
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={logo} alt="logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          {username ? null : (
            <li className="nav-item">
              <Link to="/review" className="nav-links">
                Review
              </Link>
            </li>
          )}
          <li className="nav-item">
            <Link to="/admin-login" className="nav-links">
              Admin
            </Link>
          </li>
          {username && sessionStorage.jwtToken && (
            <li className="nav-item">
              <Link to="/orders" className="nav-links">
                Order
              </Link>
            </li>
          )}
          {username && sessionStorage.jwtToken && (
            <NavDropdown title={username} id="nav-dropdown">
              <Link
                to="#"
                style={{ style }}
                className="dropdown-item"
                onClick={openModal}
              >
                View Profile
              </Link>
              <UserProfile
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
              ></UserProfile>
              <Link
                style={{ style }}
                to="/"
                onClick={handleLogout}
                className="dropdown-item"
                role="button"
              >
                Logout
              </Link>
            </NavDropdown>
          )}{" "}
          {username && (
            <li className="nav-item">
              <img
                src={userImage}
                alt=""
                className="user-image"
                style={{ width: "40px", borderRadius: "20px" }}
              />
            </li>
          )}
          {username && sessionStorage.jwtToken ? (
            <li className="nav-item" style={{ display: "none" }}>
              <Link to="/login" className="nav-links" style={{ style }}>
                <button className="bg-pink-700 hover:bg-pink-700 text-white   py-1 -mt-1 px-6 rounded-sm ">
                  Login
                </button>
              </Link>
            </li>
          ) : (
            <li className="nav-item" style={{ display: "block" }}>
              <Link to="/login" className="nav-links " style={{ style }}>
                <button className="success-button hover:bg-green-700 text-white   py-2 m-2 px-4 rounded-sm ">
                  Login
                </button>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
