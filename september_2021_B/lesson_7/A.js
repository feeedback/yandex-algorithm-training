/**
 * "A. Закраска прямой" {@link "https://contest.yandex.ru/contest/29396/problems/A/}
 *
 * На числовой прямой окрасили N отрезков. Известны координаты левого и правого концов каждого
 * отрезка (Li и Ri). Найти длину окрашенной части числовой прямой.
 *
 * @param { number } n длина массива (1 ≤ N ≤ 15000)
 * @param { Array<number> } segments - пары Li и Ri (целые числа, -10^9 ≤ Li ≤ Ri ≤ 10^9)
 *
 * @return { number } Вывести одно число - длину окрашенной части прямой.
 */
function lengthWhenWasAtLeastOne(n, segments) {
  const EVENT_TYPE = { begin: 0, end: 1 };
  const events = [];

  for (let i = 0; i < n; i++) {
    const [begin, end] = segments[i];

    events.push({ time: begin, type: EVENT_TYPE.begin });
    events.push({ time: end, type: EVENT_TYPE.end });
  }

  events.sort((prev, next) => prev.time - next.time || prev.type - next.type);

  let nowCount = 0;
  let atLeastOneLength = 0;

  for (let i = 0; i < n * 2; i++) {
    if (nowCount > 0) {
      atLeastOneLength += events[i].time - events[i - 1].time;
    }

    if (events[i].type === EVENT_TYPE.begin) {
      nowCount += 1;
    } else if (events[i].type === EVENT_TYPE.end) {
      nowCount -= 1;
    }
  }

  return atLeastOneLength;
}

function inputProcessing(lines) {
  const n = Number(lines[0]);
  const segmentsLR = lines.slice(1).map((lr) => lr.split(' ').map(Number));

  return lengthWhenWasAtLeastOne(n, segmentsLR);
}

export default inputProcessing;
