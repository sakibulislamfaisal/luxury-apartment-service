import React from "react";
import { useAuth } from "../Login/Login";

const Welcome = () => {
  const auth = useAuth();
  return (
    <div className="py-5">
      {auth.user ? (
        <h4 className="text-2xl text-indigo-700 font-bold text-center">
          {" "}
          Welcome to Admin Page.
        </h4>
      ) : (
        <h3 className="text-2xl text-indigo-700 font-bold text-center">
          Welcome to Admin Page.Just Login and see Available feature for you!
        </h3>
      )}
    </div>
  );
};

export default Welcome;
