// import { faFacebook, faGooglePlusG } from "@fortawesome/free-brands-svg-icons";

import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";

const MakeAmin = () => {
  document.title = "Make Admin";

  const [errorMsg, setErrorMsg] = useState(false);
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required!")
      .email("Email is invalid!"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = (data, event) => {
    const AdminData = {
      email: data.email,
    };
    const url = `https://luxury-apartment-service-serve.herokuapp.com/api/user/make-admin`;

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(AdminData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setErrorMsg(data.message);
      });
  };
  //success message

  if (errorMsg) {
    setTimeout(() => setErrorMsg(false), 3000);
  }
  return (
    <div className=" py-5 bg-pink-100" style={{ height: "540px" }}>
      <div className="container ">
        <h5 className="text-center font-bold underline text-black text-2xl">
          Make an Admin
        </h5>

        <form onSubmit={handleSubmit(onSubmit)}>
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

          <div className="form-group ">
            <button className="default-button">Make Admin</button>
            {errorMsg && <p style={{ color: "green" }}>{errorMsg}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default MakeAmin;
