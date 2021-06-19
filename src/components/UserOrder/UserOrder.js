import React, { useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserOrder = () => {
  document.title = " UserOrder";
  const [userOrder, setUserOrder] = useState([]);
  const email = useSelector((state) => state.user.loggedInUserInfo.email);

  useEffect(() => {
    fetch("http://localhost:4200/api/service/email/" + email)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.result);
        setUserOrder(data.result);
      })
      .catch((err) => console.log(err));
  }, [email]);

  return (
    <div className="order-container py-4">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12">
            {userOrder.length ? (
              <Table responsive bordered striped hover>
                <thead>
                  <tr className="text-center hover:text-indigo-700">
                    <th>No</th>
                    <th>Image</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>PaymentId</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {userOrder.map((service, index) => {
                    return (
                      <tr className="text-center" key={service._id}>
                        <td
                          className="text-center align-middle"
                          key={service._id}
                        >
                          {index + 1}
                        </td>

                        <td className="align-middle">
                          <img
                            src={service.image}
                            alt=""
                            className="w-14 d-block mx-auto"
                          />
                        </td>

                        <td className="align-middle">{service.username}</td>

                        <td className="align-middle">{service.email}</td>
                        <td className="align-middle">{service.title}</td>
                        <td className="align-middle">{service.price}</td>
                        <td className="align-middle">{service.payment}</td>
                        <button>
                          {" "}
                          <td className="align-middle bg-indigo-700 text-center px-4 py-2 text-light font-bold ">
                            Done
                          </td>
                        </button>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            ) : (
              <div
                className="col-xs-12 col-sm-12 col-md-6 text-center"
                // style={{ display: cart.length < 0 ? "none" : "block" }}
              >
                <h4 className="text-center font-bold">Your Order history</h4>
                <hr className="border border-success" />

                <h3 className="font-bold text-pink-600">
                  You do not order any items.
                </h3>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <button className=" bg-green-500 hover:bg-purple-700 w-40 text-white py-2 px-3    text-xl mt-1  rounded ">
                    Go to home
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserOrder;
