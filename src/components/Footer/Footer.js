import React from "react";
import "./Footer.css";
import location from "../../assets/Icon/location.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer-section py-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-xs-12 col-sm-12 col-md-3">
            <div className="footer-first justify-content-center">
              <img
                src={location}
                alt=""
                className="img-fluid d-block mx-auto"
              />
              <h6 className="text-center">H#000 (0th Floor), Road #00,</h6>
              <div>
                {" "}
                <h6 className="text-center">
                  New DOHS, Mohakhali, Dhaka, Bangladesh
                </h6>
                <h6 className="text-center">You can join our services</h6>
                <h6 className="text-center">Have a nice day!</h6>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 text-center cursor-pointer">
            <h6 className="font-bold mb-1">Company</h6>
            <p className="mt-2">Project</p>
            <p className="-mt-1">About us</p>
            <p className="-mt-1">Our team</p>
            <p className="-mt-1">Terms and conditions</p>
            <p className="-mt-1">Submit Listing</p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 text-center cursor-pointer">
            <h6 className="font-bold mb-1">Quick Links</h6>
            <p className="mt-2">Quick Links</p>
            <p className="-mt-1">Rentals</p>
            <p className="-mt-1">Sales</p>
            <p className="-mt-1">Contact</p>
            <p className="-mt-1">Our Blog</p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 text-center cursor-pointer">
            <h6 className="font-bold mb-1">About us</h6>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat
            </p>
            <div className="flex  justify-content-center">
              <FaFacebook className="m-3" size="2rem" />
              <FaInstagram className="m-3" size="2rem" />
              <FaLinkedinIn className="m-3" size="2rem" />
              <FaYoutube className="m-3" size="2rem" />
            </div>
          </div>
        </div>
        <div>
          <h6 className="text-center mb-0">
            Copyright &copy; All rights reserved {new Date().toDateString()}.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
