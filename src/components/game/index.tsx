import { useState } from "react";
import styled from "styled-components";
import { Board } from "../board";
import { calculateBoardWin } from "../helper/calculateBoardWin";
export const Wrapper = styled.div``;
export const FinishText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  gap: 10px;
`;
export const Game = () => {
  const [value, setValue] = useState<string[]>(Array(9).fill(null));
  const [isxNextGame, setIsxNextGame] = useState<boolean>(true);
  const [winner, setWinner] = useState<string>();
  const handleClick = (index: number) => {
    const copyValue = [...value];
    copyValue[index] = isxNextGame ? "X" : "O";
    setValue(copyValue);
    setIsxNextGame(!isxNextGame);
    const win = calculateBoardWin(copyValue);
    if (win) {
      setWinner(win);
    }
  };
  return (
    <Wrapper>
      <Board value={value} handleClick={handleClick} />
      <FinishText>
        {winner ? `Win is ${winner}` : isxNextGame ? "queue X" : "queue 0"}
      </FinishText>
    </Wrapper>
  );
};
