import { createSlice } from "@reduxjs/toolkit";

const savedInteractions =
  JSON.parse(localStorage.getItem("interactions")) || [];

const initialState = {
  interactions: savedInteractions,
};

const interactionSlice = createSlice({
  name: "interactions",
  initialState,
  reducers: {
    addInteraction: (state, action) => {
      state.interactions.push(action.payload);
    },

    deleteInteraction: (state, action) => {
      state.interactions.splice(action.payload, 1);
    },
  },
});

export const {
  addInteraction,
  deleteInteraction,
} = interactionSlice.actions;

export default interactionSlice.reducer;