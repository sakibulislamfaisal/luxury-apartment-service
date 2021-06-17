import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
const ServiceDetail = (props) => {
  const { id } = useParams();
  const [bookingService, setBookingService] = useState([]);
  const username = useSelector((state) => state.user.loggedInUserInfo.username);
  const email = useSelector((state) => state.user.loggedInUserInfo.email);
  console.log(username, email);
  useEffect(() => {
    fetch("http://localhost:4200/api/service/" + id)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBookingService(data.result);
      });
  }, [id]);

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("service is required!"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = (data, event) => {
    const userData = {
      username: data.username,
      email: data.email,
      title: data.title,
    };
    console.log(userData);
  };

  return (
    <div className="service-detail py-5">
      <div className="container">
        <h5 className="text-center font-bold underline text-black text-2xl">
          Book Now Your Service
        </h5>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <div>
                  <label>Username</label>
                  <input
                    defaultValue={username}
                    type="text"
                    name="username"
                    {...register("username")}
                    className="placeholder-pink-700  "
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
                    defaultValue={email}
                    type="text"
                    name="email"
                    {...register("email")}
                    className="placeholder-pink-700  "
                    autoComplete="off"
                  />
                  {errors.email && (
                    <p className="error-form">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="form-group">
                <div>
                  <label>Your Service</label>
                  <input
                    defaultValue={bookingService.title}
                    type="text"
                    name="title"
                    {...register("title")}
                    className="placeholder-pink-700  "
                    autoComplete="off"
                    readOnly
                  />
                
                </div>
              </div>
              <div className="form-group">
                <button className="default-button">Submit</button>
              </div>
            </form>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6">
            <h1>Payment Information</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
