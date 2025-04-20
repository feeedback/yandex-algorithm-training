const _chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

// eslint-disable-next-line no-unused-vars
const drawPlaces = (studentsCount, taskCount, petya, vasya = null) => {
  const arr = new Array(studentsCount)
    .slice(0, 100) // чтобы не рисовать при больших значениях
    .fill(null)
    .map((_, i) => (i % taskCount) + 1);

  const table = _chunk(arr, 2);

  table[petya.y - 1][petya.x - 1] = 'P';
  if (vasya?.x) {
    table[vasya.y - 1][vasya.x - 1] = 'V';
  }

  const maxChar = String(taskCount).length;
  const draw = table
    .map(
      ([left, right]) =>
        `|${`${left}`.padStart(maxChar)}|${`${right ?? ' '}`.padStart(maxChar)}|`
    )
    .join('\n');

  return draw;
};

const intDivision = (a, b) => Math.floor(a / b);

const calcVasyaBestPlace = (
  studentsCount,
  taskCount,
  petyaPlaceY,
  petyaPlaceX
) => {
  const getPlaceNum = ({ y, x }) => y * 2 - (x % 2);

  const getX = (placeNum) => 2 - (placeNum % 2);
  const getY = (placeNum) => intDivision(placeNum, 2) + (placeNum % 2);

  const Petya = { y: petyaPlaceY, x: petyaPlaceX };
  const Vasya = { before: {}, after: {}, best: {} };

  Petya.placeNum = getPlaceNum(Petya);
  Vasya.before.placeNum = Petya.placeNum - taskCount;
  Vasya.after.placeNum = Petya.placeNum + taskCount;

  Vasya.before = {
    ...Vasya.before,
    y: getY(Vasya.before.placeNum),
    x: getX(Vasya.before.placeNum),
    isPlaceValid: Vasya.before.placeNum > 0,
  };

  Vasya.after = {
    ...Vasya.after,
    y: getY(Vasya.after.placeNum),
    x: getX(Vasya.after.placeNum),
    isPlaceValid: Vasya.after.placeNum <= studentsCount,
  };

  Vasya.before.distanceToPetya = Petya.y - Vasya.before.y;
  Vasya.after.distanceToPetya = Vasya.after.y - Petya.y;

  if (!Vasya.after.isPlaceValid && !Vasya.before.isPlaceValid) {
    return '-1';
  }

  if (Vasya.after.isPlaceValid && Vasya.before.isPlaceValid) {
    if (Vasya.after.distanceToPetya > Vasya.before.distanceToPetya) {
      Vasya.best = Vasya.before;
    } else {
      Vasya.best = Vasya.after;
    }
  } else if (Vasya.after.isPlaceValid) {
    Vasya.best = Vasya.after;
  } else if (Vasya.before.isPlaceValid) {
    Vasya.best = Vasya.before;
  }

  return `${Vasya.best.y} ${Vasya.best.x}`;
};

/**
 * "4. Контрольная работа" {@link "https://contest.yandex.ru/contest/45468/problems/4}
 * _____
 * |1|2|
 * |P|1|
 * |2|V|
 * |1|2|
 * |3|
 *
 * Напишите программу, которая подскажет Васе, какой ряд и какое место (справа или слева от
 * учителя) ему следует выбрать. Посадить Васю так, чтобы у него был тот же вариант что и у Пети
 *
 * @param { string[] } lines В первой строке входных данных находится количество учеников в классе
 * 2 ≤ N ≤ 10^9.
 * Во второй строке — количество подготовленных для контрольной вариантов заданий 2 ≤ K ≤ N.
 * В третьей строке — номер ряда, на который уже сел Петя, в четвёртой — цифра 1, если он сел на
 * правое место, и 2, если на левое.
 *
 * @return { number } Если Вася никак не сможет писать тот же вариант, что и Петя, то выведите -1.
 * Если решение существует, то выведите два числа — номер ряда, на который следует сесть Васе, и 1,
 * если ему надо сесть на правое место, или 2, если на левое. Разрешается использовать только
 * первые N мест в порядке раздачи вариантов.
 */
function inputProcessing(lines) {
  const studentsCount = Number(lines[0]);
  const taskCount = Number(lines[1]);
  const petyaPlaceY = Number(lines[2]);
  const petyaPlaceX = Number(lines[3]);

  return calcVasyaBestPlace(studentsCount, taskCount, petyaPlaceY, petyaPlaceX);
}

export default inputProcessing;
