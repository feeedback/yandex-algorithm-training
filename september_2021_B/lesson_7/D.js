/**
 * "D. Наполненность котятами" {@link "https://contest.yandex.ru/contest/29396/problems/D/}
 *
 * На прямой в точках a1,a2,…,an (возможно, совпадающих) сидят n котят. На той же прямой лежат m
 * отрезков [l1,r1],[l2,r2],…,[lm,rm]. Нужно для каждого отрезка узнать его наполненность котятами
 * — сколько котят сидит на отрезке.
 *
 * @param { number } catsCount - n (1 ≤ n ≤ 10^5)
 * @param { number } segmentsCount -  m (1 ≤ m ≤ 10^5)
 * @param { Array<number> } catsPoints n целых чисел ai (0 ≤ ai ≤ 10^9)
 * @param { Array<[number, number]> } segments m пар целых чисел li,ri (0 ≤ li ≤ ri ≤ 10^9)
 *
 * @return { Array<number> } Выведите m целых чисел. i-е число — наполненность котятами i-го отрезка
 */
function getCountPointByEverySegments(
  catsCount,
  segmentsCount,
  catsPoints,
  segments
) {
  const EVENT_TYPE = { begin: 'BEGIN', end: 'END', cat: 'CAT' };
  const EVENT_TYPE_ORDER = {
    [EVENT_TYPE.begin]: -1,
    [EVENT_TYPE.cat]: 0,
    [EVENT_TYPE.end]: 1,
  };
  const events = [];
  const linesCatCounts = new Array(segmentsCount).fill(0);

  for (let i = 0; i < catsCount; i++) {
    events.push({ time: catsPoints[i], type: EVENT_TYPE.cat });
  }
  for (let i = 0; i < segmentsCount; i++) {
    const [begin, end] = segments[i];
    events.push({ time: begin, type: EVENT_TYPE.begin, lineIndex: i });
    events.push({ time: end, type: EVENT_TYPE.end, lineIndex: i });
  }

  events.sort(
    (prev, next) =>
      prev.time - next.time ||
      EVENT_TYPE_ORDER[prev.type] - EVENT_TYPE_ORDER[next.type]
  );

  let nowCountCat = 0;

  for (let i = 0; i < events.length; i++) {
    switch (events[i].type) {
      case EVENT_TYPE.begin:
        linesCatCounts[events[i].lineIndex] = nowCountCat;
        break;
      case EVENT_TYPE.end:
        linesCatCounts[events[i].lineIndex] =
          nowCountCat - linesCatCounts[events[i].lineIndex];
        break;
      case EVENT_TYPE.cat:
        nowCountCat += 1;
        break;
    }
  }

  return linesCatCounts;
}

function inputProcessing(lines) {
  const [catsCount, segmentsCount] = lines[0].split(' ').map(Number);
  const catsPoints = lines[1].split(' ').map(Number);
  const segmentsLR = lines.slice(2).map((lr) => lr.split(' ').map(Number));

  return getCountPointByEverySegments(
    catsCount,
    segmentsCount,
    catsPoints,
    segmentsLR
  );
}

export default inputProcessing;
