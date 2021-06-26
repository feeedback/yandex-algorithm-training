// https://contest.yandex.ru/contest/27472/problems/C/

// Напишите программу, которая находит в массиве элемент, самый близкий по величине к данному числу.

// Формат ввода
// В первой строке задается одно натуральное число N, не превосходящее 1000 – размер массива.
// Во второй строке содержатся N чисел – элементы массива(целые числа, не превосходящие по модулю 1000).
// В третьей строке вводится одно целое число x, не превосходящее по модулю 1000.

// Формат вывода
// Вывести значение элемента массива, ближайшее к x. Если таких чисел несколько, выведите любое из них.

function inputProcessing(lines) {
  // const arrLength = Number(lines[0]);
  const X = Number(lines[2]);
  const list = lines[1].split(' ').map(Number);

  let minDiff = Infinity;
  let numMinDiff = null;

  for (const num of list) {
    const diff = Math.abs(num - X);

    if (diff < minDiff) {
      if (diff === 0) {
        return num;
      }

      minDiff = diff;
      numMinDiff = num;
    }
  }
  return numMinDiff;
}

(async () => {
  // const inputLines = await input(1);
  const inputLines = [5, '-2 5 4 -3 -2 2 1 0', -1];
  console.log({ inputLines });

  const outputLines = inputProcessing(inputLines);
  console.log({ outputLines });
  // output(outputLines);
})();
export default inputProcessing;
