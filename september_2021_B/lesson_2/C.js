/**
 * "C. Изготовление палиндромов" {@link "https://contest.yandex.ru/contest/28738/problems/C/}
 *
 * @param { string } str непустая строка, состоящую из строчных латинских букв. Длина строки не превосходит 10^4
 *
 * @return { number } минимальное количество символов заменив которые строка станет палиндромом
 */
function calcCountMinCharsReplaceToBePalindrome(str) {
  const maxIndex = str.length - 1;
  let charsNeedReplaceCount = 0;

  for (let i = 0; i < str.length / 2; i += 1) {
    if (str[i] !== str[maxIndex - i]) {
      charsNeedReplaceCount += 1;
    }
  }

  return charsNeedReplaceCount;
}

function inputProcessing(lines) {
  return calcCountMinCharsReplaceToBePalindrome(lines[0]);
}

export default inputProcessing;
