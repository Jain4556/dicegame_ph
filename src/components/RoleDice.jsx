import styled from "styled-components";

import { useState } from "react";

const RoleDice = ({ roleDice, currentDice }) => {
  const [isClicked, setIsClicked] = useState(false);

  const playSound = () => {
    const audio = new Audio("/audio/dice.wav");
    audio.play();
    setIsClicked(!isClicked);
  };

  return (
    <DiceCont>
      <div className="dice" onClick={roleDice}>
        <img
          onClick={playSound}
          src={`/images/dice_${currentDice}.png`}
          alt="dice1"
        />
      </div>

      <p className="roll">Roll the Dice</p>
    </DiceCont>
  );
};

export default RoleDice;

const DiceCont = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
  @media (max-width: 600px) {
    .dice {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0px;
      margin: auto;
    }
    .roll {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
    }
  }
`;
