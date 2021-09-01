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
  const list = lines[0]
    .split(' ')
    .map(Number)
    .sort((a, b) => b - a);

  // const seq = [list[0], list[1], list[2]].sort((a, b) => b - a);
  const { length } = list;
  const seq = [
    list[0],
    list[1],
    list[2],
    list[length >= 4 ? length - 1 - 0 : length] ?? null,
    list[length >= 5 ? length - 1 - 1 : length] ?? null,
    list[length >= 6 ? length - 1 - 2 : length] ?? null,
  ];

  const nums = seq;
  // console.log(nums);
  // console.log({ max1, max2, max3, min1, min2, min3 });
  let maxProduct = Number.NEGATIVE_INFINITY;
  let queryNums = [];

  for (let x = 0; x < nums.length; x++) {
    for (let y = 0; y < nums.length; y++) {
      if (x !== y) {
        for (let z = 0; z < nums.length; z++) {
          if (y !== z && x !== z && nums[x] !== null && nums[y] !== null && nums[z] !== null) {
            const product = nums[x] * nums[y] * nums[z];
            // console.log([nums[x], nums[y], nums[z]], { product });
            if (product > maxProduct) {
              maxProduct = product;
              queryNums = [nums[x], nums[y], nums[z]];
            }
          }
        }
      }
    }
  }
  // console.log({ max1, max2, max3, min1, min2, min3 });
  // console.log(maxProduct, queryNums);
  return queryNums.sort((a, b) => a - b).join(' ');
}

(async () => {
  const inputLines = ['-5 -30000 -12 0 1'];
  console.log({ inputLines });

  const outputLines = inputProcessing(inputLines);
  console.log({ outputLines });
})();

export default inputProcessing;
