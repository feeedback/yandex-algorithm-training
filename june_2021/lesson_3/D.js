// https://contest.yandex.ru/contest/27663/problems/D

// Во входном файле (вы можете читать данные из sys.stdin, подключив библиотеку sys) записан текст.
// Словом считается последовательность непробельных символов идущих подряд,
//   слова разделены одним или большим числом пробелов или символами конца строки.
//   Определите, сколько различных слов содержится в этом тексте.

// Формат ввода
// Вводится текст.

// Формат вывода
// Выведите ответ на задачу.

import fs from 'fs';

// const fs = require('fs');

function inputProcessing() {
  const data = fs.readFileSync('input.txt', 'utf8');
  // const list = data.split(/[\s\n]/).filter((word) => word !== '');
  const list = data.match(/[^\s\n]+/g);
  const words = new Set(list);
  // console.log({ words });
  return words.size;
}

process.stdout.write(String(inputProcessing()));
