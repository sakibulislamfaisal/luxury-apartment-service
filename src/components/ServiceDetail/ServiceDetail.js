import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import {  useSelector } from "react-redux";
import Payment from "../Payment/Payment";
import Paypal from "../Payment/Paypal";

const ServiceDetail = (props) => {
  document.title = "Service Detail";
  const { id } = useParams();
  const [bookingService, setBookingService] = useState([]);
  const username = useSelector((state) => state.user.loggedInUserInfo.username);
  const email = useSelector((state) => state.user.loggedInUserInfo.email);
  const [stripe, setStripe] = useState(false);
  const [paypal, setPaypal] = useState(false);
  // console.log(username, email);
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

  const [userServiceData, setUserServiceData] = useState(null);

  const onSubmit = (data, event) => {
    const userData = {
      username: data.username,
      email: data.email,
      title: data.title,
    };
    setUserServiceData(userData);
  };
  const { price, title, image } = bookingService;
  //console.log(userServiceData);

  const handlePlaceOrder = (payment) => {
    const orderDetail = {
      email: email,
      title: title,
      image: image,
      username: username,
      payment: payment,
      price: price,
      creation: new Date().toDateString(),
    };
    //console.log(data)
    fetch("http://localhost:4200/api/service/order", {
      method: "POST",
      body: JSON.stringify(orderDetail),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((order) => {
        console.log(order);
        //  alert('Order Placed Successfully by Order Id is  : ' + order._id);
      });
  };

  return (
    <div className="service-detail py-5">
      <div className="container">
        <h5 className="text-center font-bold underline text-black text-2xl">
          Book Now Your Service
        </h5>
        <div className="row">
          <div
            className="col-xs-12 col-sm-12 col-md-12"
            style={{ display: userServiceData ? "none" : "block" }}
          >
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
                    readOnly
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
                    readOnly
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
          <div
            className="col-xs-12 col-sm-12 col-md-12"
            style={{ display: userServiceData ? "block" : "none" }}
          >
            <h6 className="text-center font-bold">Choose Payment Method</h6>
            <div className="d-flex justify-content-center">
              <div className="text-center m-4">
                <input
                  type="radio"
                  name="stripe"
                  id=""
                  onClick={() => setStripe(!stripe)}
                />
                Stripe Credit Card
              </div>
              <div className="text-center m-4">
                <input
                  type="radio"
                  name="stripe"
                  id=""
                  onClick={() => setPaypal(!paypal)}
                />
                PayPal
              </div>
            </div>
          </div>
          {/* stripe payment section */}
          <div
            className=" col-xs-12 col-sm-12 col-md-12"
            style={{ display: stripe ? "block" : "none" }}
          >
            <h4 className="text-center">Payment to Checkout</h4>
            <hr className=" border border-primary font-bold w-50 text-center d-block mx-auto" />
            <Payment handlePlaceOrder={handlePlaceOrder}></Payment>
          </div>
          {/* PayPal Integration */}
          <div
            className=" col-xs-12 col-sm-12 col-md-12 text-center"
            style={{ display: paypal ? "block" : "none" }}
          >
            <h4 className="text-center">Payment to Checkout</h4>
            <hr className=" border border-primary font-bold w-50 text-center d-block mx-auto" />
            <Paypal handlePlaceOrder={handlePlaceOrder} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
