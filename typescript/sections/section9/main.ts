import { filter, fx } from "../lib/common";

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

function lesson5() {
  function head<A>(iterable: Iterable<A>): A | undefined {
    const [first] = iterable;
    return first;
  }
  function find<A>(f: (a: A) => boolean, iterable: Iterable<A>): A | undefined {
    return head(filter(f, iterable));
  }

  const result = find(a => a > 2, [1, 2, 3, 4, 5]);
  console.log(result);

  const result2 = find(a => a % 2 === 0, [1, 2, 3, 4, 5]);
  console.log(result2);
}

function lesson6() {
  const isOdd = (x: number) => x % 2 === 1;
  function some<A>(f: (a: A) => boolean, iterable: Iterable<A>): boolean {
    return fx(iterable)
      .map(f)
      .filter(a => a)
      .take(1)
      .reduce((a, b) => a || b, false);
  }

  function every<A>(f: (a: A) => boolean, iterable: Iterable<A>): boolean {
    return fx(iterable)
      .map(f)
      .filter(a => !a)
      .take(1)
      .reduce((a, b) => a && b, true);
  }

  console.log(some(isOdd, [1, 3, 5]));
  console.log(some(isOdd, [2, 4, 6]));

  console.log(every(isOdd, [1, 3, 5]));
  console.log(every(isOdd, [1, 2, 3, 4, 5]));
}

function lesson8() {
  function* concat<T>(...iterables: Iterable<T>[]): IterableIterator<T> {
    for (const iterable of iterables) {
      yield* iterable;
    }
  }

  const arr = [1, 2, 3];
  const iter = concat(arr, [4, 5, 6], [7, 8]);
  console.log([...iter]);
}

function lesson9() {}

const main = () => {
  // lesson1();
  // lesson5();
  // lesson6();
  lesson8();
};

main();
