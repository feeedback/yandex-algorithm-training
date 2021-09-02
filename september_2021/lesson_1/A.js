/**
 * "A. Interactor" {@link https://contest.yandex.ru/contest/28730/problems/A/}
 *
 * @param { number } exitCode (−128≤r≤127) — код завершения задачи,
 * @param { number } verdictI (0≤i≤7) — вердикт интерактора,
 * @param { number } verdictC (0≤c≤7) — вердикт чекера.
 *
 * @return { number } одно целое число от 0<=r<=7 — итоговый вердикт системы.
 */
function checkSystem(exitCode, verdictI, verdictC) {
  // Если интерактор выдал вердикт 0, итоговый вердикт равен 3 в случае,
  //    если программа завершилась с ненулевым кодом, и вердикту чекера в противном случае.
  // Если интерактор выдал вердикт 1, итоговый вердикт равен вердикту чекера.
  // Если интерактор выдал вердикт 4, итоговый вердикт равен 3 в случае,
  //     если программа завершилась с ненулевым кодом, и 4 в противном случае.
  // Если интерактор выдал вердикт 6, итоговый вердикт равен 0.
  // Если интерактор выдал вердикт 7, итоговый вердикт равен 1.
  // В остальных случаях итоговый вердикт равен вердикту интерактора.

  const mapVerdictItoFnResult = {
    0: (code, c) => (code !== 0 ? 3 : c),
    4: (code, c) => (code !== 0 ? 3 : 4),
    1: (code, c) => c,
    6: (code, c) => 0,
    7: (code, c) => 1,
  };

  if (mapVerdictItoFnResult[verdictI]) {
    return mapVerdictItoFnResult[verdictI](exitCode, verdictC);
  }

  return verdictI;
}

function inputProcessing(lines) {
  const [exitCode, verdictI, verdictC] = lines.map(Number);

  return checkSystem(exitCode, verdictI, verdictC);
}

export default inputProcessing;
