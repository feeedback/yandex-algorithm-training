/**
 * "C. Даты" {@link "https://contest.yandex.ru/contest/28730/problems/C/}
 *
 * @param { number } x день или месяц 1≤x≤31
 * @param { number } y день или месяц 1≤y≤31
 * @param { number } year дата 1970≤z≤2069
 *
 * @return { 0|1 } Выведите 1, если дата определяется однозначно, и 0 в противном случае.
 */
function parseDate(x, y, year) {
  return Number(x > 12 || y > 12 || x === y);
}

// eslint-disable-next-line no-unused-vars
function inputProcessing(lines) {
  const [x, y, year] = lines[0].split(' ').map(Number);

  return parseDate(x, y, year);
}

export default inputProcessing;
