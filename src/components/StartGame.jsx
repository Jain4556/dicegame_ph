import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <ImageWrapper>
        <img src="/images/dices.png" alt="Dice" />
      </ImageWrapper>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 20px;

  @media (min-width: 600px) {
    flex-direction: row;
  }

  .content {
    text-align: center;
    margin-top: 20px;

    h1 {
      font-size: 48px;
      white-space: nowrap;

      @media (min-width: 500px) {
        font-size: 96px;
      }
    }
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  align-items: center;
  width: 80%;

  img {
    width: 100vh;
    max-width: 410px;
    height: auto;

    @media (min-width: 600px) {
      max-width: 250px;
    }
  }
`;
