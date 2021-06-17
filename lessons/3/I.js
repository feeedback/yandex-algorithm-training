// https://contest.yandex.ru/contest/27663/problems/I/

// Каждый из N школьников некоторой школы знает Mi языков. Определите, какие языки знают все
// школьники и языки, которые знает хотя бы один из школьников.

// Формат ввода Первая строка входных данных содержит количество школьников N. Далее идет N чисел M,
// после каждого из чисел идет Mi строк, содержащих названия языков, которые знает i-й
// школьник. Длина названий языков не превышает 1000 символов, количество различных языков не более
// 1000. 1 ≤ N ≤ 1000, 1 ≤ Mi ≤ 500.

// Формат вывода В первой строке выведите количество языков, которые знают все школьники. Начиная
// со второй строки - список таких языков. Затем - количество языков, которые знает хотя бы один
// школьник, на следующих строках - список таких языков.

function inputProcessing(lines) {
  const [, ...birdsXYRaw] = lines;
  // const N = Number(NRaw); // N (1 ≤ N ≤ 1000)

  const birdsXY = birdsXYRaw.map((xy) => xy.split(' ').map(Number));

  return new Set(birdsXY.map(([x]) => x)).size;
}

(async () => {
  const inputLines = ['6', '1 1', '2 2', '3 3', '2 1', '3 2', '3 1'];
  // const inputLines = [6, '1 1', '2 2', '3 3', '2 1', '3 2', '3 4'];
  console.log({ inputLines });

  const outputLines = inputProcessing(inputLines);
  console.log({ outputLines });
})();

export default inputProcessing;
