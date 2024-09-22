import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/tasks/tasksSlice";
import userReducer from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    tasksSlice: tasksReducer,
    userSlice: userReducer,
  },
});

export default store;
