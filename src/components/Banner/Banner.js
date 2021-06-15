import React from "react";
import "./Banner.css";
import "./Banner.scss";

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
                <button class="default-button uppercase">Booking</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
