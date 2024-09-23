import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Shahed Al Amin Shihab",
  email: "shahed.shihab.0@gmail.com",
  taskList: [],
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});

export const { completeTask, setTasks } = userSlice.actions;

export default userSlice.reducer;
