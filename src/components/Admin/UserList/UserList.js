
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4200/api/user/users")
      .then((resp) => resp.json())
      .then((resp) => {
        setUsers(resp.result);
      });
  }, []);

  return (
    <div className="user-list py-4">
      <h3 className="text-center mb-4 underline">All User List</h3>
      <Table responsive bordered striped hover>
        <thead>
          <tr className="text-center hover:text-indigo-700">
            <th>No</th>
            <th>Image</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => {
            return (
              <tr className="text-center" key={user._id}>
                <td className="text-center align-middle" key={user._id}>
                  {index + 1}
                </td>
                <td className="d-block mx-auto">
                  <img
                    src={user.image}
                    className="w-20  h-15 d-block mx-auto"
                    alt=""
                  />
                </td>
                <td className="align-middle">{user.username}</td>
                <td className="align-middle">{user.email}</td>

                <td className="align-middle">❤{user.role}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default UserList;
