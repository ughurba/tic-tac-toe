import { useState } from "react";

export const useNextGame = (index: number) => {
  const [value, setValue] = useState<string[]>(Array(9).fill(null));
  const [isxNextGame, setIsxNextGame] = useState<boolean>(true);

  const copyValue = [...value];
  copyValue[index] = isxNextGame ? "X" : "O";
  setValue(copyValue);
  setIsxNextGame(!isxNextGame);
};
