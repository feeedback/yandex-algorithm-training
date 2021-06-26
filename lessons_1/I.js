// За многие годы заточения узник замка Иф проделал в стене прямоугольное отверстие размером D × E.
// Замок Иф сложен из кирпичей, размером A × B × C.
//  Определите, сможет ли узник выбрасывать кирпичи в море через это отверстие,
//  если стороны кирпича должны быть параллельны сторонам отверстия.

// Формат ввода
// Программа получает на вход числа A, B, C, D, E.

// Формат вывода
// Программа должна вывести слово YES или NO.

function inputProcessing(lines) {
  const [X, Y, Z, windowX, windowY] = lines.map(Number);
  const [windowMin, windowMax] = [windowX, windowY].sort((a, b) => a - b);
  const [brickMin, brickAverage] = [X, Y, Z].sort((a, b) => a - b);

  if (!(windowMin >= brickMin && windowMax >= brickAverage)) {
    return 'NO';
  }
  return 'YES';
}

(async () => {
  // const inputLines = await input(1);
  const inputLines = [2, 33, 3, 3, 2];
  console.log({ inputLines });
  const outputLines = inputProcessing(inputLines);
  console.log({ outputLines });
  // output(outputLines);
})();

export default inputProcessing;
