/**
 * "A. Двоичный поиск" {@link "https://contest.yandex.ru/contest/27844/problems/A/}
 *
 * @param { Array<number> } sortedArrN целые числа, каждое из которых по модулю не превосходит 10^9
 * @param { Array<number> } arrayK целые числа, каждое из которых по модулю не превосходит 10^9
 *
 * @return { Array<string> } для каждого из K чисел вывести в отдельную строку "YES", если это
 * число встречается в первом массиве, и "NO" в противном случае.
 */
const createBinarySearchIndexFn = (sortedNums, compareFn = (a, b) => a < b) => {
  const sortedNumsLength = sortedNums.length;

  return (num) => {
    let leftIndex = 0;
    let rightIndex = sortedNumsLength;
    let foundIndex = null;

    while (leftIndex < rightIndex) {
      const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
      const middleEl = sortedNums[middleIndex];

      if (num === middleEl) {
        foundIndex = middleIndex;
        break;
      }

      if (compareFn(num, middleEl)) {
        rightIndex = middleIndex;
      } else {
        leftIndex = middleIndex + 1;
      }
    }

    return foundIndex;
  };
};

function isHasElementArrayInOther(sortedArrN, arrayK) {
  const binarySearchIndex = createBinarySearchIndexFn(sortedArrN, (a, b) => a < b);

  return arrayK.map((num) => (binarySearchIndex(num) !== null ? 'YES' : 'NO'));
}

function inputProcessing(lines) {
  // const [N, K] = lines[0].split(' ').map(Number); // 0-100_000
  const sortedArrN = lines[1].split(' ').map(Number);
  const arrayK = lines[2].split(' ').map(Number);

  return isHasElementArrayInOther(sortedArrN, arrayK);
}

export default inputProcessing;

// через Set

// function isHasElementArrayInOther(N, K, sortedArrN, arrayK) {
//   const set = new Set(sortedArrN);

//   return arrayK.map((num) => (set.has(num) ? 'YES' : 'NO'));
// }
