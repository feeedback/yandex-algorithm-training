// На некоторых кросс-платформенных станциях метро (как, например, «Третьяковская») на разные стороны платформы приходят поезда разных направлений.
// Таня договорилась встретиться с подругой на такой станции,
//   но поскольку подруга приехала из другого часового пояса, то из - за джетлага сильно проспала, и Тане пришлось долго её ждать.
// Поезда всегда ходят точно по расписанию, и Таня знает, что поезд стоит на платформе ровно одну минуту,
//   а интервал между поездами(время, в течение которого поезда у платформы нет) составляет
// a минут для поездов на первом пути и b минут для поездов на втором пути.То есть на первый путь приезжает поезд и стоит одну минуту,
//   затем в течение a минут поезда у платформы нет, затем в течение одной минуты у платформы стоит следующий поезд и т.д.

// Пока Таня стояла на платформе, она насчитала n поездов на первом пути и m поездов на втором пути.
// Определите минимальное и максимальное время, которое Таня могла провести на платформе, или сообщите, что она точно сбилась со счёта.

// Все поезда, которые видела Таня, она наблюдала в течение всей минуты,
// то есть Таня не приходит и не уходит с платформы посередине той минуты, когда поезд стоит на платформе.

// Формат ввода
// Первая строка входных данных содержит число a — интервал между поездами на первом пути.
// Вторая строка содержит число b — интервал между поездами на втором пути.
// Третья строка содержит число n — количество поездов на первом пути, которые увидела Таня.
// Четвёртая строка содержит число m — количество поездов на втором пути, которые увидела Таня.
// Все числа — целые, от 1 до 1000.

// Формат вывода
// Программа должна вывести два числа: минимальное и максимальное время в минутах,
// которое Таня могла стоять на платформе, или одно число - 1, если Таня точно ошиблась.

// import { input, output } from '../../input-output_dev.js';

// https://contest.yandex.ru/contest/27393/problems/H/

function inputProcessing(lines) {
  const getMinTimeGeneral = (timeOnStation, timeInWay, n) =>
    timeOnStation * n + timeInWay * (n - 1);
  const getMaxTimeGeneral = (timeOnStation, timeInWay, n) =>
    getMinTimeGeneral(timeOnStation, timeInWay, n) + timeInWay * 2;
  // const getMaxTimeGeneral = (timeOnStation, timeInWay, n) =>
  //   timeOnStation * n + timeInWay * (n - 1) + timeInWay * 2;

  const TIME_TRAIN_AT_STATION = 1;
  // const getMinTime = (timeInWay, n) => getMinTimeGeneral(timeTrainAtStation, timeInWay, n);
  const getMinTime = getMinTimeGeneral.bind(null, TIME_TRAIN_AT_STATION);
  const getMaxTime = getMaxTimeGeneral.bind(null, TIME_TRAIN_AT_STATION);

  const [
    interval1, // a — интервал между поездами на первом пути.
    interval2, // b — интервал между поездами на втором пути.
    n1, //  n — количество поездов на первом пути, которые увидела Таня.
    n2, //  m — количество поездов на втором пути, которые увидела Таня
  ] = lines.map(Number);

  // [1, intervalTrainWay1, 1, intervalTrainWay1, ...]
  // [1, intervalTrainWay2, 1, intervalTrainWay2, ...]
  const [min1, max1] = [getMinTime(interval1, n1), getMaxTime(interval1, n1)];
  const [min2, max2] = [getMinTime(interval2, n2), getMaxTime(interval2, n2)];
  console.log({ 1: [min1, max1], 2: [min2, max2] });
  if (min1 > max2 || min2 > max1) {
    return -1;
  }
  return [Math.max(min1, min2), Math.min(max1, max2)];
}

(async () => {
  // const inputLines = await input(1);
  const inputLines = [3, 2, 7, 11];
  // const inputLines = [1, 5, 1, 2]; -1
  console.log({ inputLines });
  const outputLines = inputProcessing(inputLines);
  console.log({ outputLines });
  console.log({ EXPECT: ['?'] });
  // output(outputLines);
})();
export default inputProcessing;
