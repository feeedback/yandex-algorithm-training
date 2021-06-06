// В школе решили на один прямоугольный стол поставить два прямоугольных ноутбука. Ноутбуки нужно поставить так, чтобы их стороны были параллельны сторонам стола. Определите, какие размеры должен иметь стол, чтобы оба ноутбука на него поместились, и площадь стола была минимальна.

// Формат ввода
// Вводится четыре натуральных числа, первые два задают размеры одного ноутбука, а следующие два — размеры второго. Числа не превышают 1000.

// Формат вывода
// Выведите два числа — размеры стола. Если возможно несколько ответов, выведите любой из них (но только один).

import { input, output } from '../../input-output.js';

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
