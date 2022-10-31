import { FC } from "react";
import styled from "styled-components";

export const StyledButton = styled.div`
  width: 50px;
  height: 50px;
  background: white;
  border: 1px solid black;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
interface Props {
  onClick: () => void;
  value: string;
}
export const Square: FC<Props> = ({ onClick, value }) => {
  return (
    <>
      <StyledButton onClick={onClick}>{value}</StyledButton>
    </>
  );
};
