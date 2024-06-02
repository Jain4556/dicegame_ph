import React from "react";
import styled from "styled-components";
const TotalScore = ({ score }) => {
  return (
    <ScoreCont>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreCont>
  );
};

export default TotalScore;

const ScoreCont = styled.div`
  width: 200px;
  text-align: center;
  h1 {
    font-size: 100px;
    line-height: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 500px;
  }
  @media (max-width: 600px) {
    h1 {
      padding-top: 0px;
      margin: auto;
    }
    p {
      margin: auto;
    }
  }
`;
