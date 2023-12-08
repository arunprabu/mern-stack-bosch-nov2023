import React, { useEffect } from "react";
import AddUser from "./AddUser";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersAsync } from "./usersSlice";

const Users = () => {
  // Let's subscribe to the store data
  const usersState = useSelector((store) => {
    // the entire store data you can avail
    // we need only users data from store
    return store.users;
  });
  console.log(usersState);

  // let's prepare to dispatch an action
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, []);

  return (
    <div className="row">
      <h1>User Management</h1>
      <div className="col-md-4">
        <AddUser />
      </div>

      <div className="col-md-8">
        <h2>List Users</h2>
        {/* Showing the loader */}
        {usersState.isLoading && <div className="spinner spinner-border"></div>}

        {/* if error occurred */}
        {usersState.isError && (
          <div className="alert alert-danger">{usersState.status}</div>
        )}

        {/* if we get the usersList data */}
        <div className="row">
          {usersState?.userList?.map((user) => {
            return (
              <div className="col-md-4" key={user.id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                      E-Mail: {user.email}
                    </h6>
                    <p className="card-text">Phone: {user.phone}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Users;
