import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state.tasks.length === 0) {
        state.tasks.push({ id: 1, status: "todo", ...payload });
      } else {
        const lastElementId = state.tasks.at(-1).id;
        state.tasks.push({ id: lastElementId + 1, status: "todo", ...payload });
      }
    },
  },
});

export const { addTask } = tasksSlice.actions;

export default tasksSlice.reducer;
