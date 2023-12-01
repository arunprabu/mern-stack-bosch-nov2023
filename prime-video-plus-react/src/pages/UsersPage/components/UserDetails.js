import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  // loading state
  const [isLoading, setIsLoading] = useState(true);
  // successful state
  const [user, setUser] = useState({});
  // error state
  const [isError, setIsError] = useState(false);
  // reading URL param (userId) through react-router-dom
  const { userId } = useParams();

  useEffect(() => {
    /*
      What's the REST API URL? https://jsonplaceholder.typicode.com/users/1 or /2 or /3
      What's the HTTP Method? GET
      What's the REST API Client Tool? axios
      Should we send any form data? NO
    */
    const fetchUserById = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        console.log(response);
        setUser(response.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsError(true);
        setIsLoading(false);
      }
    };
    fetchUserById();
  }, []);

  return (
    <div className="row mt-2">
      <h2>
        <span>View User Details</span>
      </h2>
      <div className="col-md-12">
        <button type="button" className="btn btn-sm btn-outline-secondary">
          Go Back
        </button>
        {isLoading && (
          <div className="text-center">
            <div className="spinner spinner-border"></div>
          </div>
        )}

        {isError && (
          <div className="text-center">
            <div className="alert alert-danger">
              Some Error Occurred. Try again later!
            </div>
          </div>
        )}

        <div className="card mt-2">
          <div className="card-header">
            You are viewing details of User Id: {user.id}
          </div>
          <div className="card-body">
            <h5 className="card-title">Name: {user.name}</h5>
            <p className="card-text">Email: {user.email}</p>
            <p className="card-text">Phone: {user.phone}</p>
            <button className="btn btn-primary">Edit</button>
            <button className="btn btn-outline-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
