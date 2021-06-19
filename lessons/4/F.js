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

function inputProcessing(lines) {
  const purchasedItems = lines.map((line) => line.split(' ')).filter(Boolean);

  const mapCustomerToPurchases = {};

  for (const [customer, product, count] of purchasedItems) {
    if (!mapCustomerToPurchases[customer]) {
      mapCustomerToPurchases[customer] = {};
    }
    if (!mapCustomerToPurchases[customer][product]) {
      mapCustomerToPurchases[customer][product] = 0;
    }
    mapCustomerToPurchases[customer][product] += Number(count);
  }

  for (const customer of Object.keys(mapCustomerToPurchases).sort((a, b) => a.localeCompare(b))) {
    process.stdout.write(`${customer}:\n`);

    for (const product of Object.keys(mapCustomerToPurchases[customer]).sort((a, b) => a.localeCompare(b))) {
      process.stdout.write(`${product} ${mapCustomerToPurchases[customer][product]}\n`);
    }
  }
}

(async () => {
  // const inputLines = await input(1);
  // const inputLines = fs.readFileSync('input.txt', 'utf8').split('\r\n');
  const inputLines = [
    'Ivanov paper 10',
    'Petrov pens 5',
    'Ivanov marker 3',
    'Ivanov paper 7',
    'Petrov envelope 20',
    'Ivanov envelope 5',
  ];
  // console.log({ inputLines });
  const outputLines = inputProcessing(inputLines);
  // console.log({ outputLines });
  // output(outputLines);
})();
