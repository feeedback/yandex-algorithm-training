/**
 * "B. Кольцевая линия метро" {@link "https://contest.yandex.ru/contest/28730/problems/B/}
 *
 * @param { number } stationN (1<=100) общее количество станций кольцевой линии
 * @param { number } start N станции, на которой он должен войти.
 * @param { number } finish N станции, на которой он должен выйти. Числа i и j не совпадают.
 *
 * @return { number } минимальное количество промежуточных станций (не считая станции посадки и высадки), которые необходимо проехать
 */
function calcMinStation(stationN, start, finish) {
  // Можно ехать в обе стороны и через конец проезжать в начало и наоборот
  if (finish < start) {
    return Math.min(start - finish, stationN - start + finish) - 1;
  }
  return Math.min(finish - start, stationN - finish + start) - 1;
}

// eslint-disable-next-line no-unused-vars
function inputProcessing(lines) {
  const [stationN, start, finish] = lines[0].split(' ').map(Number);

  return calcMinStation(stationN, start, finish);
}

export default inputProcessing;
