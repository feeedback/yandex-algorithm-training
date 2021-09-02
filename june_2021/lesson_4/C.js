// https://contest.yandex.ru/contest/27665/problems/C

// Во входном файле (вы можете читать данные из файла input.txt) записан текст. Словом считается
// последовательность непробельных символов идущих подряд, слова разделены одним или большим числом
// пробелов или символами конца строки. Для каждого слова из этого текста подсчитайте, сколько раз
// оно встречалось в этом тексте ранее.

// Формат ввода
// Вводится текст.

// Формат вывода
// Выведите ответ на задачу.

import fs from 'fs';
// const fs = require('fs');

function inputProcessing() {
  const data = fs.readFileSync('input.txt', 'utf8');
  const words = data.match(/[^\s\n]+/g);
  const mapWordToCount = {};

  if (!words) {
    return '';
  }
  for (const word of words) {
    if (!mapWordToCount[word]) {
      mapWordToCount[word] = 0;
    }
    mapWordToCount[word] += 1;
  }
  const mapCountToWord = {};

  for (const [word, count] of Object.entries(mapWordToCount)) {
    if (!mapCountToWord[count]) {
      mapCountToWord[count] = [];
    }
    mapCountToWord[count].push(word);
  }
  const [, wordsMaxCount] = Object.entries(mapCountToWord).sort(([countA], [countB]) => +countB - +countA)[0];
  const wordsFreq = wordsMaxCount.sort((countA, countB) => String(countA).localeCompare(countB));
  const [wordMaxFreq] = wordsFreq;

  // console.log({ words, mapWordToCount, mapCountToWord, wordMaxFreq });
  return wordMaxFreq;
}

process.stdout.write(String(inputProcessing()));
