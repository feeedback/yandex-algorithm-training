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

// import { input, output } from '../../input-output.js';

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

(async () => {
  // const inputLines = await input(1);
  const inputLines = ['30 5 7'];
  console.log({ inputLines });
  const outputLines = inputProcessing(inputLines);
  console.log({ outputLines });
  // output(outputLines);
})();

export default inputProcessing;
