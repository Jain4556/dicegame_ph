import React from "react";
import styled from "styled-components";

const Rules = () => {
  return (
    <RulesCont>
      <div className="container">
        <h2>How to play Dice Game</h2>
        <div className="text">
          <p>*Select any Number</p>
          <p>*Click on dice image</p>
          <p>
            *after click on dice if selected number is equal to dice number you
            will get same point as on dice{" "}
          </p>
          <p>*if you get wrong guess then <b>2</b>  point will be deducted</p>
          <p>*If your Score become <b>25</b>  you will become the winner  </p>
          <p>*If the Score goes down to  <b>-50</b> you will lose the game</p>
        </div>
      </div>
    </RulesCont>
  );
};

export default Rules;

const RulesCont = styled.div`
  border-radius: 5px;
  margin: auto;
  /* margin-top: 30px; */
  
  background-color: #b8aaaa;
  padding: 25px;
  margin: auto;
  
  max-width: 550px;

  h2 {
    font-size: 24px;
  }
  .container {
    /* Adjust as needed */
    margin: auto;
  }
  .text {
    margin-top: auto;
    /* Center the text */
  }
  @media screen and (max-width: 600px) {
    .container {
      margin: auto;
      max-width: 80%;
      height: auto;
    }
  }
`;
