// store == single source of truth for the whole app

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// store = {
//   counter: {
//     value: 0,
//     status: "idle",
//   },
//   users: {
//     isLoading: false,
//     isError: false,
//     userList: [],
//     status: "idle",
//   },
// };

