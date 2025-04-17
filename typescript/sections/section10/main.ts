import { fx } from "../lib/common";

function lesson1() {
  const numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 12],
  ];

  const oddSquareSum = numbers
    .flat()
    .filter(x => x % 2 === 1)
    .map(x => x * x)
    .reduce((acc, x) => acc + x, 0);

  console.log(oddSquareSum); // 165
}

function lesson2() {
  function* repeatApply<A>(f: (a: A) => A, n: A) {
    while (true) {
      n = f(n);
      yield n;
    }
  }

  function nextCollatz(num: number): number {
    return num % 2 === 0 ? num / 2 : 3 * num + 1;
  }

  // const collatzCount = (num: number) => {
  //   let count = 0;
  //   let current = num;
  //   while (true) {
  //     count++;
  //     current = nextCollatz(current);
  //     if (current === 1) break;
  //   }
  //   return count;
  // };

  const collatzCount = (num: number) => fx(repeatApply(nextCollatz, 1));

  console.log(collatzCount(1)); // 3
  console.log(collatzCount(4)); // 2
  console.log(collatzCount(5)); // 5
}

function main() {
  // lesson1();
  lesson2();
}

main();
