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

function inputProcessing() {
  const data = fs.readFileSync('input.txt', 'utf8');
  const purchasedItems = data
    .split('\n')
    .map((purchase) => purchase.match(/[^\s\n]+/g))
    .filter(Boolean);

  const mapCustomerToPurchases = {};
  const mapCustomerToPurchasesSet = {};
  const customersSet = [];

  for (const [customer, product, count] of purchasedItems) {
    if (!mapCustomerToPurchases[customer]) {
      mapCustomerToPurchases[customer] = {};
      customersSet.push(customer);
    }
    if (!mapCustomerToPurchases[customer][product]) {
      mapCustomerToPurchases[customer][product] = 0;

      if (!mapCustomerToPurchasesSet[customer]) {
        mapCustomerToPurchasesSet[customer] = [];
      }
      mapCustomerToPurchasesSet[customer].push(product);
    }
    mapCustomerToPurchases[customer][product] += Number(count);
  }
  customersSet.sort((a, b) => String(a).localeCompare(b));

  const receipt = [];
  for (const customer of customersSet) {
    receipt.push(`${customer}:`);
    mapCustomerToPurchasesSet[customer].sort((a, b) => String(a).localeCompare(b));

    for (const product of mapCustomerToPurchasesSet[customer]) {
      receipt.push([product, mapCustomerToPurchases[customer][product]].join(' '));
    }
  }

  return receipt;
}

process.stdout.write(inputProcessing().join('\n'));
