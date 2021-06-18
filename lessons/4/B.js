// https://contest.yandex.ru/contest/27665/problems/A

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
  // const list = data.split(/[\s\n]/).filter((word) => word !== '');
  const list = data.match(/[^\s\n]+/g);
  const mapWordToCount = {}
for (const iterator of object) {
  
}
  // console.log({ words });
  return words.size;
}

process.stdout.write(String(inputProcessing()));
