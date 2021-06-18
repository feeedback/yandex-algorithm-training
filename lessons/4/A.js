// https://contest.yandex.ru/contest/27665/problems/A

// Вам дан словарь, состоящий из пар слов. Каждое слово является синонимом к парному ему слову. Все
// слова в словаре различны. Для одного данного слова определите его синоним.

// Формат ввода
// Программа получает на вход количество пар синонимов N. Далее следует N строк, каждая строка
// содержит ровно два слова-синонима. После этого следует одно слово.

// Формат вывода
// Программа должна вывести синоним к данному слову. Примечание

// Эту задачу можно решить и без словарей (сохранив все входные данные в списке), но решение со
// словарем будет более простым.
import input from './input.js';

function inputProcessing(lines) {
  const word = lines.pop();
  const [, ...synonymsRaw] = lines;
  const synonyms = synonymsRaw.map((synonym) => synonym.split(' '));
  const synonymsReverse = synonyms.map(([wordA, wordB]) => [wordB, wordA]);

  // const dict = new Map([...synonyms, ...synonymsReverse]);
  // // console.log({ word, synonyms, dict });
  // return dict.get(word);
  const dict = Object.fromEntries([...synonyms, ...synonymsReverse]);
  // console.log({ word, synonyms, dict });
  
  return dict[word];
}

(async () => {
  // const inputLines = await input(1);
  // const inputLines = ['3', 'Hello Hi', 'Bye Goodbye', 'List Array', 'Goodbye'];
  const inputLines = input;
  console.log({ inputLines });
  const outputLines = inputProcessing(inputLines);
  console.log({ outputLines });
  // output(outputLines);
})();

export default inputProcessing;
