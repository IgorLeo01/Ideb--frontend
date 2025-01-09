import { createSlice } from "@reduxjs/toolkit";

export const payloadSlice = createSlice({
  name: "payment",
  initialState: {
    inputValuePix: "",
    inputValueCartao: { cartao: "", validade: "", cvc: "" },
  },
  reducers: {
    setInputValueCartao: (state, action) => {
      return { ...state, inputValueCartao: action.payload, inputValuePix: "" };
    },
    setInputCPF: (state, action) => {
      return {
        ...state,
        inputValueCartao: { cartao: "", validade: "", cvc: "" },
        inputValuePix: action.payload,
      };
    },
  },
});

export const { setInputValueCartao, setInputCPF } = payloadSlice.actions;

export const selectPayment = (state: { payment: any }) => state.payment;

export default payloadSlice.reducer;
