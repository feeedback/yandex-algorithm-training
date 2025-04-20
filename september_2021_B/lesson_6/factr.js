import { randomInt } from 'crypto';

const factorization = (number, accFactors = []) => {
  const sqrtNumber = Math.sqrt(number);
  let i = 2;

  if (number % i) {
    i = 3;
    while (number % i && i < sqrtNumber) {
      i += 2;
    }
  }
  i = i <= sqrtNumber ? i : number;
  if (i === number) {
    return [...accFactors, i];
  }
  return factorization(number / i, [...accFactors, i]);
};

const printDivisors1 = (num) => {
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
const factorization3 = (numberInit) => {
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

const divisors0 = (number) => {
  if (number < 10 ** 5) {
    return printDivisors1(number);
  }

  const factors = factorization3(number);

  if (factors.length > 9) {
    return printDivisors1(number);
  }

  const multipliersList = [1, ...new Set(combinations([1, ...factors]))];

  return multipliersList.sort((a, b) => a - b);
};
// function printDivisors2(n) {
//   const arr = [];

//   for (let i = 1; i * i < n; i++) {
//     if (n % i === 0) arr.push(i);
//   }

//   for (let j = Math.sqrt(n); j >= 1; j--) {
//     if (n % j === 0) arr.push(n / j);
//   }
//   return arr;
// }
const factorization2 = (numberInit) => {
  const simpleDivisors = [];
  let number = numberInit;
  let i = 2;
  let sqrtNumber = Math.sqrt(number);

  while (i <= sqrtNumber) {
    sqrtNumber = Math.sqrt(number);
    i = 2;
    if (number % i) {
      i = 3;
      while (number % i && i < sqrtNumber) {
        i += 2;
      }
    }

    if (i <= sqrtNumber) {
      simpleDivisors.push(i);
    }
    number /= i;
  }
  simpleDivisors.push(number);
  return simpleDivisors;
};

const factorization0 = (number, accFactors = []) => {
  const sqrtNumber = Math.sqrt(number);
  let i = 2;
  if (number % i) {
    i = 3;
    while (number % i && i < sqrtNumber) {
      i += 2;
    }
  }
  i = i <= sqrtNumber ? i : number;
  if (i === number) {
    return [...accFactors, i];
  }
  return factorization(number / i, [...accFactors, i]);
};

const divisors1 = (number) => {
  const factors = factorization3(number).sort((a, b) => a - b);
  if (factors.length === 1) {
    return [1, factors[0]];
  }

  const multipliersList = [];
  let product;

  for (let i = 0; i < factors.length; i += 1) {
    product = factors[i];
    for (let j = i + 1; j < factors.length; j += 1) {
      multipliersList.push(factors[i] * factors[j]);
      product *= factors[j];
      multipliersList.push(product);
    }
  }
  return [1, ...Array.from(multipliersList), number];
};
const divisors2 = (number) => {
  const factors = factorization3(number);
  if (factors.length === 1) {
    return [1, factors[0]];
  }

  const multipliersList = new Set(factors);
  let product;

  for (let i = 0; i < factors.length; i += 1) {
    product = factors[i];
    for (let j = 1; j < factors.length - 1; j += 1) {
      multipliersList.add(factors[i] * factors[j]);
      product *= factors[j];
      multipliersList.add(product);
    }
  }
  return [1, ...Array.from(multipliersList).sort((a, b) => a - b)];
};
// console.time('factorization');
// divisors(1040224220);
// console.timeEnd('factorization');

// console.time('printDivisors 1');
// printDivisors1(1040224220);
// console.timeEnd('printDivisors 1');
// console.time('factorization 1');
// console.log(factorization(22244442));
// console.timeEnd('factorization 1');
// let sum1 = 0;
// let sum2 = 0;

// for (let n = 1; n < 20; n++) {
//   // const num = randomInt(1, 2 ** n); // 281474976710654
//   const num = randomInt(1, 281474976710654);
//   // const num = randomInt(1, 10 ** 8);

//   const start1 = Date.now();
//   divisors0(num);
//   const time1 = Date.now() - start1;
//   sum1 += time1;

//   const start2 = Date.now();
//   printDivisors1(num);
//   const time2 = Date.now() - start2;
//   sum2 += time2;
// }
// console.log({ sum1, sum2 });

export { divisors2, divisors0, printDivisors1 };
// TODO https://shkolkovo.net/catalog/reshenie_uravnenij_2/kubicheskie

// import { randomInt } from 'crypto';
// import { divisors0, printDivisors1 } from './C.js';

// for (let n = 1; n < 20; n++) {
//   // const num = randomInt(1, 2 ** n); // 281474976710654
//   const num = randomInt(1, 281474976710654);
//   test(`${num}`, () => {
//     const start1 = Date.now();
//     const output1 = divisors0(num);
//     const time1 = Date.now() - start1;

//     const start2 = Date.now();
//     const output2 = printDivisors1(num);
//     const time2 = Date.now() - start2;

//     assert.strictEqual(output1, output2);
//     // assert.strictEqual(time1).toBeLessThanOrEqual(time2);
//     console.log(time1, time2);
//   });
// }
