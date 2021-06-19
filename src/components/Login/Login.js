// import { faFacebook, faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/action/userAction";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link, useHistory, useLocation } from "react-router-dom";

const Login = () => {
  document.title = "Login Page";
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  document.title = "Login";
  const loginMessage = useSelector((state) => state.user.msg);
  const passMsg = useSelector((state) => state.user.passMsg);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  console.log(isLoggedIn);
  // const userInfo = useSelector((state) => state.user.userInfo.username);
  // console.log(userInfo);
  console.log(passMsg);
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required!")
      .email("Email is invalid!"),
    password: Yup.string()
      .required("Password is required!")
      .min(6, "Password must be at least 6 characters!"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = (data, event) => {
    const userData = {
      email: data.email,
      password: data.password,
    };
    loginUser(dispatch(loginUser(userData)));
    if (loginMessage === "Login is successful!") history.replace(from);
  };

  return (
    <div className=" py-5 bg-pink-100 add-service-section h-100  ">
      <div className="container ">
        <h5 className="text-center font-bold underline text-black text-2xl">
          Sign In Account
        </h5>
        <div className="text-center text-black">{loginMessage}</div>
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

          <div className="form-group ">
            <button className="default-button">
              <FontAwesomeIcon icon={faUser} /> Login
            </button>
          </div>

          <div className="text-center">
            <Link
              to="/sign-up"
              style={{
                color: "indigo",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "19px",
              }}
            >
              Or Create a New Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
