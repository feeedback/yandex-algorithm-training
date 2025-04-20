// https://contest.yandex.ru/contest/27665/problems/E

// Для строительство двухмерной пирамиды используются прямоугольные блоки, каждый из которых
// характеризуется шириной и высотой. Можно поставить один блок на другой, только если ширина
// верхнего блока строго меньше ширины нижнего. Самым нижним в пирамиде может быть блок любой
// ширины. По заданному набору блоков определите, пирамиду какой наибольшей высоты можно построить
// из них.

// Формат ввода
// В первой строке входных данных задается число
// N — количество блоков (1 ≤ N ≤ 1 0 0 0 0 0 ).
// В следующий N строках задаются пары натуральных чисел w и h
//  ( 1 ≤ w , h  ≤ 1 0^ 9) — ширина и высота блока соответственно.

// Формат вывода
// Выведите одно целое число — максимальную высоту пирамиды.

function inputProcessing(lines) {
  const [, ...blocksRaw] = lines;
  const blocks = blocksRaw.map((widthAndHeight) =>
    widthAndHeight.split(' ').map(Number)
  );

  const mapWidthToBlocks = {};
  let sumHeight = 0;

  for (const [width, height] of blocks) {
    if (!mapWidthToBlocks[width]) {
      mapWidthToBlocks[width] = height;
      sumHeight += height;
    } else if (height > mapWidthToBlocks[width]) {
      sumHeight += height - mapWidthToBlocks[width];
      mapWidthToBlocks[width] = height;
    }
  }

  return sumHeight;
}

(async () => {
  // const inputLines = await input(1);
  const inputLines = ['3', '3 1', '2 2', '3 3'];
  // const inputLines = input;
  console.log({ inputLines });
  const outputLines = inputProcessing(inputLines);
  console.log({ outputLines });
  // output(outputLines);
})();

export default inputProcessing;
