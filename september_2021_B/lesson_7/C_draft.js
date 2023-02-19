/**
 * @todo DRAFT version, solution not ready
 *
 * "C. Минимальное покрытие" {@link "https://contest.yandex.ru/contest/29396/problems/C/}
 *
 * На прямой задано некоторое множество отрезков с целочисленными координатами концов [Li, Ri].
 * Выберите среди данного множества подмножество отрезков, целиком покрывающее отрезок [0, M], (M —
 * натуральное число), содержащее наименьшее число отрезков.
 *
 * @param { number } querySize - длина требуемого отрезка [0, M]  (1 ≤ M ≤ 5000)
 * @param { Array<number> } segments - Li и Ri (Li, Ri ≤ 50000). Список завершается парой нулей.
 * Общее число отрезков не превышает 100 000
 *
 * @return { number } В первой строке выходного файла выведите минимальное число отрезков,
 * необходимое для покрытия отрезка [0; M].
 * Далее выведите список покрывающего подмножества, упорядоченный по возрастанию координат левых
 * концов отрезков. Список отрезков выводится в том же формате, что и во входе. Завершающие два
 * нуля выводить не нужно.
 * Если покрытие отрезка [0, M] исходным множеством отрезков [Li, Ri] невозможно, то следует
 * вывести единственную фразу “No solution”.
 */
function minCountSegmentsCoverQuerySegment22(querySize, segments) {
  const EVENT_TYPE = { begin: 'BEGIN', end: 'END' };
  const EVENT_TYPE_ORDER = { [EVENT_TYPE.end]: 0, [EVENT_TYPE.begin]: 1 }; // сначала завершение
  const events = [];

  for (let i = 0; i < segments.length; i++) {
    const [begin, end] = segments[i];

    events.push({ time: begin, type: EVENT_TYPE.begin, size: end - begin + 1 });
    events.push({ time: end, type: EVENT_TYPE.end, size: end - begin + 1 });
  }

  events.sort((prev, next) => prev.time - next.time || EVENT_TYPE_ORDER[prev.type] - EVENT_TYPE_ORDER[next.type]);

  console.log({ querySize, events });

  let nowCount = 0;
  let minCount = segments.length + 1;

  let nowSize = 0;
  // В ЭТОЙ ЗАДАЧЕ ВАЖНО ПОЛОЖЕНИЕ, А НЕ ТОЛЬКО ДЛИНА ЗАНИМАЕМОГО ОТРЕЗКА

  for (let i = 0; i < events.length; i++) {
    console.log({ i, nowSize, minCount });
    // if (i !== nowCount > 0) {
    //   atLeastOneLength += events[i].time - events[i - 1].time;
    // }

    if (events[i].type === EVENT_TYPE.end) {
      nowSize -= events[i].size;
      nowCount -= 1;
    } else if (events[i].type === EVENT_TYPE.begin) {
      nowSize += events[i].size;
      nowCount += 1;
    }

    if (nowSize === querySize) {
      minCount = Math.min(minCount, nowCount);
    }
    console.log({ i, nowSize, minCount });
  }

  return minCount;
}

const minCountSegmentsCoverQuerySegment = (querySize, segments = []) => {
  let cursorCurrentRight = 0;
  let cursorNextRight = 0;

  let currentSegment = segments[0];
  const result = [];

  for (const segment of segments) {
    const [left, right] = segment;

    if (left > cursorCurrentRight) {
      result.push(currentSegment);

      cursorCurrentRight = cursorNextRight;

      if (cursorCurrentRight >= querySize) {
        break;
      }
    }

    if (left <= cursorCurrentRight && right > cursorNextRight) {
      cursorNextRight = right;
      currentSegment = segment;
    }
  }

  if (cursorCurrentRight < querySize) {
    cursorCurrentRight = cursorNextRight;
    result.push(currentSegment);
  }

  if (cursorCurrentRight < querySize) {
    return 'No solution';
  }
  return [String(result.length), ...result.map((lr) => lr.join(' '))];
};

function inputProcessing(lines) {
  const querySize = Number(lines[0]);
  const segmentsLR = lines.slice(1, -1).map((lr) => lr.split(' ').map(Number));

  return minCountSegmentsCoverQuerySegment(querySize, segmentsLR);
}

export default inputProcessing;
