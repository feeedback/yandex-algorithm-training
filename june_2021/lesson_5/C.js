// https://contest.yandex.ru/contest/27794/problems/C

// Александр живет в плоском мире. Горная цепь состоит из отрезков, соединяющих точки на плоскости,
// каждая из которых находится строго правее предыдущей (x-координата следующей точки больше, чем у
// предыдущей). Трассой на горной цепи называется её часть между двумя фиксированными концами
// отрезков.

// Участок, на котором при движении по трассе координата y (высота) всегда возрастает, называется
// подъемом, величиной подъема называется разность высот между начальной и конечной точками
// участка.

// Туристическая компания предлагает на выбор несколько трасс на одной горной цепи. Александр из-за
// финансовых трудностей может выбрать для поездки только одну из этих трасс. Вы решили помочь ему
// с выбором. Александру важно для каждой трассы определить суммарную высоту подъемов на ней.
// Обратите внимание, что трасса может идти как слева-направо, так и справа-налево.

// Формат ввода
// В первой строке входного файла содержится единственное число N — количество точек ломаной,
// задающей горную цепь (1 ≤ N ≤ 30 000). Далее в N строках содержатся описания точек, каждое из
// которых состоит из двух целых чисел, xi и yi (1 ≤ xi, yi ≤ 30 000).

// В следующей строке находится число M — количество трасс (1 ≤ M ≤ 30 000).

// Далее в M строках содержатся описания трасс. Каждое описание представляет собой два целых числа,
// si и fi, они обозначают номера вершин начала и конца трассы, соответственно (1 ≤ si ≤ N,
// 1 ≤ fi ≤ N). Начало и конец трассы могут совпадать.

// Гарантируется, что во входном файле задана именно горная цепь.

// Формат вывода
// Для каждой трассы выведите одно число — суммарную высоту подъемов на данной трассе.

import fs from 'fs';

function inputProcessing(lines) {
  const N = Number(lines[0]);
  const waysCount = Number(lines[N + 1]);

  const segments = lines.slice(1, N).map((xy) => xy.split(' ').map(Number));

  const ways = new Array(waysCount)
    .fill(0)
    .map((_, i) => lines[N + 1 + 1 * (i + 1)].split(' ').map(Number));

  console.log({ N, waysCount, segments, ways });
  // let setsCount = 0;
  // let leftIndex = 0;
  // let sum = 0;

  // for (let rightIndex = 0; rightIndex < N; rightIndex++) {
  //   sum += nums[rightIndex];

  //   while (sum > K && leftIndex <= rightIndex) {
  //     sum -= nums[leftIndex];
  //     leftIndex += 1;
  //   }

  //   if (sum === K) {
  //     setsCount += 1;
  //   }
  // }

  // return setsCount;
}

(async () => {
  // const inputLines = await input(1);
  const inputLines = fs.readFileSync('input.txt', 'utf8').split('\r\n');
  // const inputLines = ['3', 'Hello Hi', 'Bye Goodbye', 'List Array', 'Goodbye'];
  // const inputLines = input;
  console.log({ inputLines });
  const outputLines = inputProcessing(inputLines);
  console.log({ outputLines });
  // output(outputLines);
})();

export default inputProcessing;
