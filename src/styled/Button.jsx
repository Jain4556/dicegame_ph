import styled from "styled-components";

export const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background: black;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid black transparent;
  cursor: pointer;
  transition: 0.4 background ease-in;

  &:hover {
    background-color: #a69999;
    border: 1px solid black;
    transition: 0.3s background ease-in;
  }
`;
export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover {
    background-color: black;
    border: 1px solid black;
    color: white;
  }
  .btns {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    margin-left: 80px;
  }
`;
