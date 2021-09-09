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
 * "C. Дипломы" {@link "https://contest.yandex.ru/contest/27844/problems/C/}
 *
 * @param { number } width ширина рамки, целое (1 ≤ X ≤ 10^9)
 * @param { number } height высота рамки, целое (1 ≤ X ≤ 10^9)
 * @param { number } count количество рамок, целое (1 ≤ X ≤ 10^9)
 *
 * @return { number } минимальный размер стороны квадратной доски, которая потребуется для размещения всех своих рамок
 */
function calcMinBoardSize(width, height, count) {
  const left = Math.max(width, height);
  const right = Math.max(width * count, height * count);

  const isCountBoardCellEnough = (maxSideCount) =>
    intDivision(maxSideCount, width) * intDivision(maxSideCount, height) >= count;

  return binarySearch(left, right, isCountBoardCellEnough);
}

function inputProcessing(lines) {
  const [width, height, count] = lines[0].split(' ').map(Number);

  return calcMinBoardSize(width, height, count);
}

export default inputProcessing;

// eslint-disable-next-line no-unused-vars
function calcMinBoardSizeByFormula(width, height, count) {
  // time complexity ~~ O(log(N/3)), less then binary search

  const maxSide = Math.max(width, height);
  const minSide = Math.min(width, height);

  const aspectRatio = maxSide / minSide;
  const aspectRatioSqrt = Math.sqrt(aspectRatio);
  const sqrtCount = Math.sqrt(count);

  let maxCountByMaxSide = Math.ceil(sqrtCount / aspectRatioSqrt);
  while (intDivision(maxCountByMaxSide * maxSide, minSide) * maxCountByMaxSide < count) {
    maxCountByMaxSide += 1;
  }
  let maxCountByMinSide = Math.ceil(sqrtCount * aspectRatioSqrt);

  while (intDivision(maxCountByMinSide * minSide, maxSide) * maxCountByMinSide < count) {
    maxCountByMinSide += 1;
  }

  return Math.min(maxCountByMaxSide * maxSide, maxCountByMinSide * minSide);
}

// ### perfomance testing ###

// const [width, height, count] = [17, 37, 10_000_000_000_000];
// if (BigInt(Math.max(width, height)) * BigInt(count) > BigInt(Number.MAX_SAFE_INTEGER)) {
//   throw new Error('More then MAX_SAFE_INTEGER');
// }

// let sumMy = 0;
// let sumBin = 0;
// for (let index = 0; index < 10_000_000; index++) {
//   const startMy = Date.now();
//   calcMinBoardSizeByFormula(width, height, count);
//   const my = Date.now() - startMy;
//   sumMy += my;

//   const startBin = Date.now();
//   calcMinBoardSize(width, height, count);
//   const bin = Date.now() - startBin;
//   sumBin += bin;
// }
// console.log({ sumMy, sumBin });
