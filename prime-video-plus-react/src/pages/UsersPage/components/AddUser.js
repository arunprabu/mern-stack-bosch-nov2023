import axios from "axios";
import React, { useState } from "react";

const AddUser = () => {
  const [addUserForm, setAddUserForm] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const [isSaved, setIsSaved] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (event) => {
    setAddUserForm({
      ...addUserForm,
      [event.target.name]: event.target.value,
    });
  }

  const handleCreateUser = (event) => {
    event.preventDefault();
    console.log(addUserForm); // submittable form data to the REST API

    // Let's send the above data to the REST API
    // 1. What's the REST API URL? https://jsonplaceholder.typicode.com/users
    // 2. What's the HTTP Method? POST
    // 3. What's the REST API Client Tool? axios (npm i axios) or fetch 
    // 4. What's the form data? addUserForm
    axios.post("https://jsonplaceholder.typicode.com/users", addUserForm)
      .then((res) => { // when the response is successful
        console.log(res);
        setIsSaved(true);
      })
      .catch((err) => { // when error occurs
        console.log(err); 
        setIsError(true);
      })
      .finally(() => {
        console.log('It is over!');
      })
  };

  return (
    <div className="row">
      <h1>Add User</h1>
      <form className="col-md-4 offset-md-4" onSubmit={handleCreateUser}>
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="nameInput"
            name="name"
            placeholder="Enter Name"
            value={addUserForm.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneInput" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="phoneInput"
            name="phone"
            placeholder="Enter Phone"
            value={addUserForm.phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            name="email"
            placeholder="Enter Email"
            value={addUserForm.email}
            onChange={handleChange}
          />
        </div>
        {isSaved && (
          <div className="alert alert-success">Saved Successfully!</div>
        )}

        {isError && (
          <div className="alert alert-danger">
            Unable to create user. Try again later
          </div>
        )}

        <button type="submit" className="btn btn-primary">
          Create User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
