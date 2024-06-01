import React from "react";
import styled from "styled-components";

const NumberSelect = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <NumberSelectCont>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p className="sel">Select Number</p>
    </NumberSelectCont>
  );
};

export default NumberSelect;

const NumberSelectCont = styled.div`
  * {
    margin: 0;
    padding: 0;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;

  .flex {
    display: flex;
    gap: 16px;
    justify-content: center;
    margin-bottom: 20px;
    flex-wrap: nowrap;
    overflow-x: auto;
  }

  .error {
    color: red;
    font-size: 16px;
    margin-bottom: 10px;
  }

  p {
    font-size: 24px;
    font-weight: 700;
    text-align: center;
  }

  @media (max-width: 500px) {
    .flex {
      height: 72px;
      width: 377px;
      gap: 5px;
    }
    .sel {
      padding-top: 0px;
      margin: auto;
    }
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;

  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};

  &:hover {
    background-color: ${(props) => (props.isSelected ? "black" : "#f0f0f0")};
  }
`;
