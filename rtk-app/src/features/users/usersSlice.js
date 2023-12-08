// core stuff here
/* 
  1. initial state for the store of this feature,
  2. reducer functions 
  3. actions associated with reducer fns
*/

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  isError: false,
  userList: [],
  status: "idle",
};

/* What's a slice?
 * a function that accepts an initial state, an object of reducer functions, and a slice name
 */

// Let's write a fn to fetch users from rest api -- async
export const fetchUsersAsync = createAsyncThunk(
  "users/fetchUsers", // action type
  async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(response);
    return response.data; // this will be the payload of action obj
  }
);

// using createSlice function to create the slice
const usersSlice = createSlice({
  name: "users", // slice name
  initialState: initialState, // initial state
  reducers: {
    // if you want to update the store locally w/o connecting to rest api
    // write the logic here
  },
  extraReducers: (builder) => {
    // if you want to update the store by connecting to rest api
    // write the logic here
    builder
      .addCase(fetchUsersAsync.pending, (state) => {
        // state is the store data of this feature
        state.isLoading = true;
      })
      .addCase(fetchUsersAsync.fulfilled, (state, action) => {
        // state is the store data of this feature
        // action is an object - will have the payload
        state.isLoading = false;
        state.userList = action.payload;
      })
      .addCase(fetchUsersAsync.rejected, (state, action) => {
        // state is the store data of this feature
        // action is an object - will have the payload
        state.isLoading = false;
        state.isError = true;
        state.status = "Unable to fetch users. Try again later!";
      });
  },
});

// export
export default usersSlice.reducer;
