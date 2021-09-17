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

/**
 * "A. Быстрый поиск в массиве" {@link "https://contest.yandex.ru/contest/29188/problems/A/}
 *
 * @param { Array<number> } sortedNums отсортированный массив целых чисел от -10^9 до 10^9
 * @param { number } N длина массива
 * @param { number } l целые числа от -10^9 до 10^9
 * @param { number } r целые числа от -10^9 до 10^9
 *
 * @return { Array<string> } для каждой пары LR чисел вывести “Сколько чисел имеют значения от L до R?” через пробел
 */
function howManyElementsBetweenLR(sortedNums, N, l, r) {
  const rIdx = binarySearch(0, N, (middleIndex) => sortedNums[middleIndex] > r);
  const lIdx = binarySearch(0, N, (middleIndex) => sortedNums[middleIndex] >= l);

  return rIdx - lIdx;
}

function inputProcessing(lines) {
  const N = Number(lines[0]); // 1-10^5
  const sortedNums = lines[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  const K = Number(lines[2]); // 1-10^5
  const pairsLR = lines.slice(3, 3 + K).map((lr) => lr.split(' ').map(Number));

  return pairsLR.map(([l, r]) => howManyElementsBetweenLR(sortedNums, N, l, r)).join(' ');
}

export default inputProcessing;
