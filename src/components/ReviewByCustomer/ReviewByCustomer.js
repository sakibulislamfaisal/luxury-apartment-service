import React from "react";
import { Card } from "react-bootstrap";

const ReviewByCustomer = ({ review, isActive }) => {
  const { name, image, company, description } = review;

  return (
    <Card
      className={`bg-transparent ${isActive ? "active" : "not-active"}`}
      style={{ height: "350px" }}
    >
      <div className="d-flex">
        <Card.Img
          variant="top"
          className="img-fluid card-image ml-2 mt-3"
          src={image}
        />
        <Card.Title className="mt-5 ml-5">{name}</Card.Title>
      </div>
      <Card.Body>
        <Card.Text className="text-center">{company}</Card.Text>
        <Card.Text className="text-center">{description}</Card.Text>
        <Card.Text className="text-center">
          <i className="fa fa-star text-yellow-500"></i>
          <i className="fa fa-star text-yellow-500"></i>
          <i className="fa fa-star text-yellow-500"></i>
          <i className="fa fa-star text-yellow-500"></i>
          <i className="fa fa-star text-yellow-500"></i>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ReviewByCustomer;
