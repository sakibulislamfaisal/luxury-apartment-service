import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { useAuth } from "./Login";
import { Link } from "react-router-dom";
const AdminLogin = () => {
  const auth = useAuth();
  console.log(auth);
  return (
    <div className="admin-login">
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5">
            <div className="form-group">
              {auth.user ? null : (
                <button
                  onClick={() => auth.googleSignIn()}
                  className="bg-indigo-700 text-center text-light py-2 text-2xl d-block mx-auto px-8 rounded-md"
                >
                  <FontAwesomeIcon
                    className="mr-3 mt-1 text-light text-2xl"
                    icon={faGooglePlusG}
                  />
                  Continue With Google
                </button>
              )}
            </div>{" "}
            <div className="form-group mt-4">
              <Link to="/">
                {" "}
                <h6
                  className="
                text-center
                text-indigo-700
                d-block text-xl underline
                mx-auto"
                >
                  or go to home
                </h6>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
