import { Square } from "../square";
import styled from "styled-components";
import { FC } from "react";
import { calculateBoardWin } from "../helper/calculateBoardWin";
interface Props {
  handleClick: (index: number) => void;
  value: string[];
}
export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
  width: 156px;
  height: 156px;
`;

export const Board: FC<Props> = ({ handleClick, value }) => {
  return (
    <Wrapper>
      {value.map((item, i) => (
        <Square key={i} value={item} onClick={() => handleClick(i)} />
      ))}
    </Wrapper>
  );
};
