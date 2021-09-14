const getDist = (a, b) => Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2);
const getVector = (a, b) => ({ x: a.x - b.x, y: a.y - b.y });

const isParallelogram = (a, b, c, d) => {
  const length = {
    ab: getDist(b, a),
    cd: getDist(d, c),
    bc: getDist(c, b),
    da: getDist(a, d),
  };
  const vector = {
    ab: getVector(b, a),
    cd: getVector(d, c),
    bc: getVector(c, b),
    da: getVector(a, d),
  };

  return (
    length.ab === length.cd &&
    length.bc === length.da &&
    vector.ab.x * vector.cd.y === vector.ab.y * vector.cd.x &&
    vector.bc.x * vector.da.y === vector.bc.y * vector.da.x
  );
};

/**
 * "B. Параллелограмм" {@link "https://contest.yandex.ru/contest/28724/problems/B/}
 *
 * Гарантируется, что четыре точки, о которых идет речь в одном вопросе, не лежат на одной прямой.
 *
 * @param { Array<{ x:number, y:number }> } coords (a,b,c,d) четыре точки - два целых числа X и Y
 * (−100 ≤ X ≤ 100, −100 ≤ Y ≤ 100), обозначающих координаты точки.
 *
 * @return { Array<"YES"|"NO"> } Для каждого из вопросов выведите "YES", если четыре заданные точки
 * могут образовать параллелограмм, и "NO" в противном случае. Ответ на каждый из запросов должен
 * быть в отдельной строке без кавычек.
 */
function isParallelogramExistByCoords(coords) {
  for (let i = 0; i < 4; i++) {
    for (let j = i; j < 4; j++) {
      const newCoords = coords.slice();
      const temp = newCoords[i];
      newCoords[i] = newCoords[j];
      newCoords[j] = temp;

      if (isParallelogram(...newCoords)) {
        return 'YES';
      }
    }
  }

  return 'NO';
}

function inputProcessing(lines) {
  const count = lines[0];
  const result = [];

  for (let i = 1; i <= count; i++) {
    const pointsRaw = lines[i].split(/\s+/).map(Number);
    const points = [];

    for (let n = 0; n < pointsRaw.length; n += 2) {
      const point = { x: pointsRaw[n], y: pointsRaw[n + 1] };
      points.push(point);
    }

    result.push(isParallelogramExistByCoords(points));
  }

  return result;
}

export default inputProcessing;
