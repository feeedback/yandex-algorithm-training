// https://contest.yandex.ru/contest/27472/problems/G/

// Дан список, заполненный произвольными целыми числами.
// Найдите в этом списке два числа, произведение которых максимально.
// Выведите эти числа в порядке неубывания.

// Список содержит не менее двух элементов. Числа подобраны так, что ответ однозначен.

// Решение должно иметь сложность O(n), где n - размер списка.

// Пример
// -4 3 -5 2 5 // ввод
// -5 -4 // вывод

function inputProcessing(lines) {
  const list = lines[0].split(' ').map(Number);

  let max1 = Number.NEGATIVE_INFINITY;
  let max2 = Number.NEGATIVE_INFINITY;
  let max3 = Number.NEGATIVE_INFINITY;
  let min1 = Number.POSITIVE_INFINITY;
  let min2 = Number.POSITIVE_INFINITY;
  let min3 = Number.POSITIVE_INFINITY;

  for (const num of list) {
    if (num > max2) {
      max2 = num;
    } else if (num > max1) {
      max1 = num;
    } else if (num > max3) {
      max3 = num;
    } else if (num < min2) {
      min2 = num;
    } else if (num < min1) {
      min1 = num;
    }
  }
  // console.log({ max1, max2, min1, min2 });
  const queryNums = max1 * max2 > min1 * min2 ? [max1, max2] : [min1, min2];

  return queryNums.sort((a, b) => a - b).join(' ');
}

(async () => {
  const inputLines = ['1 0 1'];
  console.log({ inputLines });

  const outputLines = inputProcessing(inputLines);
  console.log({ outputLines });
})();

export default inputProcessing;
