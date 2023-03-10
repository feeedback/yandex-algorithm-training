const calcMatrixSum = (matrix, queriesRectangleSum, N, M) => {
  const prefixSum = new Array(N).fill(null).map(() => new Array(M));

  for (let x = 0; x < N; ++x) {
    for (let y = 0; y < M; ++y) {
      prefixSum[x][y] =
        matrix[x][y] +
        (prefixSum[x - 1]?.[y] ?? 0) +
        (prefixSum[x][y - 1] ?? 0) - //
        (prefixSum[x - 1]?.[y - 1] ?? 0);
    }
  }

  const res = [];
  let sum = 0;

  for (const rectangle of queriesRectangleSum) {
    const [x1, y1, x2, y2] = rectangle.map((n) => n - 1);

    sum =
      prefixSum[x2][y2] -
      (prefixSum[x1 - 1]?.[y2] ?? 0) -
      (prefixSum[x2][y1 - 1] ?? 0) + //
      (prefixSum[x1 - 1]?.[y1 - 1] ?? 0);

    res.push(sum);
  }

  return res;
};

/**
 * "9. Сумма в прямоугольнике" {@link "https://contest.yandex.ru/contest/45468/problems/9}
 *
 * Вам необходимо ответить на запросы узнать сумму всех элементов числовой матрицы N×M в
 * прямоугольнике с левым верхним углом (x1, y1) и правым нижним (x2, y2)
 *
 * @param { string[] } lines В первой строке находится числа N, M размеры матрицы (1 ≤ N, M ≤ 1000)
 * и K — количество запросов (1 ≤ K ≤ 100000). Каждая из следующих N строк содержит по M чисел`—
 * элементы соответствующей строки матрицы (по модулю не превосходят 1000). Последующие K строк
 * содержат по 4 целых числа, разделенных пробелом x1 y1 x2 y2 — запрос на сумму элементов матрице
 * в прямоугольнике (1 ≤ x1 ≤ x2 ≤ N, 1 ≤ y1 ≤ y2 ≤ M)
 *
 * @return { string } Для каждого запроса на отдельной строке выведите его результат — сумму всех
 * чисел в элементов матрице в прямоугольнике (x1, y1), (x2, y2)
 */
function inputProcessing(lines) {
  // eslint-disable-next-line no-unused-vars
  const [N, M, K] = lines[0].split(' ').map(Number);
  const matrix = lines.slice(1, 1 + N).map((xy) => xy.split(' ').map(Number));
  const queriesRectangleSum = lines.slice(1 + N).map((xy) => xy.split(' ').map(Number));

  return calcMatrixSum(matrix, queriesRectangleSum, N, M);
}

export default inputProcessing;
