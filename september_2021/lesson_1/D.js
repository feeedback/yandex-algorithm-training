/**
 * "D. Строительство школы" {@link "https://contest.yandex.ru/contest/28730/problems/D/}
 *
 * @param { number } studentsCount количество учеников (0 < N < 100001)
 * @param { Array<number> } studentsHomeCoordArr идут в строго возрастающем порядке координаты домов учеников — целые числа,
 *  не превосходящие 2×10^9 по модулю.
 *
 *  @return { number } Выведите одно целое число — координату точки, в которой лучше всего построить школу.
 *  Если ответов несколько, выведите любой из них.
 */
function calcBetterCoordForBuildSchool(studentsCount, studentsHomeCoordArr) {
  const lowMiddle = Math.floor((studentsCount - 1) / 2);
  const highMiddle = Math.ceil((studentsCount - 1) / 2);
  const median = (studentsHomeCoordArr[lowMiddle] + studentsHomeCoordArr[highMiddle]) / 2;

  return Math.round(median);
}

// eslint-disable-next-line no-unused-vars
function inputProcessing(lines) {
  const studentsCount = Number(lines[0]);
  const studentsHomeCoordAr = lines[1].split(' ').map(Number);

  return calcBetterCoordForBuildSchool(studentsCount, studentsHomeCoordAr);
}
// inputProcessing([5, '-9 -1 8 9 10']);
export default inputProcessing;
