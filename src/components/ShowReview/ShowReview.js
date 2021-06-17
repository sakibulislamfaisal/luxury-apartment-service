import React, { useEffect, useState } from "react";

const ShowReview = () => {
  const [userReview, setUserReview] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4200/api/service/review")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <div className="review-container py-4">
      <div className="container">
        <div className="row"></div>
      </div>
    </div>
  );
};

export default ShowReview;
