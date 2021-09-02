// Решите в целых числах уравнение:
// a, b, c – данные целые числа: найдите все решения или сообщите, что решений в целых числах нет.

// Формат ввода
// Вводятся три числа a, b и c по одному в строке.

// Формат вывода
// Программа должна вывести все решения уравнения в порядке возрастания, либо NO SOLUTION (заглавными буквами), если решений нет. Если решений бесконечно много, вывести MANY SOLUTIONS.

import { input, output } from '../../input-output_dev.js';

function inputProcessing(lines) {
  const zeroRoot = 'NO SOLUTION';
  const infinitelyRoot = 'MANY SOLUTIONS';

  const [a, b, c] = lines.map(Number);
  if (c < 0) {
    return zeroRoot;
  }
  if (a === 0) {
    return c ** 2 === b ? infinitelyRoot : zeroRoot;
  }

  const x = (c ** 2 - b) / a;

  if (Number.isInteger(x)) {
    return x;
  }
  return zeroRoot;
}

(async () => {
  const inputLines = await input(3);
  console.log({ inputLines });
  const outputLines = inputProcessing(inputLines);
  console.log({ outputLines });
  output(outputLines);
})();
