import { fx } from "../lib/common";

function lesson1() {
  const sumOfSquaresOfOddNumbers = (limit: number, list: number[]) => {
    return fx(list)
      .filter(x => x % 2 === 1)
      .map(x => x * x)
      .take(limit)
      .reduce((acc, x) => acc + x, 0);
  };

  console.log(sumOfSquaresOfOddNumbers(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
}

const main = () => {
  lesson1();
};

main();
