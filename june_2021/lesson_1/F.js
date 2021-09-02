// В школе решили на один прямоугольный стол поставить два прямоугольных ноутбука.
// Ноутбуки нужно поставить так, чтобы их стороны были параллельны сторонам стола.
// Определите, какие размеры должен иметь стол, чтобы оба ноутбука на него поместились, и площадь стола была минимальна.

// Формат ввода
// Вводится четыре натуральных числа, первые два задают размеры одного ноутбука, а следующие два — размеры второго. Числа не превышают 1000.

// Формат вывода
// Выведите два числа — размеры стола. Если возможно несколько ответов, выведите любой из них (но только один).

// import { input, output } from '../../input-output_dev.js';

function inputProcessing(lines) {
  const [x1, y1, x2, y2] = lines[0].split(' ').map(Number);
  // console.log({ x1, y1, x2, y2 });

  const side1 = x1 + x2;
  const side2 = Math.max(y1, y2);

  const side3 = y1 + y2;
  const side4 = Math.max(x1, x2);

  const side5 = x1 + y2;
  const side6 = Math.max(x2, y1);

  const side7 = x2 + y1;
  const side8 = Math.max(x1, y2);

  const figures = {
    [side1 * side2]: [side1, side2],
    [side3 * side4]: [side3, side4],
    [side5 * side6]: [side5, side6],
    [side7 * side8]: [side7, side8],
  };
  // console.log({ res });
  const minAreaSides = figures[Math.min(...Object.keys(figures).map(Number))];
  return minAreaSides;
}

(async () => {
  // const inputLines = await input(1);
  const inputLines = ['10 2 2 10'];
  console.log({ inputLines });
  const outputLines = inputProcessing(inputLines);
  console.log({ outputLines });
  // output(outputLines);
})();
