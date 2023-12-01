import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UsersPage = () => {
  const [isLoading, setIsLoading] = useState(true); // nloading state
  const [users, setUsers] = useState([]); // positive state
  const [isError, setIsError] = useState(false); // negative state

  // will be called only after INITIAL RENDERING
  useEffect(() => {
    // ideal place for us to connect to rest api
    console.log("Inside useEffect");
    /*
      What's the REST API URL? https://jsonplaceholder.typicode.com/users
      What's the HTTP Method? GET
      What's the REST API Client Tool? axios
      Should we send any form data? NO
    */
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log(response.data); // successful respnse
        setUsers(response.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err); // error response
        setIsError(true);
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []); /* you can have dependecy list in this array */

  return (
    <>
      <div className="p-5 mb-4 bg-body-tertiary rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">User Management App!</h1>
          <p className="col-md-8 fs-4">
            Find all saved users, Create user, Fetch their details, Update and
            Delete as well
          </p>
          <Link
            to="/users/add"
            className="btn btn-primary btn-lg"
            type="button"
          >
            Create User
          </Link>
        </div>
      </div>

      <div className="row">
        <h2>Listing Users</h2>
        {isLoading && (
          <div className="text-center">
            <div className="spinner spinner-border"></div>
          </div>
        )}
        {isError && (
          <div className="alert alert-danger">
            Some Error occurred. try again later!
          </div>
        )}

        {/* looping through lists */}
        {users.map((user) => {
          return (
            <div className="col-md-3 mt-2" key={user.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-text">E-Mail: {user.email}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Link to={`/users/${user.id}`} className="btn-link">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UsersPage;
