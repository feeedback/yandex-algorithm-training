/**
 * "C. Дипломы" {@link "https://contest.yandex.ru/contest/27844/problems/C/}
 *
 * @param { number } width ширина рамки, целое (1 ≤ X ≤ 10^9)
 * @param { number } height высота рамки, целое (1 ≤ X ≤ 10^9)
 * @param { number } count количество рамок, целое (1 ≤ X ≤ 10^9)
 *
 * @return { number } минимальный размер стороны квадратной доски, которая потребуется для размещения всех своих рамок
 */
function calcMinBoardSize(width, height, count) {
  const maxSide = Math.max(width, height);
  const minSide = Math.min(width, height);

  const aspectRatio = maxSide / minSide;
  const sqrtCount = Math.sqrt(count);

  let maxCountByMaxSide = Math.ceil(sqrtCount / Math.sqrt(aspectRatio));

  while (Math.floor((maxCountByMaxSide * maxSide) / minSide) * maxCountByMaxSide < count) {
    maxCountByMaxSide += 1;
  }

  let maxCountByMinSide = Math.ceil(sqrtCount * Math.sqrt(aspectRatio));

  while (Math.floor((maxCountByMinSide * minSide) / maxSide) * maxCountByMinSide < count) {
    maxCountByMinSide += 1;
  }

  return Math.min(maxCountByMaxSide * maxSide, maxCountByMinSide * minSide);
}

function inputProcessing(lines) {
  const [width, height, count] = lines[0].split(' ').map(Number);

  return calcMinBoardSize(width, height, count);
}

export default inputProcessing;
