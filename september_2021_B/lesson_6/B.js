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
 * "B. Номер левого и правого вхождения"
 * {@link "https://contest.yandex.ru/contest/29188/problems/B/}
 *
 * Требуется определить в заданном массиве номер самого левого и самого правого элемента, равного
 * искомому числу.
 *
 * @param { Array<number> } sortedNums отсортированный массив целых чисел от -10^9 до 10^9
 * @param { number } N длина массива
 * @param { number } num целые числа от -10^9 до 10^9
 *
 * @return { [number, number]} Для каждого запроса выведите в через пробел два числа: номер
 * элемента самого левого и самого правого элементов массива, равных числу-запросу. Элементы
 * массива нумеруются с единицы. Если в массиве нет такого числа, выведите в соответствующей строке
 * два нуля, разделенных пробелом.
 */
function howManyElementsBetweenLR(sortedNums, N, num) {
  const rIdx = binarySearch(
    0,
    N,
    (middleIndex) => sortedNums[middleIndex] > num
  );
  const lIdx = binarySearch(
    0,
    N,
    (middleIndex) => sortedNums[middleIndex] >= num
  );

  if (rIdx === lIdx) {
    return [0, 0];
  }
  return [lIdx + 1, rIdx + 1 - 1];
}

function inputProcessing(lines) {
  const N = Number(lines[0]); // 1-10^5
  const sortedNums = lines[1].split(' ').map(Number);
  // const K = Number(lines[2]); // 1-10^5
  const queryNums = lines[3].split(' ').map(Number);

  return queryNums.map((num) =>
    howManyElementsBetweenLR(sortedNums, N, num).join(' ')
  );
}

export default inputProcessing;
