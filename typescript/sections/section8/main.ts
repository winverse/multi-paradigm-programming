import { FxIterable } from "../lib/common";

function lesson1() {
  function fx<A>(iterable: Iterable<A>) {
    return new FxIterable(iterable);
  }

  const mapped = fx([1, 2, 3, 4]).map(x => x * 2);
  // console.log(mapped);

  const filtered = fx([1, 2, 3, 4, 5]).filter(x => x % 2 === 0);
  // filtered.forEach(console.log);

  const [first, second] = fx([1, 2, 3, 4, 5, 6]).map(x => x + 10);
  console.log(first);
  console.log(second);
}

function lesson2() {
  function fx<A>(iterable: Iterable<A>) {
    return new FxIterable(iterable);
  }

  const sorted = [
    ...fx([1, 2, 3, 4, 5, 6])
      .map(x => x + 10)
      .filter(x => x % 2 === 0),
  ].sort((a, b) => a - b);

  console.log(sorted);

  const iterable = fx([1, 2, 3, 4, 5, 6])
    .filter(x => x % 2 === 0)
    .map(x => x + 10);

  const sorted2 = [...iterable].sort((a, b) => a - b);
  console.log(sorted2);

  const target = [1, 2, 3, 4, 5, 6];
  const sorted3 = fx(target)
    .map(x => x + 10)
    .filter(x => x % 2 === 0)
    .toArray()
    .toSorted((a, b) => b - a);

  console.log(sorted3);

  const sorted4 = fx([1, 2, 3, 4, 5, 6])
    .map(x => x + 10)
    .filter(x => x % 2 === 0)
    .to(iter => [...iter])
    .sort((a, b) => b - a);

  console.log(sorted4);

  const size = fx([1, 2, 3, 4, 5, 6])
    .map(x => x + 10)
    .filter(x => x % 2 === 0)
    .to(iter => new Set(iter))
    .add(10)
    .add(20).size;

  console.log(size);

  const set = fx([1, 2, 3, 4, 5, 6])
    .map(x => x * 10)
    .filter(x => x % 2 === 0)
    .to(iter => new Set(iter))
    .difference(new Set([10, 20]));

  console.log(set);

  const result = fx([1, 2, 3, 4, 5, 6])
    .map(x => x + 10)
    .filter(x => x % 2 === 0)
    .chain(iter => new Set(iter))
    .map(x => x * 10)
    .reduce((acc, x) => `${acc}, ${x}`);

  console.log(result);
}

function main() {
  // lesson1();
  lesson2();
}

main();
