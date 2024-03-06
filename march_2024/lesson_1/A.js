function countPaintedTrees(
  treeIndexV,
  treeIndexM,
  radiusV,
  radiusM
) {
  const minIndexV = treeIndexV - radiusV;
  const maxIndexV = treeIndexV + radiusV;

  const minIndexM = treeIndexM - radiusM;
  const maxIndexM = treeIndexM + radiusM;

  const maxIndex = Math.max(minIndexV, maxIndexV, minIndexM, maxIndexM)
  const minIndex = Math.min(minIndexV, maxIndexV, minIndexM, maxIndexM)

  const maxDistance = maxIndex - minIndex

  let gap = 0
  if (minIndexV > maxIndexM) { gap = Math.max(0, minIndexV - maxIndexM - 1) }
  if (minIndexM > maxIndexV) { gap = Math.max(0, minIndexM - maxIndexV - 1) }

  const paintedTrees = maxDistance - gap + 1
  
  return paintedTrees;
}

/**
 * "A. Покраска деревьев" {@link "https://contest.yandex.ru/contest/59539/problems/A}
 *
 * @param { string[] } lines В первой строке содержится два целых числа P и V — номер дерева, у
 * которого стоит ведро Васи и на сколько деревьев он может от него удаляться. В второй строке
 * содержится два целых числа Q и M — аналогичные данные для Маши.
 * Все числа целые и по модулю не превосходят 10^8

 * @return { number } Выведите одно число — количество деревьев, которые могут быть покрашены.
 */
function inputProcessing(lines) {
  const [P, V] = lines[0].split(" ").map(Number);
  const [Q, M] = lines[1].split(" ").map(Number);

  return countPaintedTrees(P, Q, V, M);
}

export default inputProcessing;
