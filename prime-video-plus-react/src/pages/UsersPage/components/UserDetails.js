import React from "react";

const UserDetails = () => {
  return (
    <div className="row mt-2">
      <h2>
        <span>View User Details</span>
      </h2>
      <div className="col-md-12">
        <button type="button" className="btn btn-sm btn-outline-secondary">
          Go Back
        </button>
        <div className="card mt-2">
          <div className="card-header">
            You are viewing details of User Id: 1
          </div>
          <div className="card-body">
            <h5 className="card-title">Name: John</h5>
            <p className="card-text">Email: j@k.com</p>
            <p className="card-text">Phone: 32456785465787</p>
            <button className="btn btn-primary">Edit</button>
            <button className="btn btn-outline-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
