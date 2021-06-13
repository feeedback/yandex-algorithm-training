// https://contest.yandex.ru/contest/27663/problems/A

// Дан список чисел, который может содержать до 100000 чисел. Определите, сколько в нем встречается различных чисел.

// Формат ввода
// Вводится список целых чисел. Все числа списка находятся на одной строке.

// Формат вывода
// Выведите ответ на задачу.


function inputProcessing(lines) {
  const list = lines[0].split(' ').map(Number);

  return new Set(list).size;
}

(async () => {
  // const inputLines = await input(1);
  const inputLines = ['1 2 3 4 5 1 2 1 2 7 3'];
  console.log({ inputLines });
  const outputLines = inputProcessing(inputLines);
  console.log({ outputLines });
  // output(outputLines);
})();

export default inputProcessing;
