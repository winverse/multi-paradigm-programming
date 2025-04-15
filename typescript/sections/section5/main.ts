import { filter, forEach, map, naturals } from "../lib/common";

function lesson1_1() {
  function forEach<A>(f: (a: A) => void, iterable: Iterable<A>) {
    for (const x of iterable) {
      f(x);
    }
  }

  const xs = [1, 2, 3];
  forEach(console.log, xs);

  const set = new Set([1, 2, 3, 3, 3]);
  forEach(console.log, set);
}

function lesson1_2() {
  function forEach<A>(f: (a: A) => void, iterable: Iterable<A>) {
    const iter = iterable[Symbol.iterator]();
    while (true) {
      const { value, done } = iter.next();
      if (done) break;
      f(value);
    }
  }

  const xs = [1, 2, 3];
  forEach(console.log, xs);

  const set = new Set([1, 2, 3, 3, 3]);
  forEach(console.log, set);
}

function lesson2_1() {
  function* map<A, B>(
    f: (a: A) => B,
    iterable: Iterable<A>,
  ): IterableIterator<B> {
    for (const x of iterable) {
      yield f(x);
    }
  }

  const xs = [1, 2, 3];
  const mapped = map(x => x * 2, xs);
  console.log(mapped);
  console.log([...mapped]);
}

function lesson3_1() {
  function* filter<A>(
    f: (a: A) => boolean,
    iterable: Iterable<A>,
  ): IterableIterator<A> {
    const iter = iterable[Symbol.iterator]();
    while (true) {
      const { value, done } = iter.next();
      if (done) break;
      if (f(value)) {
        yield value;
      }
    }
  }

  const xs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const filtered1 = filter(x => x % 2 === 0, xs);
  const filtered2 = filter(x => x % 2 !== 0, xs);
  console.log([...filtered1]);
  console.log([...filtered2]);
}
function lesson4_1() {
  forEach(
    console.log,
    map(
      x => x * 2,
      filter(x => x % 2 === 0, naturals(10)),
    ),
  );
}

function main() {
  // lesson1_1();
  // lesson1_2();
  // lesson2_1();
  // lesson3_1();
  lesson4_1();
}

main();
