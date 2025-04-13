// 간단한 이터레이터의 인터페이스

interface CustomIteratorYieldResult<T> {
  done?: false;
  value: T;
}

interface CustomIteratorReturnResult {
  done: true;
  value: undefined;
}

interface CustomIterator<T> {
  next(): CustomIteratorYieldResult<T> | CustomIteratorReturnResult;
}

// Create an Iterator from an Array
function Lesson2_2() {
  class NumberIterator implements Iterator<number> {
    private index = 0;
    constructor(private readonly array: number[]) {
      this.array = array;
    }

    next(): IteratorResult<number> {
      const isDone = this.index >= this.array.length;
      if (isDone) {
        return {
          done: true,
          value: undefined,
        };
      }
      return {
        done: false,
        value: this.array[this.index++],
      };
    }
  }

  const iterator = new NumberIterator([1, 2, 3]);
  console.log(iterator.next());

  class StringIterator implements Iterator<string> {
    private index = 0;
    constructor(private readonly array: string[]) {
      this.array = array;
    }

    next(): IteratorResult<string> {
      const isDone = this.index >= this.array.length;
      if (isDone) {
        return {
          done: true,
          value: undefined,
        };
      }
      return {
        done: false,
        value: this.array[this.index++],
      };
    }
  }

  const iterator2 = new StringIterator(["a", "b", "c"]);
  console.log(iterator2.next());

  class ArrayIterator<T> implements Iterator<T> {
    private index = 0;
    constructor(private readonly array: T[]) {
      this.array = array;
    }

    next(): IteratorResult<T> {
      const isDone = this.index >= this.array.length;
      if (isDone) {
        return {
          done: true,
          value: undefined,
        };
      }
      return {
        done: false,
        value: this.array[this.index++],
      };
    }
  }

  const iterator3 = new ArrayIterator([1, 2, 3]);
  const result = iterator3.next();
  if (result.done) {
    const value = result.value;
  } else {
    const value = result.value;
  }
}

function Lesson3_1() {
  class ArrayIterator<T> implements Iterator<T> {
    private index = 0;
    constructor(private readonly array: T[]) {
      this.array = array;
    }

    next(): IteratorResult<T> {
      const isDone = this.index >= this.array.length;
      if (isDone) {
        return {
          done: true,
          value: undefined,
        };
      }
      return {
        done: false,
        value: this.array[this.index++],
      };
    }
  }

  function naturals(): Iterator<number> {
    return {
      next() {
        return { done: false, value: 1 };
      },
    };
  }
}

// reverse & lazy reverse
function Lesson4_1() {
  function reverse<T>(array: T[]): Iterator<T> {
    let index = array.length - 1;
    return {
      next() {
        const isDone = index < 0;
        if (isDone) {
          return {
            done: true,
            value: undefined,
          };
        }
        return {
          done: false,
          value: array[index--],
        };
      },
    };
  }

  const array = [1, 2, 3];
  const iter = reverse(array);

  console.log(iter.next());
  console.log(iter.next());
  console.log(iter.next());
  console.log(iter.next());
}

function Lesson5_1() {
  function forIter<T>(array: T[]): Iterator<T> {
    let index = 0;
    return {
      next() {
        const isDone = index > array.length - 1;
        if (isDone) {
          return {
            done: true,
            value: undefined,
          };
        }
        return {
          done: false,
          value: array[index++],
        };
      },
    };
  }

  const iter1 = forIter([1, 2, 3]);

  console.log(iter1.next());
  console.log(iter1.next());
  console.log(iter1.next());
  console.log(iter1.next());

  function map<A, B>(f: (a: A) => B, iter: Iterator<A>): Iterator<B> {
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
    };
  }

  const iter = map((a: number) => a * 2, forIter([1, 2, 3]));

  console.log(iter.next());
  console.log(iter.next());
  console.log(iter.next());
  console.log(iter.next());
}

// @ts-ignore
function main() {
  // Lesson2_2();
  // Lesson3_1();
  // Lesson4_1();
  Lesson5_1();
}

main();
