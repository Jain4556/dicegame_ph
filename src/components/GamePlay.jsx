import React, { useState, useEffect } from "react";
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
  const [winMessage, setWinMessage] = useState(false);
  const [loseMessage, setLoseMessage] = useState(false);

  const generateRandomNumber = (min, max) => {
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
      setScore((prev) => {
        const newScore = prev + randomNumber;
        if (newScore >= 25) {
          setWinMessage(true);
        }
        return newScore;
      });
    } else {
      setScore((prev) => {
        const newScore = prev - 2;
        if (newScore <= -50) {
          setLoseMessage(true);
        }
        return newScore;
      });
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  useEffect(() => {
    if (winMessage || loseMessage) {
      const timer = setTimeout(() => {
        setWinMessage(false);
        setLoseMessage(false);
        resetScore();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [winMessage, loseMessage]);

  return (
    <Main>
      {winMessage && <WinMessage>You won the game!</WinMessage>}
      {loseMessage && <LoseMessage>You lost the game!</LoseMessage>}
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
    margin-top: 20px;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-left: auto;
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
      width: 85%;
      margin: auto;
      button {
        width: 85%;
        margin: auto;
        padding: 10px;
      }
    }
  }
`;

const WinMessage = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: green;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  z-index: 1000;
`;

const LoseMessage = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: red;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  z-index: 1000;
`;
