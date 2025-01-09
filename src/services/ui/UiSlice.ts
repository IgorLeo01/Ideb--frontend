import { createSlice } from "@reduxjs/toolkit";

export interface UiState {
  registerSelectionModalState: boolean;
}

const initialState: UiState = {
  registerSelectionModalState: false,
};

const uiSlice = createSlice({
  name: "uiSlice",
  initialState,
  reducers: {
    setRegisterSelectionModalState: (state, action) => {      
      state.registerSelectionModalState = action.payload;
    },
  },
});

export const { setRegisterSelectionModalState } = uiSlice.actions;

export default uiSlice.reducer;

export const selectRegisterSelectionModalState = (state: {
  uiSlice: UiState;
}): boolean => {
  const modalState = state.uiSlice.registerSelectionModalState;  
  return modalState;
};
