// Имеется N кг металлического сплава. Из него изготавливают заготовки массой K кг каждая.
// После этого из каждой заготовки вытачиваются детали массой M кг каждая (из каждой заготовки вытачивают максимально возможное количество деталей).
// Если от заготовок после этого что - то остается, то этот материал возвращают к началу производственного цикла и сплавляют с тем,
// что осталось при изготовлении заготовок.Если того сплава, который получился, достаточно для изготовления хотя бы одной заготовки,
// то из него снова изготавливают заготовки, из них – детали и т.д.
// Напишите программу, которая вычислит, какое количество деталей может быть получено по этой технологии из имеющихся исходно N кг сплава.

// Формат ввода
// Вводятся N, K, M. Все числа натуральные и не превосходят 200.

// Формат вывода
// Выведите одно число — количество деталей, которое может получиться по такой технологии.

// import { input, output } from '../../input-output_dev.js';

function inputProcessing(lines) {
  const [N, K, M] = lines[0].split(' ').map(Number);

  if (K < M) {
    return 0;
  }

  let tailFromParts = 0;
  let sum = N;
  let partsRes = 0;

  while (sum >= K) {
    const blanksCount = Math.floor(sum / K);
    sum -= blanksCount * K;

    const partsCount = Math.floor(K / M) * blanksCount;
    partsRes += partsCount;
    tailFromParts = (K % M) * blanksCount;
    sum += tailFromParts;
  }

  return String(partsRes);
}

// (async () => {
//   // const inputLines = await input(1);
//   const inputLines = ['30 5 7'];
//   console.log({ inputLines });
//   const outputLines = inputProcessing(inputLines);
//   console.log({ outputLines });
//   // output(outputLines);
// })();

export default inputProcessing;
