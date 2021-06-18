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
// import input from './input.js';

function inputProcessing(lines) {
  const word = lines.pop();

  let synonymWord = null;
  for (const synonym of lines) {
    const [wordA, wordB] = synonym.split(' ');
    if (word === wordA) {
      synonymWord = wordB;
    }
    if (word === wordB) {
      synonymWord = wordA;
    }
  }
  return synonymWord;
}

(async () => {
  // const inputLines = await input(1);
  const inputLines = ['3', 'Hello Hi', 'Bye Goodbye', 'List Array', 'Goodbye'];
  // const inputLines = input;
  console.log({ inputLines });
  const outputLines = inputProcessing(inputLines);
  console.log({ outputLines });
  // output(outputLines);
})();

export default inputProcessing;
