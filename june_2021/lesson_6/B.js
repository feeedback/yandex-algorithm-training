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

    return foundIndex !== null ? foundIndex : [leftIndex, leftIndex - 1]; // возвращаем еще и предыдущий индекс
  };
};

/**
 * "B. Приближенный двоичный поиск" {@link "https://contest.yandex.ru/contest/27844/problems/B/}
 *
 * @param { Array<number> } sortedArrN целые числа, отсортированные по неубыванию
 * @param { Array<number> } arrayK целые числа, каждое из которых по модулю не превосходит 10^9
 *
 * @return { Array<string> } для каждого из K чисел выведите в отдельную строку число из первого
 * массива, наиболее близкое к данному. Если таких несколько, выведите меньшее из них.
 */
function searchNearestNumber(sortedArrN, arrayK) {
  const binarySearchIndex = createBinarySearchIndexFn(sortedArrN, (a, b) => a < b);
  const getDelta = (primaryNum, num) => Math.abs(num - primaryNum);

  return arrayK.map((num) => {
    const foundIndex = binarySearchIndex(num);

    if (Number.isInteger(foundIndex)) {
      return sortedArrN[foundIndex];
    }

    const [indexRight, indexLeft] = foundIndex;
    const [valueRight, valueLeft] = [sortedArrN[indexRight], sortedArrN[indexLeft]];

    if (indexLeft < 0) {
      return valueRight;
    }
    if (indexRight >= sortedArrN.length) {
      return valueLeft;
    }

    return getDelta(valueRight, num) < getDelta(valueLeft, num) ? valueRight : valueLeft;
  });
}

function inputProcessing(lines) {
  // const [N, K] = lines[0].split(' ').map(Number); // 0-100_001

  const sortedArrN = lines[1].split(' ').map(Number);
  const arrayK = lines[2].split(' ').map(Number);

  return searchNearestNumber(sortedArrN, arrayK);
}

export default inputProcessing;
