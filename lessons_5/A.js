// https://contest.yandex.ru/contest/27794/problems/A

// Глеб обожает шоппинг. Как-то раз он загорелся идеей подобрать себе майку и штаны так, чтобы
// выглядеть в них максимально стильно. В понимании Глеба стильность одежды тем больше, чем меньше
// разница в цвете элементов его одежды.

// В наличии имеется N (1 ≤ N ≤ 100 000) маек и M (1 ≤ M ≤ 100 000) штанов, про каждый элемент
// известен его цвет (целое число от 1 до 10 000 000). Помогите Глебу выбрать одну майку и одни
// штаны так, чтобы разница в их цвете была как можно меньше.

// Формат ввода
// Сначала вводится информация о майках: в первой строке целое число N (1 ≤ N ≤ 100 000) и во
// второй N целых чисел от 1 до 10 000 000 — цвета имеющихся в наличии маек. Гарантируется, что
// номера цветов идут в возрастающем порядке (в частности, цвета никаких двух маек не совпадают).

// Далее в том же формате идёт описание штанов: их количество M (1 ≤ M ≤ 100 000) и в следующей
// строке M целых чисел от 1 до 10 000 000 в возрастающем порядке — цвета штанов.

// Формат вывода
// Выведите пару неотрицательных чисел — цвет майки и цвет штанов, которые следует выбрать Глебу.
// Если вариантов выбора несколько, выведите любой из них.

// import fs from 'fs';

function inputProcessing(lines) {
  const N = Number(lines[0]);
  const M = Number(lines[2]);
  const listN = lines[1].split(' ').map(Number);
  const listM = lines[3].split(' ').map(Number);

  let indexN = 0;
  let indexM = 0;

  let minIndexN = 0;
  let minIndexM = 0;
  let minDiff = Infinity;

  while (indexN < N && indexM < M) {
    const [elemN, elemM] = [listN[indexN], listM[indexM]];

    if (elemN === elemM) {
      [minIndexN, minIndexM] = [indexN, indexM];
      break;
    }

    const diff = Math.abs(elemN - elemM);

    if (diff < minDiff) {
      minDiff = diff;
      [minIndexN, minIndexM] = [indexN, indexM];
    }

    if (elemN < elemM) indexN += 1;
    else indexM += 1;
  }

  return [listN[minIndexN], listM[minIndexM]].join(' ');
}

// (async () => {
//   // const inputLines = await input(1);
//   const inputLines = fs.readFileSync('input.txt', 'utf8').split('\r\n');
//   // const inputLines = ['3', 'Hello Hi', 'Bye Goodbye', 'List Array', 'Goodbye'];
//   // const inputLines = input;
//   console.log({ inputLines });
//   const outputLines = inputProcessing(inputLines);
//   console.log({ outputLines });
//   // output(outputLines);
// })();

export default inputProcessing;
