import { lines } from "./calculateBoardWin";
export const bot = (arr: (string | null)[]) => {
  for (let i = 0; i < lines.length; i++) {
    const num = Math.floor(Math.random() * 8 + 1);
    if (arr[num] === null) {
      return num;
    }
  }
};
