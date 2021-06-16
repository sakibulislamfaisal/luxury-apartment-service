import React from "react";
import { useState } from "react";
import "./Services.css";
import "./Services.scss";
import axios from "axios";
import { useEffect } from "react";
import SingleService from "../SingleService/SingleService";
const Services = () => {
  const [services, setService] = useState([]);

  //data load from database
  useEffect(() => {
    axios
      .get("http://localhost:4200/api/service/all-service")
      .then((res) => {
        console.log(res);
        setService(res.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="services-container py-5">
      <div className="container">
        <h6 className="text-center font-bold">Services</h6>
        <h4 className="text-center mb-2 font-bold">
          We re an agency tailored to all
        </h4>
        <h4 className="text-center mb-0 font-bold">
          clients needs that always delivers
        </h4>
        <div className="row py-5 ">
          {services.map((service) => (
            <SingleService key={service._id} service={service}></SingleService>
          ))}
        </div>
        <button className="d-block mx-auto bg-pink-600 text-white px-5 py-2">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Services;
