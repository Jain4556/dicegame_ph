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
  width: 97%;
  margin: auto;

  .flex {
    display: flex;
    gap: 16px;
    justify-content: space-between;
    margin-bottom: 20px;
    flex-wrap: nowrap;
    overflow-x: auto;
    /* margin-top: 10px; */
  }

  .error {
    color: red;
    font-size: 16px;
    margin-top: -12px;
    text-align: center;
  }

  p {
    margin: 2px;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
  }
  .sel{
    margin: -15px;
  }

  @media (max-width: 600px) {
    .flex {
      margin: auto;
      height: 72px;
      width: 377px;
      gap: 5px;
      /* margin-top: 10px; */
    }
    .sel {
      padding-top: 10px;
      margin: auto;
    }
    .error {
      text-align: center;
    }
  }

  @media (min-width: 601px) {
    .flex {
      justify-content: center;
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
