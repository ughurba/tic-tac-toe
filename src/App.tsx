import React from "react";
import styled from "styled-components";
import "./App.css";
import { Game } from "./components/game";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
function App() {
  return (
    <Wrapper>
      <Game />
    </Wrapper>
  );
}

export default App;
