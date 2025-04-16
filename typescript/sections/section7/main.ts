import { filter, forEach, map, naturals, reduce } from "../lib/common";

function lesson2() {
  class FxIterable<A> {
    constructor(private iterable: Iterable<A>) {}

    map<B>(f: (a: A) => B): FxIterable<B> {
      return new FxIterable(map(f, this.iterable));
    }

    filter(f: (a: A) => boolean): FxIterable<A> {
      return new FxIterable<A>(filter(f, this.iterable));
    }

    forEach(f: (a: A) => void): void {
      console.log(this.iterable);
      return forEach(f, this.iterable);
    }

    reduce<Result>(f: (a: A, b: A) => Result): Result;
    reduce<Result>(f: (acc: Result, x: A) => Result, acc: Result): Result;
    reduce<Result>(f: (acc: A | Result, x: A) => Result, acc?: Result): Result {
      return acc === undefined
        ? reduce(f, this.iterable)
        : reduce(f, acc, this.iterable);
    }
  }

  const num = new FxIterable(naturals(10))
    .map(x => x + 1)
    .filter(x => x % 2 !== 0)
    .reduce((acc, x) => acc + x.toString(), "");

  console.log(num);

  function printNumber(x: number) {
    console.log(x);
  }
}

function main() {
  lesson2();
}

main();
