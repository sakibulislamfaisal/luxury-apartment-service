import axios from "axios";
import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { useForm } from "react-hook-form";

const ReviewByUser = () => {
  document.title = "Add Review";
  const [imageURL, setImageURL] = useState(null);
  const [successMsg, setSuccessMsg] = useState(false);
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("name  is required!")
      .min(6, "Review at least 6 characters!")
      .max(15, "Review at most 15 characters!"),
    company: Yup.string().required("company is required!"),
    description: Yup.string()
      .required("Review description is required!")
      .min(30, "Review  at least 30 characters!")
      .max(80, "Review at most 80 characters!"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const handleFileChange = (event) => {
    //console.log(e.target.files[0]);
    // console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "18ade17cde2c79bfba3f1032fe60cd36");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        console.log(response);
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onSubmit = (data, event) => {
    const reviewData = {
      name: data.name,
      company: data.company,
      description: data.description,
      image: imageURL,
    };
    const url = `http://localhost:4200/api/service/add-review`;

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSuccessMsg(true);
      });
  };

  //success message
  if (successMsg) {
    setTimeout(() => setSuccessMsg(false), 3000);
  }

  return (
    <div className=" py-5 bg-pink-100 add-service-section h-100  ">
      <div className="container ">
        <h5 className="text-center font-bold underline text-black text-2xl">
          Customer Review
        </h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                {...register("name")}
                className="placeholder-pink-700  "
                placeholder="Customer Name"
                autoComplete="off"
              />
              {errors.name && (
                <p className="error-form">{errors.name.message}</p>
              )}
            </div>
          </div>
          <div className="form-group">
            <div>
              <label>Company/Designation</label>
              <input
                type="text"
                name="company"
                {...register("company")}
                className="placeholder-pink-700  "
                placeholder="Company Name"
                autoComplete="off"
              />
              {errors.company && (
                <p className="error-form">{errors.company.message}</p>
              )}
            </div>
          </div>

          <div className="form-group">
            <div>
              <label>Description</label>
              <input
                type="text"
                name="description"
                {...register("description")}
                className="placeholder-pink-700  "
                placeholder=" Description"
                autoComplete="off"
              />
              {errors.description && (
                <p className="error-form">{errors.description.message}</p>
              )}
            </div>
          </div>

          <div className="form-group">
            <div>
              <label>Customer Image</label>
              <input
                required
                type="file"
                name="image"
                {...register("image")}
                onChange={handleFileChange}
              />
            </div>
          </div>

          <div className="form-group ">
            <button className="default-button">Review</button>
            {successMsg ? (
              <p style={{ color: "green" }}>Review added successfully!</p>
            ) : (
              <p style={{ color: "red", display: "none" }}>
                There was a server side error!
              </p>
            )}
            {/* <p className="error-form">
              Note : You can not add product because button is disabled!
            </p> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewByUser;
