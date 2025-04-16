function lesson1_1() {
  // 오버로드 시그니처 (Overload Signatures)
  function double(a: number): number;
  function double(a: string): string;
  function double(a: string | number) {
    if (typeof a === "number") {
      return a * 2;
    }
    return a + a;
  }

  console.log(double(1));
  console.log(double("1"));
}

function lesson4() {
  function baseReduce<A, Result>(
    f: (a: Result, b: A) => Result,
    acc: Result,
    iterator: Iterator<A>,
  ): Result {
    while (true) {
      const { value, done } = iterator.next();
      if (done) break;
      acc = f(acc, value);
    }
    return acc;
  }

  function reduce<A, Result>(
    f: (a: A, b: A) => Result,
    iterable: Iterable<A>,
  ): Result;
  function reduce<A, Result>(
    f: (a: Result, b: A) => Result,
    acc: Result,
    iterable: Iterable<A>,
  ): Result;
  function reduce<A, Result>(
    f: (a: Result | A, b: A) => Result,
    accOrIterable: Result | Iterable<A>,
    iterable?: Iterable<A>,
  ): Result {
    if (iterable === undefined) {
      iterable = accOrIterable as Iterable<A>;
      const iter = iterable[Symbol.iterator]();
      const { value: acc, done } = iter.next();
      if (done) throw new TypeError("Empty iterable");
      return baseReduce(f, acc, iter) as Result;
    } else {
      const acc = accOrIterable as Result;
      return baseReduce(f, acc, iterable[Symbol.iterator]());
    }
  }

  const result1 = reduce((acc, a) => acc + a, 10, [1, 2, 3, 4, 5]);
  console.log(result1);

  const result2 = reduce((acc, a) => acc + a, [1, 2, 3, 4, 5]);
  console.log(result2);

  const result3 = reduce((a, b) => `${a}, ${b}`, [1, 2]);
  console.log(result3);
}

function main() {
  // lesson1_1();
  lesson4();
}

main();
