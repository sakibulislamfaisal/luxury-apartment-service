import React from "react";

import "./SingleService.css";
import "./SingleService.scss";
const SingleService = ({ service }) => {
  console.log(service);
  return (
    <div className="col-xs-12 col-sm-12 col-md-4 py-3 ">
      <div className="single-service-image d-flex justify-content-center shadow-2xl">
        <div>
          <img
            src={service.image}
            alt=""
            className="img-fluid d-block mx-auto"
          />
          <h6 className="text-center font-bold mt-2">{service.title}</h6>
          <h6 className="text-center font-bold text-pink-700">
            $ {service.price}
          </h6>
          <p className="text-center description">{service.description}</p>
          <button className="default-button d-block mx-auto mb-4">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
