// https://contest.yandex.ru/contest/27663/problems/F

// Геном жителей системы Тау Кита содержит 26 видов оснований, для обозначения которых будем
// использовать буквы латинского алфавита от A до Z, а сам геном записывается строкой из латинских
// букв.Важную роль в геноме играют пары соседних оснований, например, в геноме «ABBACAB» можно
// выделить следующие пары оснований: AB, BB, BA, AC, CA, AB.

// Степенью близости одного генома другому геному называется количество пар соседних оснований
// первого генома, которые встречаются во втором геноме.

// Вам даны два генома, определите степень близости первого генома второму геному.Программа
// получает на вход две строки, состоящие из заглавных латинских букв.Каждая строка непустая, и её
// длина не превосходит 105.

// Программа должна вывести одно целое число – степень близости генома, записанного в первой
// строке, геному, записанному во второй строке.

//   Пример
// Ввод	Вывод
// ABBACAB
// BCABB
// 4
// Примечания
// Следующие пары оснований первого генома встречаются во втором геноме: AB, BB, CA, AB.Обратите
// внимание на то, что пара AB в первом геноме встречается два раза, поэтому и подсчитана в ответе
// два раза.

// // with Regexp
// function inputProcessing(lines) {
//   const set2 = new Set();
//   for (const [, group] of lines[1].matchAll(/(?=([A-Z]{2}))/g)) {
//     set2.add(group);
//   }

//   const intersection = [];
//   for (const [, group] of lines[0].matchAll(/(?=([A-Z]{2}))/g)) {
//     if (set2.has(group)) {
//       intersection.push(group);
//     }
//   }
//   // console.log({ set1, set2, intersection });
//   return intersection.length;
// }

function inputProcessing(lines) {
  const genome1 = lines[0];
  const genome2 = lines[1];

  const set2 = new Set();

  for (let i = 1; i < genome2.length; i++) {
    const group = `${genome2[i - 1]}${genome2[i]}`;
    set2.add(group);
  }

  const intersection = [];

  for (let i = 1; i < genome1.length; i++) {
    const group = `${genome1[i - 1]}${genome1[i]}`;

    if (set2.has(group)) {
      intersection.push(group);
    }
  }

  return intersection.length;
}

(async () => {
  const inputLines = ['ABBACAB', 'BCABB'];

  console.log({ inputLines });
  const outputLines = inputProcessing(inputLines);
  console.log({ outputLines });
})();

export default inputProcessing;
