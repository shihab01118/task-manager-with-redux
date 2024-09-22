import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  userTasks: [],
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
    removeTask: (state, { payload }) => {
      state.tasks = state.tasks.filter((task) => task.id !== payload);
    },
    updateStatus: (state, { payload }) => {
      const target = state.tasks.find((task) => task.id === payload.id);
      target.status = payload.status;
    },
    setUserTasks: (state, { payload }) => {
      state.userTasks = state.tasks.filter(
        (item) => item.assignedTo === payload
      );
    },
  },
});

export const { addTask, removeTask, updateStatus, setUserTasks } =
  tasksSlice.actions;

export default tasksSlice.reducer;
