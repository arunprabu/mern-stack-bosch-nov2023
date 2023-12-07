import React from "react";
import AddUser from "./AddUser";

const Users = () => {
  return (
    <div className="row">
      <h1>User Management</h1>
      <div className="col-md-4">
        <AddUser />
      </div>

      <div className="col-md-8">
        <h2>List Users</h2>
        {/* Showing the loader */}
        {<div className="spinner spinner-border"></div>}

        {/* is error occurred */}
        {<div className="alert alert-danger">some error occurred</div>}
        {/* is we get the usersList data */}
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">John</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  E-Mail: j@k.com
                </h6>
                <p className="card-text">Phone: 452134567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
