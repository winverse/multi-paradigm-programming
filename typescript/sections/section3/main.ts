function lesson1_1() {
  function* gen() {
    yield 1;
    yield 2;
    yield 3;
  }

  const g = gen();
  console.log(g.next());
  console.log(g.next());
  console.log(g.next());
  console.log(g.next());
}

function lesson2_1() {
  function* gen() {
    let index = 0;
    while (true) {
      yield index++;
    }
  }

  const g = gen();
  let result = g.next();
  while (!result.done && result.value < 10) {
    console.log(result.value);
    result = g.next(); // 이터레이터를 진행시키는 부분 추가
  }
}

function lesson3_1() {
  function* reverse<T>(array: T[]) {
    let index = array.length - 1;
    while (index >= 0) {
      yield array[index--];
    }
  }

  const gen = reverse([1, 2, 3]);
  console.log(gen.next());
  console.log(gen.next());
  console.log(gen.next());
  console.log(gen.next());
}

// @ts-ignore
function main() {
  // lesson1_1();
  // lesson2_1();
  lesson3_1();
}

main();
