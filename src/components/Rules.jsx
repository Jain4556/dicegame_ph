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
          <p>*if you get wrong guess then 2 point will be deducted</p>
        </div>
      </div>
    </RulesCont>
  );
};

export default Rules;

const RulesCont = styled.div`
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 30px;
  background-color: #b8aaaa;
  padding: 20px;
  margin-left: 20px;
  height: 250px;

  h2 {
    font-size: 24px;
  }
  .container {
    max-width: 500px; /* Adjust as needed */
    margin: 0 auto;
  }
  .text {
    margin-top: 24px;
    /* Center the text */
  }
  @media screen and (max-width: 600px) {
    .container {
      margin: auto;
      max-width: 70%;
      margin: auto;
    }
  }
`;
