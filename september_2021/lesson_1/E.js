const getAreaTriangleByCoords = ({ A: [xA, yA], B: [xB, yB], C: [xC, yC] }) =>
  Math.abs((xB - xA) * (yC - yA) - (xC - xA) * (yB - yA)) / 2;

const distanceBetweenTwoPoint = ([x1, y1], [x2, y2]) => Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

// const getSidesTriangle = ({ A: [xA, yA], B: [xB, yB], C: [xC, yC] }) => {
//   const a = Math.sqrt((xC - xB) ** 2 + (yC - yB) ** 2); // BC
//   const b = Math.sqrt((xC - xA) ** 2 + (yC - yA) ** 2); // AC
//   const c = Math.sqrt((xB - xA) ** 2 + (yB - yA) ** 2); // AB
//   return { a, b, c };
// };
// const getAreaTriangle = ({ a, b, c }) => {
//   const p = (a + b + c) / 2;
//   const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
//   return area;
// };

/**
 * "E. Точка и треугольник" {@link "https://contest.yandex.ru/contest/28730/problems/E}
 *
 * @param { number } cathetus натуральное число d (не превосходящее 1000)
 * @param { [ number, number ] } pointXY координаты точки X – два целых числа из диапазона от ­–1000 до 1000.
 *
 *  @return { 0|1|2|3 } Если точка лежит внутри, на стороне треугольника или совпадает с одной из
 *  вершин, то выведите число 0. Если точка лежит вне треугольника, то выведите номер вершины
 *  треугольника, к которой она расположена ближе всего (1 – к вершине A, 2 – к B, 3 – к C). Если
 *  точка расположена на одинаковом расстоянии от двух вершин, выведите ту вершину, номер которой
 *  меньше.
 */
function calcBetterCoordForBuildSchool(cathetus, pointXY) {
  // Метод сравнения площадей - по формуле Герона находятся площади 3-х треугольников которые
  // образует точка с каждой стороной треугольника, далее находится площадь самого треугольника и
  // сравнивается с суммой 3ех предыдущих треугольников, если суммы равны то значит точка
  // принадлежит треугольнику.

  const triangleVertices = { A: [0, 0], B: [cathetus, 0], C: [0, cathetus] };
  const triangleArea = getAreaTriangleByCoords(triangleVertices);

  const trianglesPointWithSide = [
    { ...triangleVertices, A: pointXY },
    { ...triangleVertices, B: pointXY },
    { ...triangleVertices, C: pointXY },
  ];
  const trianglesPointWithSideAreasSum = trianglesPointWithSide
    .map(getAreaTriangleByCoords)
    .reduce((sum, n) => sum + n, 0);

  if (triangleArea === trianglesPointWithSideAreasSum) {
    return 0;
  }

  const distanceFromPointToTriangleVertices = Object.values(triangleVertices).map((coord) =>
    distanceBetweenTwoPoint(pointXY, coord)
  );
  const minDistanceToVerticesTriangleFromPoint = Math.min(...distanceFromPointToTriangleVertices);

  return distanceFromPointToTriangleVertices.indexOf(minDistanceToVerticesTriangleFromPoint) + 1;
}

// eslint-disable-next-line no-unused-vars
function inputProcessing(lines) {
  const cathetus = Number(lines[0]);
  const pointXY = lines[1].split(' ').map(Number);

  return calcBetterCoordForBuildSchool(cathetus, pointXY);
}
export default inputProcessing;
