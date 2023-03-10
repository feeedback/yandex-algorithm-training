const calcMinRectangle = (cells) => {
  const MIN = { x: Infinity, y: Infinity };
  const MAX = { x: -Infinity, y: -Infinity };

  for (const [x, y] of cells) {
    if (x < MIN.x) MIN.x = x;
    if (y < MIN.y) MIN.y = y;

    if (x > MAX.x) MAX.x = x;
    if (y > MAX.y) MAX.y = y;
  }
  return [MIN.x, MIN.y, MAX.x, MAX.y].join(' ');
};

/**
 * "8. Минимальный прямоугольник" {@link "https://contest.yandex.ru/contest/45468/problems/8}
 *
 * На клетчатой плоскости закрашено K клеток. Требуется найти минимальный по площади прямоугольник,
 * со сторонами, параллельными линиям сетки, покрывающий все закрашенные клетки.
 *
 * @param { string[] } lines Во входном файле, на первой строке, находится число K (1 ≤ K ≤ 100).
 * На следующих K строках находятся пары чисел Xi и Yi – координаты закрашенных клеток (|Xi|, |Yi|
 * ≤ 109).
 *
 * @return { string } Выведите в выходной файл координаты левого нижнего и правого верхнего углов
 * прямоугольника.
 */
function inputProcessing(lines) {
  const cells = lines.slice(1).map((xy) => xy.split(' ').map(Number));

  return calcMinRectangle(cells);
}

export default inputProcessing;
