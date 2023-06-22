import styled from "styled-components";

const CalculatorWrapper = styled.div`
  max-width: 400px;
  margin: 10px auto;
`;

const Display = styled.div`
  background-color: #F0F0F0;
  border: 1psx solid black;
  padding: 20px;
  text-align: right;
  margin: 10px 0;
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
`;

const Button = styled.div`
  background-color: #E8E8E8;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

export { CalculatorWrapper, Display, ButtonGrid, Button };
