// https://contest.yandex.ru/contest/27665/problems/H

// Одна из проблем расшифровки письменности Майя заключается в определении этого порядка. Рисуя
// значки некоторого слова, писатели Майя иногда выбирали позиции для значков, исходя скорее из
// эстетических взглядов, а не определенных правил. Это привело к тому, что, хотя звуки для многих
// значков известны, археологи не всегда уверены, как должно произноситься записанное слово.

// Археологи ищут некоторое слово W. Они знают значки для него, но не знают все возможные способы
// их расположения. Поскольку они знают, что Вы приедете на IOI ’06, они просят Вас о помощи. Они
// дадут Вам g значков, составляющих слово W, и последовательность S всех значков в надписи,
// которую они изучают, в порядке их появления. Помогите им, подсчитав количество возможных
// появлений слова W.

// Задание Напишите программу, которая по значкам слова W и по последовательности S значков надписи
// подсчитывает количество всех возможных вхождений слова W в S, то есть количество всех различных
// позиций идущих подряд g значков в последовательности S, которые являются какой-либо
// перестановкой значков слова W .

// Формат ввода
// 1 ≤ g ≤ 3 000, g – количество значков в слове W

// g ≤ |S| ≤ 3 000 000 где |S| – количество значков в последовательности S

// На вход программы поступают данные в следующем формате:

// СТРОКА 1: Содержит два числа, разделенных пробелом – g и |S|. СТРОКА 2: Содержит g
// последовательных символов, с помощью которых записывается слово W . Допустимы символы: ‘a’-‘z’ и
// ‘A’-‘Z’; большие и маленькие буквы считаются различными. СТРОКА 3: Содержит |S| последовательных
// символов, которые представляют значки в надписи. Допустимы символы: ‘a’-‘z’ и ‘A’-‘Z’; большие и
// маленькие буквы считаются различными.

// Формат вывода
// Единственная строка выходных данных программы должна содержать количество возможных вхождений
// слова W в S.

const createDict = (wordSet) => {
  const dict = new Map();

  for (const char of wordSet) {
    if (!dict.has(char)) {
      dict.set(char, 1);
    } else {
      dict.set(char, dict.get(char) + 1);
    }
  }
  return dict;
};
const createDiffToDict = (wordDict, strDict) => {
  let matches = 0;

  for (const char of wordDict.keys()) {
    if (strDict.has(char) && strDict.get(char) === wordDict.get(char)) {
      matches += 1;
    }
  }
  return matches;
};
const modifyDict = (wordDict, strDict, char, count) => {
  let diff = 0;

  if (!strDict.has(char)) {
    strDict.set(char, 0);
  }
  const nowCount = strDict.get(char);

  if (wordDict.has(char) && nowCount === wordDict.get(char)) {
    diff = -1;
  }
  strDict.set(char, nowCount + count);

  if (wordDict.has(char) && nowCount + count === wordDict.get(char)) {
    diff = 1;
  }
  return diff;
};

function inputProcessing(lines) {
  const [W, S] = lines[0].split(' ').map(Number); // 1 ≤ g ≤ 3 000, g ≤ |S| ≤ 3 000 000

  const wordSet = lines[1];
  const wDict = createDict(wordSet);
  const string = lines[2];

  const dictFromString = createDict(string.slice(0, W));
  let matchesLetters = createDiffToDict(wDict, dictFromString);
  let occurrence = 0;
  if (matchesLetters === wDict.size) {
    occurrence += 1;
  }

  for (let i = 1; i <= S - W; i++) {
    matchesLetters += modifyDict(wDict, dictFromString, string[i - 1], -1);
    matchesLetters += modifyDict(wDict, dictFromString, string[i - 1 + W], 1);

    if (matchesLetters === wDict.size) {
      occurrence += 1;
    }
  }
  return occurrence;
}

(async () => {
  const inputLines = [
    '3 100',
    'OOO',
    'OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO',
  ];
  console.log({ inputLines });
  const outputLines = inputProcessing(inputLines);
  console.log({ outputLines });
})();

export default inputProcessing;
