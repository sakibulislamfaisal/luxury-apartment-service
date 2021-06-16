import React from "react";
import "./Banner.css";
import "./Banner.scss";
import bannerImage from "../../assets/Image/top.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner-section py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6">
            <div className="d-flex justify-content-center align-items-center">
              <div className="banner-left">
                <h5 className="banner-h1 mb-0">We Build</h5>
                <br />
                <h1 className="banner-h1 mb-2 -mt-5">Your Dream</h1>
                <p className="text-p-color text-justify">
                  Online Easte Agency, the mordern way to sell your own home,
                  You can use Griffin Residential to market your property
                </p>
                <Link to="/booking">
                  {" "}
                  <button className="default-button uppercase">Booking</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6">
            <div className="img-section">
              <img src={bannerImage} className="img-fluid" alt="banner-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
