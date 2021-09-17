/**
 * "A. Количество совпадающих" {@link "https://contest.yandex.ru/contest/28964/problems/A/}
 *
 * @param { number[] } list1
 * @param { number[] } list2
 *
 * @return { number } Выведите ответ на задачу
 */
function calcCountIntersection(list1, list2) {
  const set1 = new Set(list1);
  const set2 = new Set(list2);
  let intersectionCount = 0;

  for (const num of set1) {
    if (set2.has(num)) {
      intersectionCount += 1;
    }
  }
  return intersectionCount;
}

function inputProcessing(lines) {
  const list1 = lines[0].split(' ').map(Number);
  const list2 = lines[1].split(' ').map(Number);

  return calcCountIntersection(list1, list2);
}

export default inputProcessing;
