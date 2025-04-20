const ALPHABET_LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';

/** complexity - O(n^2) */
const twoPointerAlgorithm = (availableReplaceCount, string, pivotChar) => {
  let replaceCount = 0;
  let maxBeauty = 0;
  const textLength = string.length;

  for (
    let leftIndex = 0, rightIndex = 0;
    leftIndex < textLength;
    leftIndex += 1
  ) {
    while (rightIndex < textLength) {
      if (string[rightIndex] !== pivotChar) {
        if (replaceCount >= availableReplaceCount) {
          break;
        }

        replaceCount += 1;
      }

      rightIndex += 1;
    }

    if (string[leftIndex] !== pivotChar) {
      replaceCount -= 1;
    }

    const currentBeauty = rightIndex - leftIndex;
    if (currentBeauty > maxBeauty) {
      maxBeauty = currentBeauty;
    }

    if (rightIndex === textLength - 1) {
      break;
    }
  }
  return maxBeauty;
};

const maxLengthConsecutiveCharactersAfterXReplace = (
  availableReplaceCount,
  string,
  alphabet = ALPHABET_LOWERCASE
) => {
  let maxBeauty = 0;

  for (
    let alphabetIndex = 0;
    alphabetIndex < alphabet.length;
    alphabetIndex += 1
  ) {
    const pivotChar = alphabet[alphabetIndex];

    const maxBeautyByChar = twoPointerAlgorithm(
      availableReplaceCount,
      string,
      pivotChar
    );
    if (maxBeautyByChar > maxBeauty) {
      maxBeauty = maxBeautyByChar;
    }
  }

  return maxBeauty;
};

/**
 * "2. Красивая строка" {@link "https://contest.yandex.ru/contest/45468/problems/2}
 *
 * Красотой строки назовем максимальное число идущих подряд одинаковых букв. (красота строки
 * abcaabdddettq равна 3). Сделайте данную вам строку как можно более красивой, если вы можете
 * сделать не более k операций замены символа.
 *
 * @param { string[] } lines В первой строке записано одно целое число k (0 ≤ k ≤ 10^9). Во второй
 * строке дана непустая строчка S (|S| ≤ 2*10^5). Строчка S состоит только из маленьких латинских
 * букв.
 *
 * @return { number } Выведите одно число — максимально возможную красоту строчки, которую можно
 * получить.
 */
function inputProcessing(lines) {
  const k = Number(lines[0]);
  const string = lines[1];

  return maxLengthConsecutiveCharactersAfterXReplace(k, string);
}

export default inputProcessing;
