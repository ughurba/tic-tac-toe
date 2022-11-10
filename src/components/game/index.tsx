import { useState } from "react";
import styled from "styled-components";
import { Board } from "../board";
import { bot } from "../helper/bot";
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
  const [copyValue, setCopyValue] = useState<string[]>([...value]);

  const isWin = () => {
    const win = calculateBoardWin(copyValue);
    if (win) {
      setWinner(win);
    }
  };
  const handleClick = (index: number) => {
    copyValue[index] = isxNextGame ? "X" : "O";
    setValue(copyValue);
    setIsxNextGame(!isxNextGame);
    isWin();
  };
  if (!isxNextGame) {
    const index = bot(value);
    copyValue[index as number] = "O";
    setValue(copyValue);
    setIsxNextGame(!isxNextGame);
    isWin();
  }
  return (
    <Wrapper>
      <Board value={value} handleClick={handleClick} />
      <FinishText>
        {winner ? `Win is ${winner}` : isxNextGame ? "queue X" : "queue 0"}
      </FinishText>
    </Wrapper>
  );
};
