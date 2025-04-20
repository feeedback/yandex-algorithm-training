// import { divisors0 } from './factr.js';
import { setTimeout as delay } from 'timers/promises';

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
 * "C. Корень кубического уравнения" {@link "https://contest.yandex.ru/contest/29188/problems/C/}
 *
 * Дано кубическое уравнение ax3+bx2+cx+d=0 (a≠0). Известно, что у этого уравнения есть ровно один
 * корень. Требуется его найти.
 *
 * @param { number } a целые числа от -1000 до 1000
 * @param { number } b целые числа от -1000 до 1000
 * @param { number } c целые числа от -1000 до 1000
 * @param { number } d целые числа от -1000 до 1000
 *
 * @return { x } Выведите единственный корень уравнения с точностью не менее 5 знаков после десятичной точки.
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

const getDivisorsBruteForce = (num) => {
  const arr = [];

  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      const divisor = Math.floor(num / i);

      if (divisor !== i) {
        arr.push(divisor);
      }
      arr.push(i);
    }
  }
  return arr.sort((a, b) => a - b);
};
const factorization = (numberInit) => {
  const simpleDivisors = [];
  let number = numberInit;
  let i = 2;

  while (true) {
    const sqrtNumber = Math.sqrt(number);
    i = 2;
    if (number % i) {
      i = 3;
      while (number % i && i < sqrtNumber) {
        i += 2;
      }
    }

    if (i <= sqrtNumber) {
      simpleDivisors.push(i);
    } else if (i > sqrtNumber) {
      simpleDivisors.push(number);
      break;
    }

    number /= i;
  }

  return simpleDivisors;
};
const combinations = (array) =>
  new Array(1 << array.length)
    .fill()
    .map((e1, i) => array.filter((e2, j) => i & (1 << j)))
    .filter((a) => a.length >= 2)
    .map((e) => e.reduce((multi, n) => multi * n, 1));

const getDivisors = (number) => {
  if (number < 10 ** 5) {
    return getDivisorsBruteForce(number);
  }

  const factors = factorization(number);

  if (factors.length > 9) {
    return getDivisorsBruteForce(number);
  }

  const multipliersList = [1, ...new Set(combinations([1, ...factors]))];

  return multipliersList.sort((a, b) => a - b);
};
const solveX = (a, b, c, d, x) => a * x ** 3 + b * x ** 2 + c * x + d;

async function inputProcessing(lines) {
  const coefficients = lines[0].split(' ').map(Number);

  const [a, b, c, d] = coefficients;

  const [divisorD, divisorA] = [
    getDivisors(Math.abs(d)),
    getDivisors(Math.abs(a)),
  ];
  console.log({ divisorD, divisorA });
  let betterDiff = Infinity;
  let betterX = null;

  for (let i = 0; i < divisorD.length; i += 1) {
    for (let j = 0; j < divisorA.length; j += 1) {
      let x = divisorD[i] / divisorA[j];
      console.log(solveX(a, b, c, d, x));
      if (solveX(a, b, c, d, x) === 0) {
        return x;
      }

      if (Math.abs(solveX(a, b, c, d, x)) < betterDiff) {
        betterDiff = Math.abs(solveX(a, b, c, d, x));
        betterX = x;
      }

      x *= -1;
      // x = -0.096991;
      if (solveX(a, b, c, d, x) === 0) {
        return x;
      }

      if (Math.abs(solveX(a, b, c, d, x)) < betterDiff) {
        betterDiff = Math.abs(solveX(a, b, c, d, x));
        betterX = x;
      }
      // console.log(x, solveX(a, b, c, d, x));
    }
  }
  betterX = 1001;
  betterDiff = 1001000;
  console.log({ betterDiff, betterX });
  let n = 1;

  while (betterDiff > 0.001) {
    let x = betterX - 0.001 * n;
    console.log(x, { betterDiff, betterX });
    if (betterDiff < 0.00001) {
      return x;
    }

    if (Math.abs(solveX(a, b, c, d, x)) < betterDiff) {
      betterDiff = Math.abs(solveX(a, b, c, d, x));
      betterX = x;
      n = 1;
    }

    x = betterX + 0.001 * n;
    // console.log(x, { betterDiff, betterX });
    if (betterDiff < 0.00001) {
      return x;
    }

    if (Math.abs(solveX(a, b, c, d, x)) < betterDiff) {
      betterDiff = Math.abs(solveX(a, b, c, d, x));
      betterX = x;
      n = 1;
    }

    await delay(15);
    n += 1;
  }
  return betterX;
}
console.log(inputProcessing(['1 -1000 -1000 -1000']));
export default inputProcessing;
