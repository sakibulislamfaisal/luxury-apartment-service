import axios from "axios";
// import { faFacebook, faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import "./SignUp.css";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../redux/action/userAction";
import { Link } from "react-router-dom";
import { ProgressBar } from "react-bootstrap";
const SignUp = () => {
  document.title = "SignUp";
  const userDetails = useSelector((state) => state.user.userDetails);
  const userMessage = useSelector((state) => state.user.msg);
  console.log(userDetails);
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const dispatch = useDispatch();
  const [imageURL, setImageURL] = useState(null);
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("First Name is required!")
      .min(4, "Username must be at least 4 characters!"),

    email: Yup.string()
      .required("Email is required!")
      .email("Email is invalid!"),
    password: Yup.string()
      .required("Password is required!")
      .min(6, "Password must be at least 6 characters!"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match!")
      .required("Confirm Password is required!"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState, reset } = useForm(formOptions);
  const { errors } = formState;
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
        setImageURL({
          image: response.data.data.display_url,
          uploadPercentage: 100,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onSubmit = (data, event) => {
    const userData = {
      username: data.username,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
      image: imageURL,
    };
    signupUser(dispatch(signupUser(userData)));
    reset();
  };

  return (
    <div className=" py-5 bg-pink-100 add-service-section h-100  ">
      <div className="container ">
        <div className="text-center text-black">{userMessage}</div>
        <h5 className="text-center font-bold underline text-black text-2xl">
          Create New Account
        </h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <div>
              <label>Username</label>
              <input
                type="text"
                name="username"
                {...register("username")}
                className="placeholder-pink-700  "
                placeholder="Enter Your Username"
                autoComplete="off"
              />
              {errors.username && (
                <p className="error-form">{errors.username.message}</p>
              )}
            </div>
          </div>
          <div className="form-group">
            <div>
              <label>Email</label>
              <input
                type="text"
                name="email"
                {...register("email")}
                className="placeholder-pink-700  "
                placeholder="Enter Your Email Address"
                autoComplete="off"
              />
              {errors.email && (
                <p className="error-form">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="form-group">
            <div>
              <label>Password</label>
              <input
                type="password"
                name="password"
                {...register("password")}
                className="placeholder-pink-700  "
                placeholder="Enter Your Password"
                autoComplete="off"
              />
              {errors.password && (
                <p className="error-form">{errors.password.message}</p>
              )}
            </div>
          </div>

          <div className="form-group">
            <div>
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                {...register("confirmPassword")}
                className="placeholder-pink-700  "
                placeholder="Enter Your Confirm Password"
                autoComplete="off"
              />
              {errors.confirmPassword && (
                <p className="error-form">{errors.confirmPassword.message}</p>
              )}
            </div>
          </div>

          <div className="form-group">
            <div>
              <label>Profile Image</label>
              <input
                required
                type="file"
                name="image"
                {...register("image")}
                onChange={handleFileChange}
              />{" "}
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
              <FontAwesomeIcon icon={faPlus} /> SignUp
            </button>
          </div>
          <Link to="/login">
            <button className="bg-indigo-700 px-6 py-2 text-light mt-4 d-block mx-auto ">
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
