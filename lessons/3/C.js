// https://contest.yandex.ru/contest/27663/problems/C

// Аня и Боря любят играть в разноцветные кубики, причем у каждого из них свой набор и в каждом наборе все кубики различны по цвету.
// Однажды дети заинтересовались, сколько существуют цветов таких, что кубики каждого цвета присутствуют в обоих наборах.
// Для этого они занумеровали все цвета случайными числами.
// На этом их энтузиазм иссяк, поэтому вам предлагается помочь им в оставшейся части.
// Номер любого цвета — это целое число в пределах от 0 до 10^9.

// Формат ввода
// В первой строке входного файла записаны числа N и M — количество кубиков у Ани и Бори соответственно.
// В следующих N строках заданы номера цветов кубиков Ани.
// В последних M строках номера цветов кубиков Бори.

// Формат вывода
// Выведите сначала количество,
//   а затем отсортированные по возрастанию номера цветов таких, что кубики каждого цвета есть в обоих наборах,

// затем количество
//   и отсортированные по возрастанию номера остальных цветов у Ани,
// потом количество
//   и отсортированные по возрастанию номера остальных цветов у Бори.

function inputProcessing(lines) {
  // eslint-disable-next-line no-unused-vars
  const [N, M] = lines[0].split(' ').map(Number);
  const set1 = new Set(lines.slice(1, N + 1).map(Number));
  const set2 = new Set(lines.slice(1 + N).map(Number));

  const intersection = [];
  const tail1 = [];
  const tail2 = [];

  for (const num of set1) {
    if (set2.has(num)) {
      intersection.push(num);
    } else {
      tail1.push(num);
    }
  }
  for (const num of set2) {
    if (!set1.has(num)) {
      tail2.push(num);
    }
  }

  return [
    intersection.length,
    intersection.sort((a, b) => a - b).join(' '),
    tail1.length,
    tail1.sort((a, b) => a - b).join(' '),
    tail2.length,
    tail2.sort((a, b) => a - b).join(' '),
  ];
}

(async () => {
  // const inputLines = await input(1);
  // const inputLines = ['4 3', '0', '1', '10', '9', '1', '3', '0'];
  // const inputLines = ['2 2', '1', '2', '2', '3'];
  const inputLines = ['0 0'];

  console.log({ inputLines });
  const outputLines = inputProcessing(inputLines);
  console.log({ outputLines });
  // output(outputLines);
})();

export default inputProcessing;
