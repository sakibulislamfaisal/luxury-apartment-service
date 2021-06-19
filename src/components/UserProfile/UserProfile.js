import React from "react";
import Modal from "react-modal";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    borderRadius: "10px",
  },
};
Modal.setAppElement("#root");
const UserProfile = ({ modalIsOpen, closeModal }) => {
  document.title = "User Profile"
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("service is required!"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(data);
  };
  const username = useSelector((state) => state.user.loggedInUserInfo.username);
  const userImage = useSelector((state) => state.user.loggedInUserInfo.image);
  const email = useSelector((state) => state.user.loggedInUserInfo.email);
  const password = useSelector((state) => state.user.loggedInUserInfo.password);
  const role = useSelector((state) => state.user.loggedInUserInfo.role);
 // const userInfo = useSelector((state) => state.user.loggedInUserInfo);
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="User Profile"
      >
        <div className="form-group">
          <img
            src={userImage}
            alt=""
            style={{ width: "100px", borderRadius: "50px" }}
            className="d-block mx-auto"
          />
        </div>
        {/* form-section-modal */}
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
              <label>Password</label>
              <input
                defaultValue={password}
                type="password"
                name="password"
                {...register("password")}
                className="placeholder-pink-700  "
                autoComplete="off"
                readOnly
              />
              {errors.password && (
                <p className="error-form">{errors.password.message}</p>
              )}
            </div>
          </div>
          <div className="form-group">
            <div>
              <label>Role</label>
              <input
                defaultValue={role}
                type="text"
                name="role"
                {...register("role")}
                className="placeholder-pink-700  "
                autoComplete="off"
                readOnly
              />
              {errors.role && (
                <p className="error-form">{errors.role.message}</p>
              )}
            </div>
          </div>
          <button
            className="default-button d-block mx-auto"
            onClick={closeModal}
          >
            close
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default UserProfile;
