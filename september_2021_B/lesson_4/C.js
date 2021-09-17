/**
 * "C. Частотный анализ" {@link "https://contest.yandex.ru/contest/28970/problems/C/}
 *
 * @param { string } text Вводится текст.
 *
 * @return { string[] } Выведите все слова, встречающиеся в тексте, по одному на каждую строку.
 * Слова должны быть отсортированы по убыванию их количества появления в тексте, а при одинаковой
 * частоте появления — в лексикографическом порядке.
 */
function frequencyAnalysis(text) {
  const colorsSums = new Map();
  const words = text.split(' ');

  for (const word of words) {
    colorsSums.set(word, (colorsSums.get(word) || 0) + 1);
  }

  return [...colorsSums]
    .sort(([a, countA], [b, countB]) => countB - countA || a.localeCompare(b))
    .map(([word]) => word);
}

function inputProcessing(lines) {
  const text = lines.join(' ');

  return frequencyAnalysis(text);
}

export default inputProcessing;
