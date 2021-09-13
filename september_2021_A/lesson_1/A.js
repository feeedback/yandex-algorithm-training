/**
 * "A. Сложное уравнение" {@link "https://contest.yandex.ru/contest/28724/problems/A/}
 *
 * Решить в целых числах уравнение (ax + b)/(cx + d) = 0
 *
 * @param { number } a
 * @param { number } b
 * @param { number } c c и d не равны нулю одновременно
 * @param { number } d c и d не равны нулю одновременно
 *
 * @return { number|"NO"|"INF" } вывести все целочисленные решения, если их число конечно, “NO” (без
 * кавычек), если целочисленных решений нет, и “INF” (без кавычек), если их бесконечно много.
 */
function fractionalEquationSolver(a, b, c, d) {
  if (a === 0 && b === 0) {
    return 'INF';
  }
  if (a === 0 || b * c === a * d) {
    return 'NO';
  }
  if (b % a === 0) {
    return -b / a;
  }
  return 'NO';
}

function inputProcessing(lines) {
  const [a, b, c, d] = lines.map(Number);

  return fractionalEquationSolver(a, b, c, d);
}

export default inputProcessing;
