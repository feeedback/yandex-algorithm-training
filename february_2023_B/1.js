const calcCharsOccurrence = (str) => {
  const mapCharToCounts = {};

  for (const char of str) {
    if (!/\s/.test(char)) {
      mapCharToCounts[char] = (mapCharToCounts[char] ?? 0) + 1;
    }
  }
  return mapCharToCounts;
};

const rotateArr270Degree = (input) => {
  const output = [];

  input.forEach((row, i) => {
    row.forEach((cell, j) => {
      output[row.length - j - 1] = output[row.length - j - 1] ?? [];

      output[row.length - j - 1][i] = cell;
    });
  });
  return output;
};
/**
 * "1. Гистограмма" {@link "https://contest.yandex.ru/contest/45468/problems/1}

 * @param { string } inputStr Ввод содержит строчные и прописные латинские буквы, цифры, знаки
 *  препинания («.», «!», «?», «:», «-», «,», «;», «(», «)»), пробелы и переводы строк. Текст
 *  содержит хотя бы один непробельный символ
 *
 * @return { string } Для каждого символа c кроме пробелов и переводов строк выведите столбик из символов «#»,
 *  количество которых должно быть равно количеству символов c в данном тексте. Под каждым
 *  столбиком напишите символ, соответствующий ему. Отформатируйте гистограмму так, чтобы нижние
 *  концы столбиков были на одной строке, первая строка и первый столбец были непустыми.
 *  Отсортируйте столбики в порядке увеличения кодов символов.
 */
function inputProcessing(inputStr) {
  const mapCharToCounts = calcCharsOccurrence(Array.isArray(inputStr) ? inputStr.join('\n') : inputStr);

  const charsCounts = Object.entries(mapCharToCounts).sort((prev, next) => prev[0].charCodeAt() - next[0].charCodeAt());

  const maxCount = Math.max(...charsCounts.map(([, count]) => count));

  const histogram = charsCounts.map(([char, count]) => Array.from(`${char}${'#'.repeat(count)}`.padEnd(maxCount + 1, ' ')));

  const rotatedHistogram = rotateArr270Degree(histogram);

  const histogramTextDraw = rotatedHistogram.map((line) => line.join('')).join('\n');

  return histogramTextDraw;
}

export default inputProcessing;
