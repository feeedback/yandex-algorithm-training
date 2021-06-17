// https://contest.yandex.ru/contest/27663/problems/B/

// Даны два списка чисел, которые могут содержать до 10000 чисел каждый. Выведите все числа,
// которые входят как в первый, так и во второй список в порядке возрастания. Примечание. И даже
// эту задачу на Питоне можно решить в одну строчку.

// Формат ввода
// Вводятся два списка целых чисел. Все числа каждого списка находятся на отдельной строке.

// Формат вывода
// Выведите ответ на задачу.

function inputProcessing(lines) {
  const set1 = new Set(lines[0].split(' ').map(Number));
  const set2 = new Set(lines[1].split(' ').map(Number));

  const intersection = [];
  for (const num of set1) {
    if (set2.has(num)) {
      intersection.push(num);
    }
  }
  return intersection.sort((a, b) => a - b);
}

(async () => {
  // const inputLines = await input(1);
  const inputLines = ['1 3 2', '4 3 2'];

  // console.log({ inputLines });
  const outputLines = inputProcessing(inputLines);
  console.log({ outputLines });
  // output(outputLines);
})();

export default inputProcessing;
