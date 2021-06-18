// https://contest.yandex.ru/contest/27665/problems/D

// На региональном этапе Всероссийской олимпиады школьников по информатике в 2009 году предлагалась
// следующая задача.

// Всем известно, что со временем клавиатура изнашивается,и клавиши на ней начинают залипать.
// Конечно, некоторое время такую клавиатуру еще можно использовать, но для нажатий клавиш
// приходиться использовать большую силу.

// При изготовлении клавиатуры изначально для каждой клавиши задается количество нажатий,которое
// она должна выдерживать. Если знать эти величины для используемой клавиатуры,то для определенной
// последовательности нажатых клавиш можно определить,какие клавиши в процессе их использования
// сломаются, а какие — нет.

// Требуется написать программу, определяющую, какие клавиши сломаются в процессе заданного
// варианта эксплуатации клавиатуры.

// Формат ввода
// Первая строка входных данных содержит целое число n (1 ≤ n ≤ 1000) —количество клавиш на
// клавиатуре. Вторая строка содержит n целых чисел —с1, с2, … , сn, где сi (1 ≤ ci ≤ 100000) —
// количество нажатий,выдерживаемых i-ой клавишей. Третья строка содержит целое число k (1 ≤ k ≤
// 100000) — общее количество нажатий клавиш, и последняя строка содержит k целых чисел pj (1 ≤ pj
// ≤ n) — последовательность нажатых клавиш.

// Формат вывода
// Программа должна вывести n строк, содержащих информацию об исправности клавиш.Если i-я клавиша
// сломалась, то i-ая строка должна содержать слово YES,если же клавиша работоспособна — слово NO.

function inputProcessing(lines) {
  // const keysCount = Number(lines[0]);
  const keysResource = lines[1].split(' ').map(Number);
  const clicks = lines[3].split(' ').map(Number);
  const mapKeyIndexToResource = Object.fromEntries(keysResource.map((resource, i) => [i, resource]));

  for (const keyIndex of clicks) {
    mapKeyIndexToResource[keyIndex - 1] -= 1;
  }

  const keysBroken = Object.values(mapKeyIndexToResource).map((resource) => (resource < 0 ? 'YES' : 'NO'));
  return keysBroken;
}

(async () => {
  // const inputLines = await input(1);
  const inputLines = ['5', '1 50 3 4 3', '16', '1 2 3 4 5 1 3 3 4 5 5 5 5 5 4 5'];
  // const inputLines = input;
  console.log({ inputLines });
  const outputLines = inputProcessing(inputLines);
  console.log({ outputLines });
  // output(outputLines);
})();

export default inputProcessing;
