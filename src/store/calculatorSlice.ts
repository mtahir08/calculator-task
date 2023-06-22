import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CalculatorState {
  input: string;
  result: string;
}

const initialState: CalculatorState = {
  input: "",
  result: "",
};

const CalculatorSlice = createSlice({
  name: "Calculator",
  initialState,
  reducers: {
    setInput: (state, action: PayloadAction<string>) => {
      state.input += action.payload;
    },
    clearInput: (state) => {
      state.input = "";
      state.result = "";
    },
    calculateResult: (state) => {
      try {
        if (state.input.includes("^")) {
          const [base, exponent] = state.input.split("^");
          state.result = Math.pow(Number(base), Number(exponent)).toString();
        } else {
          state.result = eval(state.input).toString();
        }
      } catch (error) {
        state.result = "Error";
      }
    },
  },
});

export const { setInput, clearInput, calculateResult } =
  CalculatorSlice.actions;

export default CalculatorSlice.reducer;
