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

  // const seq = [list[0], list[1], list[2]].sort((a, b) => a - b);
  let [max3, max2, max1] = new Array(3).fill(Number.NEGATIVE_INFINITY);
  let [min1, min2, min3] = new Array(3).fill(Number.POSITIVE_INFINITY);

  for (let i = 0; i < list.length; i++) {
    const num = list[i];
    console.log({ i, num, max1, max2, max3, min1, min2, min3 });

    if (num >= max3) {
      max1 = max2;
      max2 = max3;
      max3 = num;
    } else if (num >= max2) {
      max1 = max2;
      max2 = num;
    } else if (num > max1) {
      max1 = num;
    }
    //
    else if (num <= min3) {
      min1 = min2;
      min2 = min3;
      min3 = num;
    } else if (num <= min2) {
      min1 = min2;
      min2 = num;
    } else if (num < min1) {
      min1 = num;
    }
  }
  const nums = [max1, max2, max3, min1, min2, min3];
  console.log({ max1, max2, max3, min1, min2, min3 });
  let maxProduct = Number.NEGATIVE_INFINITY;
  let queryNums = [];

  for (let x = 0; x < nums.length; x++) {
    for (let y = 0; y < nums.length; y++) {
      if (x !== y) {
        for (let z = 0; z < nums.length; z++) {
          if (
            y !== z &&
            x !== z &&
            Number.isFinite(nums[x]) &&
            Number.isFinite(nums[y]) &&
            Number.isFinite(nums[z])
          ) {
            const product = nums[x] * nums[y] * nums[z];

            if (product > maxProduct) {
              maxProduct = product;
              queryNums = [nums[x], nums[y], nums[z]];
            }
          }
        }
      }
    }
  }
  console.log({ max1, max2, max3, min1, min2, min3 });
  console.log(maxProduct, queryNums);
  return queryNums.sort((a, b) => a - b).join(' ');
}

(async () => {
  const inputLines = ['-2 2 1 0 3 -2'];
  console.log({ inputLines });

  const outputLines = inputProcessing(inputLines);
  console.log({ outputLines });
})();

export default inputProcessing;
