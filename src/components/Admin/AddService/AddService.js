import axios from "axios";
// import { faFacebook, faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import "./AddService.css";
import { ProgressBar } from "react-bootstrap";
import { useAuth } from "../Login/Login";
const AddService = () => {
  const auth = useAuth();
  console.log("email", auth.user.email);
  document.title = "Add Service";
  const [imageURL, setImageURL] = useState(null);
  const [successMsg, setSuccessMsg] = useState(false);
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required(" Service title is required!")
      .min(12, "Service title at least 12 characters!")
      .max(30, "Service title at most 30 characters!"),
    price: Yup.number().positive().required("Service Price is required!"),
    description: Yup.string().required("Service description is required!"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  let history = useHistory();
  const handleFileChange = (event) => {
    //console.log(e.target.files[0]);
    // console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "18ade17cde2c79bfba3f1032fe60cd36");
    imageData.append("image", event.target.files[0]);

    const options = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total);
        console.log(`${loaded}kb of ${total}kb | ${percent}%`);

        if (percent <= 100) {
          setUploadPercentage(percent);
        }
      },
    };

    if (uploadPercentage) {
      setTimeout(() => {
        setUploadPercentage({ uploadPercentage: 0 });
      }, 3000);
    }

    axios
      .post("https://api.imgbb.com/1/upload", imageData, options)
      .then(function (response) {
        console.log(response);
        setImageURL(response.data.data.display_url);
        setUploadPercentage(100);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onSubmit = (data, event) => {
    const serviceData = {
      title: data.title,
      price: data.price,
      description: data.description,
      image: imageURL,
    };
    const url = `http://localhost:4200/api/service/add-service`;

    fetch(url, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
      },
      body: JSON.stringify(serviceData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSuccessMsg(true);
      });
    history.push("/admin-manage-service");
  };

  //success message
  if (successMsg) {
    setTimeout(() => setSuccessMsg(false), 3000);
  }

  return (
    <div className=" py-5 bg-pink-100 add-service-section h-100  ">
      <div className="container ">
        <h5 className="text-center font-bold underline text-black text-2xl">
          Add New Service
        </h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <div>
              <label>Service Title</label>
              <input
                type="text"
                name="title"
                {...register("title")}
                className="placeholder-pink-700  "
                placeholder="Enter Service Title"
                autoComplete="off"
              />
              {errors.title && (
                <p className="error-form">{errors.title.message}</p>
              )}
            </div>
          </div>
          <div className="form-group">
            <div>
              <label>Service Price</label>
              <input
                type="text"
                name="price"
                {...register("price")}
                className="placeholder-pink-700  "
                placeholder="Enter Service Price"
                autoComplete="off"
              />
              {errors.price && (
                <p className="error-form">{errors.price.message}</p>
              )}
            </div>
          </div>

          <div className="form-group">
            <div>
              <label>Service Description</label>
              <input
                type="text"
                name="description"
                {...register("description")}
                className="placeholder-pink-700  "
                placeholder="Enter Service Description"
                autoComplete="off"
              />
              {errors.description && (
                <p className="error-form">{errors.description.message}</p>
              )}
            </div>
          </div>

          <div className="form-group">
            <div>
              <label>Service Image</label>
              <input
                required
                type="file"
                name="image"
                {...register("image")}
                onChange={handleFileChange}
              />
              <br />
              {uploadPercentage > 0 && (
                <ProgressBar
                  now={uploadPercentage}
                  label={`${uploadPercentage}%`}
                />
              )}
              {errors.image && (
                <p className="error-form">{errors.image.message}</p>
              )}
            </div>
          </div>

          <div className="form-group ">
            <button className="default-button">
              <FontAwesomeIcon icon={faPlus} /> Add Service
            </button>
            {successMsg ? (
              <p style={{ color: "green" }}>Service added successfully!</p>
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

export default AddService;
