import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Shahed Al Amin Shihab",
  email: "shahed.shihab.0@gmail.com",
  taskList: [],
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    completeTask: (state, { payload }) => {
      const target = state.taskList.find((task) => task.id === payload);
      target.status = "completed";
    },
  },
});

export const { completeTask } = userSlice.actions;

export default userSlice.reducer;
