const intDivision = (a, b) => Math.floor(a / b);

const binarySearch = (leftInit = 0, rightInit, checkFn) => {
  let left = leftInit;
  let right = rightInit;

  while (left < right) {
    const middle = intDivision(left + right, 2);

    if (checkFn(middle)) {
      right = middle;
    } else {
      left = middle + 1;
    }
  }

  return left;
};

const fn = (diegoStickers, collectorsMinQueryNums) => {
  const setDiegoStickers = [...new Set(diegoStickers)].sort((a, b) => b - a);
  const { length: setLength } = setDiegoStickers;

  return collectorsMinQueryNums.map(
    (minQuery) => setLength - binarySearch(0, setLength, (middleIndex) => minQuery > setDiegoStickers[middleIndex])
  );
};

/**
 * "3. Коллекционер Диего" {@link "https://contest.yandex.ru/contest/45468/problems/3}
 *
 * Красотой строки назовем максимальное число идущих подряд одинаковых букв. (красота строки
 * abcaabdddettq равна 3). Сделайте данную вам строку как можно более красивой, если вы можете
 * сделать не более k операций замены символа.
 *
 * @param { string[] } lines В 1-ой строке содержится единственное число N (0 ≤ N ≤ 100 000) —
 * количество наклеек у Диего.
 * Во 2-ой строке содержатся N целых неотрицательных чисел (не обязательно различных) — номера
 * наклеек Диего. Все номера наклеек не превосходят 10^9.
 * В 3-ей строке содержится число K (0 ≤ K ≤ 100 000) — количество коллекционеров, пришедших к
 * Диего.
 * В 4-ой строке содержатся K целых чисел pi (0 ≤ pi ≤ 10^9), где pi — наименьший номер
 * наклейки, не интересующий i-го коллекционера.
 *
 * @return { number } Для каждого коллекционера в отдельной строке выведите количество различных
 * чисел на наклейках, которые есть у Диего, но нет у этого коллекционера.
 */
function inputProcessing(lines) {
  // const N = Number(lines[0]);
  const diegoStickers = lines[1].split(' ').map(Number);
  // const K = Number(lines[2]);
  const collectorsMinQueryNums = lines[3].split(' ').map(Number);

  return fn(diegoStickers, collectorsMinQueryNums);
}

export default inputProcessing;
