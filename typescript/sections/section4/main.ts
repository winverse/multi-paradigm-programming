// @ts-ignore
import { map, naturals } from "../lib/common";

function lesson1_1() {
  function naturals(end: number = Infinity): IterableIterator<number> {
    let n = 1;
    return {
      next() {
        const isDone = n > end;
        if (isDone) {
          return {
            done: true,
            value: undefined,
          };
        }
        return {
          done: false,
          value: n++,
        };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  }

  const iter = naturals(10);
  for (const n of iter) {
    console.log(n);
  }
}

function lesson4_1() {
  const mapped = map(x => x * 2, naturals(10));

  for (const n of mapped) {
    console.log(n);
  }

  console.log([...map(a => a * 2, [1, 2, 3, 4])]);
}

function lesson4_2() {
  function* map<A, B>(
    f: (a: A) => B,
    iterable: Iterable<A>,
  ): IterableIterator<B> {
    for (const a of iterable) {
      yield f(a);
    }
  }

  const mapped = map(x => x * 2, naturals(10));
  for (const n of mapped) {
    console.log(n);
  }
}

function main() {
  // lesson1_1();
  // lesson4_1();
  lesson4_2();
}

main();
