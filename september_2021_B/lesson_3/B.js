/**
 * "B. Встречалось ли число раньше" {@link "https://contest.yandex.ru/contest/28964/problems/B}
 *
 * @param { number[] } list
 *
 * @return { Array<'YES'|'NO'> } для каждого числа выведите YES, если это число ранее встречалось или NO, если не встречалось
 */
function mapIsThisNumberPreviouslyOccurred(list) {
  const setVisited = new Set();

  return list.map((num) => (setVisited.has(num) ? 'YES' : setVisited.add(num) && 'NO'));
}

function inputProcessing(lines) {
  const list = lines[0].split(' ').map(Number);

  return mapIsThisNumberPreviouslyOccurred(list);
}

export default inputProcessing;
