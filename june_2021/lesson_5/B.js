// https://contest.yandex.ru/contest/27794/problems/B

// Вася очень любит везде искать своё счастливое число K . Каждый день он ходит в школу по улице,
// вдоль которой припарковано N машин. Он заинтересовался вопросом, сколько существует наборов
// машин, стоящих подряд на местах с L до R, что сумма их номеров равна K . Помогите Васе узнать
// ответ на его вопрос.

// Например, если число N = 5, K = 17, а номера машин равны 17, 7, 10, 7, 10,
// то существует 4 набора машин:
//   17 (L = 1, R = 1),
//   7, 10 (L = 2, R = 3),
//   10, 7 (L = 3, R = 4),
//   7, 10 (L = 4, R = 5)

// Формат ввода
// В первой строке входных данных задаются числа N и K (1 ≤ N ≤ 100000, 1 ≤ K ≤ 10^9).
// Во второй строке содержится N чисел, задающих номера машин. Номера машин могут принимать
// значения от 1 до 999 включительно.

// Формат вывода
// Необходимо вывести одно число — количество наборов.

// import fs from 'fs';

function inputProcessing(lines) {
  //  сколько существует наборов машин, СТОЯЩИХ ПОДРЯД! номера которых составляют K
  const [N, K] = lines[0].split(' ').map(Number); //  N и K (1 ≤ N ≤ 100000, 1 ≤ K ≤ 10^9)
  const nums = lines[1].split(' ').map(Number);

  let setsCount = 0;
  let leftIndex = 0;
  let sum = 0;

  for (let rightIndex = 0; rightIndex < N; rightIndex++) {
    sum += nums[rightIndex];

    while (sum > K && leftIndex <= rightIndex) {
      sum -= nums[leftIndex];
      leftIndex += 1;
    }

    if (sum === K) {
      setsCount += 1;
    }
  }

  return setsCount;
}

// (async () => {
//   // const inputLines = await input(1);
//   const inputLines = fs.readFileSync('input.txt', 'utf8').split('\r\n');
//   // const inputLines = ['3', 'Hello Hi', 'Bye Goodbye', 'List Array', 'Goodbye'];
//   // const inputLines = input;
//   console.log({ inputLines });
//   const outputLines = inputProcessing(inputLines);
//   console.log({ outputLines });
//   // output(outputLines);
// })();

export default inputProcessing;
