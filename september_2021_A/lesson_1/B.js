import drawFigureMain from './draw-polygon-canvas.js';

const getDist = (a, b) => Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2);
const getVector = (a, b) => ({ x: Math.abs(a.x - b.x), y: Math.abs(a.y - b.y) });

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
    vector.ab.x === vector.cd.x &&
    vector.ab.y === vector.cd.y &&
    vector.bc.x === vector.da.x &&
    vector.bc.y === vector.da.y
  );
};

/**
 * "B. Параллелограмм" {@link "https://contest.yandex.ru/contest/28724/problems/B/}
 *
 * Гарантируется, что четыре точки, о которых идет речь в одном вопросе, не лежат на одной прямой.
 *
 * @param { { x:number, y:number } } a два целых числа X и Y (−100 ≤ X ≤ 100, −100 ≤ Y ≤ 100), обозначающих координаты точки.
 * @param { { x:number, y:number } } b
 * @param { { x:number, y:number } } c
 * @param { { x:number, y:number } } d
 *
 * @return { Array<"YES"|"NO"> } Для каждого из вопросов выведите "YES", если четыре заданные точки
 * могут образовать параллелограмм, и "NO" в противном случае. Ответ на каждый из запросов должен
 * быть в отдельной строке без кавычек.
 */
function isParallelogramExistByCoords(a, b, c, d) {
  const coords = [a, b, c, d];
  const coordsAll = [];
  for (let i = 0; i < 4; i++) {
    for (let j = i; j < 4; j++) {
      const newCoords = coords.slice();
      const temp = newCoords[i];
      newCoords[i] = newCoords[j];
      newCoords[j] = temp;
      coordsAll.push(newCoords);
      if (isParallelogram(...newCoords)) {
        drawFigureMain(coordsAll);
        return 'YES';
      }
    }
  }

  drawFigureMain(coordsAll);
  return 'NO';
}

function inputProcessing(lines) {
  const count = lines[0];
  const result = [];

  for (let i = 1; i <= count; i++) {
    const [aX, aY, bX, bY, cX, cY, dX, dY] = lines[i].split(/\s+/).map(Number);

    result.push(
      isParallelogramExistByCoords({ x: aX, y: aY }, { x: bX, y: bY }, { x: cX, y: cY }, { x: dX, y: dY })
    );
  }

  return result;
}

export default inputProcessing;
