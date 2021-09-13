/**
 * "C. Уникальные элементы" {@link "https://contest.yandex.ru/contest/28964/problems/C}
 *
 * @param { number[] } list список чисел
 *
 * @return { string } элементы, которые встречаются в списке только один раз
 */
function filterOnlyOneOccurrences(list) {
  const occurrences = new Map();
  for (const num of list) {
    occurrences.set(num, (occurrences.get(num) || 0) + 1);
  }

  return list.filter((num) => occurrences.get(num) === 1).join(' ');
}

function inputProcessing(lines) {
  const list = lines[0].split(' ').map(Number);

  return filterOnlyOneOccurrences(list);
}

export default inputProcessing;
