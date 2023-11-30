import { Link } from "react-router-dom";

const UsersPage = () => {
  return (
    <>
      <div className="p-5 mb-4 bg-body-tertiary rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">User Management App!</h1>
          <p className="col-md-8 fs-4">
            Find all saved users, Create user, Fetch their details, Update and
            Delete as well
          </p>
          <Link to="/users/add" className="btn btn-primary btn-lg" type="button">
            Create User
          </Link>
        </div>
      </div>

      <div className="row">
        <h2>Listing Users</h2>
        <div className="col-md-3 mt-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Name: John</h5>
              <p className="card-text">E-Mail: j@k.com</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <Link to="/users/1" className="btn-link">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersPage;
