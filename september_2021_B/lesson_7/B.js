/**
 * "B. Таможня" {@link "https://contest.yandex.ru/contest/29396/problems/B/}
 *
 * ...какое минимальное количество аппаратов необходимо заказать на заводе, если на одном аппарате
 * может одновременно обрабатываться только один груз
 *
 * @param { number } n длина массива (0 ≤ N ≤ 50 000)
 * @param { Array<number> } segments - Ti и Li – время прибытия соответствующего груза и время,
 * требуемое для его обработки (1 ≤ Ti ≤ 10^6, 1 ≤ Li ≤ 10^6).
 *
 * @return { number } Вывести одно число - наименьшее количество аппаратов
 */
function lengthWhenWasAtLeastOne(n, segments) {
  const EVENT_TYPE = { begin: 0, end: -1 }; // сначала освобождение аппарата
  const events = [];

  for (let i = 0; i < n; i++) {
    const [begin, duration] = segments[i];

    events.push({ time: begin, type: EVENT_TYPE.begin });
    events.push({ time: begin + duration, type: EVENT_TYPE.end });
  }

  events.sort((prev, next) => prev.time - next.time || prev.type - next.type);
  console.log({ events });
  let nowCount = 0;
  let max = 0;

  for (let i = 0; i < n * 2; i++) {
    if (events[i].type === EVENT_TYPE.begin) {
      nowCount += 1;
    } else if (events[i].type === EVENT_TYPE.end) {
      nowCount -= 1;
    }

    max = Math.max(max, nowCount);
  }

  return max;
}

function inputProcessing(lines) {
  const n = Number(lines[0]);
  const segmentsLR = lines.slice(1).map((lr) => lr.split(' ').map(Number));

  return lengthWhenWasAtLeastOne(n, segmentsLR);
}

export default inputProcessing;
