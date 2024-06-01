import React, { useState } from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelect from "./NumberSelect";
import RoleDice from "./RoleDice";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number!!");

      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if (selectedNumber == randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <Main>
      <div className="top">
        <TotalScore score={score} />
        <NumberSelect
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>
      {showRules && <Rules />}
    </Main>
  );
};

export default GamePlay;

const Main = styled.div`
  padding-top: 20px;

  .top {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
  }

  .btns {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-left: 38px;
  }

  @media screen and (max-width: 600px) {
    * {
      padding: 0;
      margin: 0;
    }
    .top {
      margin-right: auto;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }

    .btns {
      flex-direction: column;

      width: 90%;
      margin: auto;
      button {
        width: 90%;
        margin: auto;
        padding: 10px;
        position: sticky;
      }
    }
  }
`;
