import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
const ManageService = () => {
  const [serviceList, setServiceList] = useState([]);

  //get service from database
  useEffect(() => {
    axios
      .get("http://localhost:4200/api/service/all-service")
      .then(function (response) {
        setServiceList(response.data.data);
        // console.log(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  //remove single serviceList
  const removeSingleService = (id) => {
    //console.log("click", id);
    const removeItem = serviceList.filter((service) => service._id !== id);
    setServiceList(removeItem);
  };

  return (
    <div className="manage-service">
      <h3 className="text-center mb-4 underline">All Service List</h3>
      <Table responsive bordered striped hover>
        <thead>
          <tr className="text-center hover:text-indigo-700">
            <th>No</th>
            <th>Image</th>
            <th>Service Title</th>
            <th>Service Price</th>
            <th>Service Description</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {serviceList.map((service, index) => {
            return (
              <tr className="text-center" key={service._id}>
                <td className="text-center align-middle" key={service._id}>
                  {index + 1}
                </td>
                <td className="d-block mx-auto">
                  <img
                    src={service.image}
                    className="w-20  h-15 d-block mx-auto"
                    alt=""
                  />
                </td>
                <td className="align-middle">{service.title}</td>
                <td className="align-middle">${Number(service.price)}</td>

                <td className="align-middle">{service.description}</td>
                <td className="align-middle">
                  <FontAwesomeIcon
                    onClick={() => removeSingleService(service._id)}
                    className="text-red-500 text-xl cursor-pointer"
                    icon={faTrash}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageService;
