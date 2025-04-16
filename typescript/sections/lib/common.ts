export function naturals(end: number = Infinity): IterableIterator<number> {
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

export function map<A, B>(
  f: (a: A) => B,
  iterable: Iterable<A>,
): IterableIterator<B> {
  const iter = iterable[Symbol.iterator]();
  return {
    next() {
      const { done, value } = iter.next();
      if (done) {
        return {
          done: true,
          value,
        };
      }
      return {
        done: false,
        value: f(value),
      };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}

export function forEach<A>(f: (a: A) => void, iterable: Iterable<A>) {
  const iter = iterable[Symbol.iterator]();
  while (true) {
    const { value, done } = iter.next();
    if (done) break;
    f(value);
  }
}

export function filter<A>(
  f: (a: A) => boolean,
  iterable: Iterable<A>,
): IterableIterator<A> {
  const iter = iterable[Symbol.iterator]();
  return {
    next() {
      while (true) {
        const { value, done } = iter.next();
        if (done) return { done: true, value };
        if (f(value)) return { done, value };
      }
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}

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

export function reduce<A, Result>(
  f: (a: A, b: A) => Result,
  iterable: Iterable<A>,
): Result;
export function reduce<A, Result>(
  f: (a: Result, b: A) => Result,
  acc: Result,
  iterable: Iterable<A>,
): Result;
export function reduce<A, Result>(
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

function* take<A>(limit: number, iterable: Iterable<A>): IterableIterator<A> {
  for (const a of iterable) {
    yield a;
    if (--limit === 0) break;
  }
}

export class FxIterable<A> {
  constructor(private iterable: Iterable<A>) {}

  [Symbol.iterator]() {
    return this.iterable[Symbol.iterator]();
  }

  map<B>(f: (a: A) => B): FxIterable<B> {
    return new FxIterable(map(f, this));
  }

  filter(f: (a: A) => boolean): FxIterable<A> {
    return new FxIterable<A>(filter(f, this));
  }

  forEach(f: (a: A) => void): void {
    return forEach(f, this);
  }

  reduce<Result>(f: (a: A, b: A) => Result): Result;
  reduce<Result>(f: (acc: Result, x: A) => Result, acc: Result): Result;
  reduce<Result>(f: (acc: A | Result, x: A) => Result, acc?: Result): Result {
    return acc === undefined ? reduce(f, this) : reduce(f, acc, this);
  }

  toArray() {
    return [...this.iterable];
  }

  to<R>(convert: (iterable: this) => R): R {
    return convert(this);
  }

  chain<B>(f: (iterable: this) => Iterable<B>): FxIterable<B> {
    return new FxIterable(f(this));
  }

  take<A>(limit: number) {
    return new FxIterable(take(limit, this));
  }
}

export function fx<A>(iterable: Iterable<A>) {
  return new FxIterable(iterable);
}
