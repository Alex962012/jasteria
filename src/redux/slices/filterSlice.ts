import { createSlice } from "@reduxjs/toolkit";

interface filterState {
  activeName: number;
  activeYarn: number;
  activeSeason: number;
}

const initialState: filterState = {
  activeName: 0,
  activeYarn: 0,
  activeSeason: 0,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setActiveName(state, action) {
      console.log(action);
      state.activeName = action.payload;
    },
    setActiveYarn(state, action) {
      console.log(action);
      state.activeYarn = action.payload;
    },
    setActiveSeason(state, action) {
      console.log(action);
      state.activeSeason = action.payload;
    },
    setFilter(state, action) {
      state.activeName = Number(action.payload.activeName);
      state.activeSeason = Number(action.payload.activeSeason);
      state.activeYarn = Number(action.payload.activeYarn);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setActiveName, setActiveYarn, setActiveSeason, setFilter } =
  filterSlice.actions;

export default filterSlice.reducer;
