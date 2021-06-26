// https://contest.yandex.ru/contest/27472/problems/D/

// Дан список чисел. Определите, сколько в этом списке элементов,
// которые больше двух своих соседей и выведите количество таких элементов.

// Формат ввода
// Вводится список чисел. Все числа списка находятся на одной строке.

// Формат вывода
// Выведите ответ на задачу.

function inputProcessing(lines) {
  const list = lines[0].split(' ').map(Number);

  let count = 0;

  for (let i = 1; i < list.length - 1; i++) {
    if (list[i - 1] < list[i] && list[i] > list[i + 1]) {
      count += 1;
    }
  }
  return count;
}

(async () => {
  // const inputLines = await input(1);
  const inputLines = ['1 2 3 4 5'];
  console.log({ inputLines });

  const outputLines = inputProcessing(inputLines);
  console.log({ outputLines });
  // output(outputLines);
})();
export default inputProcessing;
