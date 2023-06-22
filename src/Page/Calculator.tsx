import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CalculatorWrapper, Display, ButtonGrid, Button } from "./styles";
import { RootState } from "../store/store";
import {
  calculateResult,
  clearInput,
  setInput,
} from "../store/calculatorSlice";

const Calculator: React.FC = () => {
  const input = useSelector((state: RootState) => state.calculator.input);
  const result = useSelector((state: RootState) => state.calculator.result);
  const dispatch = useDispatch();

  const handleButtonClick = (value: string) => {
    if (value === "=") {
      dispatch(calculateResult());
    } else if (value === "clear") {
      dispatch(clearInput());
    } else {
      dispatch(setInput(value));
    }
  };

  return (
    <CalculatorWrapper>
      <Display>
        <div>{input}</div>
        <div>{result}</div>
      </Display>
      <ButtonGrid>
        <Button onClick={() => handleButtonClick("7")}>7</Button>
        <Button onClick={() => handleButtonClick("8")}>8</Button>
        <Button onClick={() => handleButtonClick("9")}>9</Button>
        <Button onClick={() => handleButtonClick("+")}>+</Button>
        <Button onClick={() => handleButtonClick("4")}>4</Button>
        <Button onClick={() => handleButtonClick("5")}>5</Button>
        <Button onClick={() => handleButtonClick("6")}>6</Button>
        <Button onClick={() => handleButtonClick("-")}>-</Button>
        <Button onClick={() => handleButtonClick("1")}>1</Button>
        <Button onClick={() => handleButtonClick("2")}>2</Button>
        <Button onClick={() => handleButtonClick("3")}>3</Button>
        <Button onClick={() => handleButtonClick("*")}>*</Button>
        <Button onClick={() => handleButtonClick("0")}>0</Button>
        <Button onClick={() => handleButtonClick(".")}>.</Button>
        <Button onClick={() => handleButtonClick("=")}>=</Button>
        <Button onClick={() => handleButtonClick("/")}>/</Button>
        <Button onClick={() => handleButtonClick("%")}>%</Button>
        <Button onClick={() => handleButtonClick("^")}>^</Button>
        <Button onClick={() => handleButtonClick("clear")}>clear</Button>
      </ButtonGrid>
    </CalculatorWrapper>
  );
};

export default Calculator;
