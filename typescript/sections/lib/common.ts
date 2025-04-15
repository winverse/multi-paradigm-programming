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
