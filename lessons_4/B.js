// https://contest.yandex.ru/contest/27665/problems/B

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
  const mapCountEarlier = [];

  if (!words) {
    return '';
  }
  for (const word of words) {
    if (!mapWordToCount[word]) {
      mapWordToCount[word] = 1;
      mapCountEarlier.push(0);
    } else {
      mapCountEarlier.push(mapWordToCount[word]);
      mapWordToCount[word] += 1;
    }
  }
  // console.log({ words, mapWordToCount, mapCountEarlier });
  return mapCountEarlier.join(' ');
}

process.stdout.write(String(inputProcessing()));
