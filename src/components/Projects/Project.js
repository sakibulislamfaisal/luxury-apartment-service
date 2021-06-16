import React from "react";
import "./Project.css";
import "./Project.scss";
import projectImage1 from "../../assets/Image/p1.png";
import projectImage2 from "../../assets/Image/p2.png";
import projectImage3 from "../../assets/Image/p3.png";
import { MdLocationOn } from "react-icons/md";
const Project = () => {
  return (
    <div className="py-5 ">
      <div className="container">
        <h6 className="text-center">Projects</h6>
        <h4 className="text-center project-h4 mb-0 font-bold">
          Discover the latest Interior Design
        </h4>
        <br />
        <h4 className="text-center project-h4 font-bold -mt-4">
          available today
        </h4>
        <div className="row  justify-content-center">
          <div className="col-xs-12 col-sm-12 col-md-4">
            <div className="project-image">
              <img src={projectImage1} alt="projectImage1" />
              <h6 className="text-center  font-bold mb-0">
                Villa on Washington Avenue
              </h6>
              <div className="text-center d-flex justify-content-center">
                <MdLocationOn size="1rem" color="red" className="mt-1 m-1">
                  {" "}
                </MdLocationOn>
                <p className="footer-text">Dhaka,Bangladesh</p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4">
            <div className="project-image">
              <img src={projectImage2} alt="projectImage1" />
              <h6 className="text-center  font-bold mb-0">
                Luxury villa in Rego Park
              </h6>
              <div className="text-center d-flex justify-content-center">
                <MdLocationOn size="1rem" color="red" className="mt-1 m-1">
                  {" "}
                </MdLocationOn>
                <p className="footer-text">Dhaka,Bangladesh</p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4">
            <div className="project-image">
              <img src={projectImage3} alt="projectImage1" />
              <h6 className="text-center  font-bold mb-0">Gorgeous house</h6>
              <div className="text-center d-flex justify-content-center">
                <MdLocationOn size="1rem" color="red" className="mt-1 m-1">
                  {" "}
                </MdLocationOn>
                <p className="footer-text">Dhaka,Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
