/**
 * "C. Изготовление палиндромов" {@link "https://contest.yandex.ru/contest/28738/problems/C/}
 *
 * @param { string } str непустая строка, состоящую из строчных латинских букв. Длина строки не превосходит 10^4
 *
 * @return { number } минимальное количество символов заменив которые строка станет палиндромом
 */
function calcCountMinCharsReplaceToBePalindrome(str) {
  const chars = str.split('');
  const maxIndex = chars.length - 1;

  let minCountCharReplaced = 0;

  for (let i = 0; i < chars.length / 2; i += 1) {
    const indexOppositeSide = maxIndex - i;

    if (chars[i] === chars[indexOppositeSide]) {
      continue;
    }

    minCountCharReplaced += 1;

    if (chars[i] < chars[indexOppositeSide]) {
      chars[indexOppositeSide] = chars[i];
    } else {
      chars[i] = chars[indexOppositeSide];
    }
  }

  return minCountCharReplaced;
}

function inputProcessing(lines) {
  return calcCountMinCharsReplaceToBePalindrome(lines[0]);
}

export default inputProcessing;

// function isPalindromeCheck(str) {
//   for (let i = 0; i < str.length / 2; i++) {
//     if (str[i] !== str[str.length - i - 1])   return false;
//   }
//   return true;
// }
