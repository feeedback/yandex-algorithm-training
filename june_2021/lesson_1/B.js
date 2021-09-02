// Даны три натуральных числа.
// Возможно ли построить треугольник с такими сторонами.
// Если это возможно, выведите строку YES, иначе выведите строку NO.

// Треугольник — это три точки, не лежащие на одной прямой.

// Формат ввода
// Вводятся три натуральных числа.

// Формат вывода
// Выведите ответ на задачу.

import { input, output } from '../../input-output_dev.js';

function inputProcessing(lines) {
  const [a, b, c] = lines.map(Number);

  let isPossible = 'NO';
  if (a < b + c && b < a + c && c < a + b) {
    isPossible = 'YES';
  }
  return [isPossible];
}

(async () => {
  const inputLines = await input(3);
  console.log({ inputLines });
  const outputLines = [inputProcessing(inputLines)];
  console.log({ outputLines });
  output(outputLines);
})();
