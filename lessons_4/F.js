/* eslint-disable guard-for-in */
// https://contest.yandex.ru/contest/27665/problems/F

// Дана база данных о продажах некоторого интернет-магазина. Каждая строка входного файла
// представляет собой запись вида Покупатель товар количество, где Покупатель — имя покупателя
// (строка без пробелов), товар — название товара (строка без пробелов), количество — количество
// приобретенных единиц товара. Создайте список всех покупателей, а для каждого покупателя
// подсчитайте количество приобретенных им единиц каждого вида товаров.

// Формат ввода
// Вводятся сведения о покупках в указанном формате.

// Формат вывода
// Выведите список всех покупателей в лексикографическом порядке, после имени каждого покупателя
// выведите двоеточие, затем выведите список названий всех приобретенных данным покупателем товаров
// в лексикографическом порядке, после названия каждого товара выведите количество единиц товара,
// приобретенных данным покупателем. Информация о каждом товаре выводится в отдельной строке.
import fs from 'fs';
// const fs = require('fs');

import readline from 'readline';

// const getRamUsage = () =>
//   Object.fromEntries(
//     Object.entries(process.memoryUsage()).map(([key, used]) => [key, `${Math.round(used / 1024 / 1024)} MB`])
//   );

// const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const rl = readline.createInterface({
  input: fs.createReadStream('input.txt'),
  output: process.stdout,
});

const customers = {};

rl.on('line', (data) => {
  const [customer, item, quantity] = data.split(' ');

  if (!customers[customer]) {
    customers[customer] = new Map();
    customers[customer].set(item, +quantity);
  } else if (!customers[customer].has(item)) {
    customers[customer].set(item, +quantity);
  } else {
    customers[customer].set(item, customers[customer].get(item) + +quantity);
  }
});

let outputLines = [];

rl.on('close', () => {
  Object.keys(customers)
    .sort()
    .forEach((customer) => {
      if (outputLines.length > 4000) {
        process.stdout.write(`${outputLines.join('\n')}\n`);

        outputLines = [];
      }
      outputLines.push(`${customer}:`);

      [...customers[customer].keys()].sort().forEach((item) => {
        outputLines.push(`${item} ${customers[customer].get(item)}`);
      });
    });
  process.stdout.write(`${outputLines.join('\n')}\n`);
  // console.log(getRamUsage());
});

// (async () => {
//   // const inputLines = await input(1);
//   // const inputLines = fs.readFileSync('input.txt', 'utf8').split('\r\n');
//   const inputLines = [
//     'Ivanov paper 10',
//     'Petrov pens 5',
//     'Ivanov marker 3',
//     'Ivanov paper 7',
//     'Petrov envelope 20',
//     'Ivanov envelope 5',
//   ];
//   // console.log({ inputLines });
//   // const outputLines = inputProcessing(inputLines);
//   // console.log({ outputLines });
//   // output(outputLines);
// })();
