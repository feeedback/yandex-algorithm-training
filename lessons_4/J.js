/* eslint-disable no-use-before-define */
// https://contest.yandex.ru/contest/27665/problems/J

// Поскольку в разных языках используются различные ключевые слова, то список ключевых слов в
// анализируемом языке предоставляется на вход программе. Все последовательности из латинских букв,
// цифр и знаков подчеркивания, которые не являются ключевыми словами и содержат хотя бы один
// символ, не являющийся цифрой, могут быть идентификаторами. При этом в некоторых языках
// идентификаторы могут начинаться с цифры, а в некоторых - нет. Если идентификатор не может
// начинаться с цифры, то последовательность, начинающаяся с цифры, идентификатором не является.
// Кроме этого, задано, является ли язык чувствительным к регистру символов, используемых в
// идентификаторах и ключевых словах.

// Формат ввода
// В первой строке вводятся число n - количество ключевых слов в языке (0 <= n <= 50) и два слова C
// и D, каждое из которых равно либо "yes", либо "no". Слово C равно "yes", если идентификаторы и
// ключевые слова в языке чувствительны к регистру символов, и "no", если нет. Слово D равно "yes",
// если идентификаторы в языке могут начинаться с цифры, и "no", если нет.

// Следующие n строк содержат по одному слову, состоящему из букв латинского алфавита и символов
// подчеркивания - ключевые слова. Все ключевые слова не пусты, различны, при этом, если язык не
// чувствителен к регистру, то различны и без учета регистра. Длина каждого ключевого слова не
// превышает 50 символов.

// Далее до конца входных данных идет текст программы. Он содержит только символы с ASCII-кодами от
// 32 до 126 и переводы строки.

// Размер входных данных не превышает 10 килобайт. В программе есть хотя бы один идентификатор.

// Формат вывода
// Выведите идентификатор, встречающийся в программе максимальное число раз. Если таких
// идентификаторов несколько, следует вывести тот, который встречается в первый раз раньше. Если
// язык во входных данных не чувствителен к регистру, то можно выводить идентификатор в любом
// регистре.

// import fs from 'fs';
// import readline from 'readline';

// const rl = readline.createInterface({
//   input: fs.createReadStream('input.txt'),
//   output: process.stdout,
// });
// const inputLines = [];

// rl.on('line', (data) => {
//   inputLines.push(data.toString().trim());
// });

// rl.on('close', () => {
//   console.log({ inputLines });
//   const outputLines = inputProcessing(inputLines);
//   console.log({ outputLines });
// });

function inputProcessing(lines) {
  const lineFirst = lines[0].split(' ');

  const N = Number(lineFirst[0]); // (0 <= n <= 50)
  const isCaseSensitive = lineFirst[1] === 'yes';
  const isCanStartFromDigit = lineFirst[2] === 'yes';

  const dictKeyWords = new Set(lines.slice(1, 1 + N)); // слово <= 50 символов
  const dictKeyWordsAll = new Set(lines.slice(1, 1 + N).map((wordKey) => wordKey.toLowerCase())); // слово <= 50 символов

  const code = lines.slice(1 + N).flatMap((str) => str.match(/\w+/g)); // строки <=10kB

  const mapVariablesToCount = new Map();
  let countMax = 0;
  const variables = [];

  for (const word of code) {
    if (!word) {
      continue;
    }
    if (
      /\D/.test(word) &&
      (isCaseSensitive ? !dictKeyWords.has(word) : !dictKeyWordsAll.has(word.toLowerCase())) &&
      (isCanStartFromDigit || /^\D.*/.test(word))
    ) {
      const variable = isCaseSensitive ? word : word.toLowerCase();
      variables.push(variable);

      if (!mapVariablesToCount.has(variable)) {
        mapVariablesToCount.set(variable, 1);
        if (countMax === 0) {
          countMax = 1;
        }
      } else {
        const beforeCount = mapVariablesToCount.get(variable);
        mapVariablesToCount.set(variable, beforeCount + 1);

        if (beforeCount + 1 > countMax) {
          countMax = beforeCount + 1;
        }
      }
    }
  }

  const [[variableMax]] = [...mapVariablesToCount.entries()]
    .filter(([, count]) => count === countMax)
    .sort((a, b) => variables.indexOf(a) - variables.indexOf(b));

  return variableMax;
}

// (async () => {
//   // const inputLines = [4, 'cAnnot', 'cannOt', 'fOund', 'pAge', 'thE pAge cAnnot be found'];
//   // const inputLines = [4, 'cAnnot', 'cannOt', 'fOund', 'pAge', 'thE pAge cAnnot be found'];
//   console.log({ inputLines });
//   const outputLines = inputProcessing(inputLines);
//   console.log({ outputLines });
//   // assert.equal(outputLines, 2);
// })();

export default inputProcessing;
