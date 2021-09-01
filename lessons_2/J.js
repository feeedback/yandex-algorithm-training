// https://contest.yandex.ru/contest/27472/problems/J/

// Вам Максим показал запись, в которой приведена последовательность частот, выставляемых им на тюнере, и про каждую ноту,
// начиная со второй, записано — ближе или дальше она к звуку треугольника, чем предыдущая нота.
// Заранее известно, что частота звучания треугольника Максима составляет не менее 30 герц и не более 4000 герц.
//
// Требуется написать программу, которая определяет, в каком интервале может находиться частота звучания треугольника.

// Формат ввода
// Первая строка входного файла содержит целое число n — количество нот, которые воспроизводил Максим с помощью тюнера (2 ≤ n ≤ 1000).
// Последующие n строк содержат записи Максима, причём каждая строка содержит две компоненты:
// вещественное число fi — частоту,
// выставленную на тюнере, в герцах(30 ≤ fi ≤ 4000), и слово «closer» или слово «further» для каждой частоты, кроме первой.

// Слово «closer» означает, что частота данной ноты ближе к частоте звучания треугольника, чем частота предыдущей ноты,
// что формально описывается соотношением: | fi − ftriangle | < | fi − 1 − ftriangle | .

// Слово «further» означает, что частота данной ноты дальше, чем предыдущая.

// Если оказалось, что очередная нота так же близка к звуку треугольника, как и предыдущая нота,
// то Максим мог записать любое из двух указанных выше слов.

// Гарантируется, что результаты, полученные Максимом, непротиворечивы.

// Формат вывода
// В выходной файл необходимо вывести через пробел два вещественных числа —
// наименьшее и наибольшее возможное значение частоты звучания треугольника, изготовленного Максимом.
// Числа должны быть выведены с точностью не хуже 10−6.

function inputProcessing(lines) {
  // eslint-disable-next-line no-unused-vars
  const [n, firstMeasurementRaw, ...measurement] = lines;
  const nums = measurement.map((str) => {
    const [num, hotOrCold] = str.split(' ');
    return [Number(num), hotOrCold];
  }); // х(30 ≤ fi ≤ 4000)

  let min = 30;
  let max = 4000;
  let lastMeasure = Number(firstMeasurementRaw);

  // console.log({ n, lastMeasure, min, max }, nums);

  for (const [current, hotOrCold] of nums) {
    if (hotOrCold === 'further') {
      if (current > lastMeasure) {
        max = Math.min(max, (current - lastMeasure) / 2 + lastMeasure);
      } else {
        min = Math.max(min, (current - lastMeasure) / 2 + lastMeasure);
      }
    } else if (hotOrCold === 'closer') {
      if (current > lastMeasure) {
        min = Math.max(min, (current - lastMeasure) / 2 + lastMeasure);
      } else {
        max = Math.min(max, (current - lastMeasure) / 2 + lastMeasure);
      }
    }

    lastMeasure = current;
  }
  // console.log({ n, lastMeasure, min, max }, nums);
  return [min, max].join(' ');
}

(async () => {
  // const inputLines = ['3 2 2', '1 1', '2 2'];
  const inputLines = ['4', '554', '880 further', '440 closer', '622 closer'];
  console.log({ inputLines });

  const outputLines = inputProcessing(inputLines);
  console.log({ outputLines });
})();

export default inputProcessing;
