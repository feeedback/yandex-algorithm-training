// https://contest.yandex.ru/contest/27472/problems/F/

// Последовательность чисел назовем симметричной, если она одинаково читается как слева направо, так и справа налево.
// Например, следующие последовательности являются симметричными:
// 1 2 3 4 5 4 3 2 1
// 1 2 1 2 2 1 2 1

// Вашей программе будет дана последовательность чисел.
// Требуется определить, какое минимальное количество и каких чисел надо приписать в конец этой последовательности,
// чтобы она стала симметричной.

// Формат ввода
// Сначала вводится число N — количество элементов исходной последовательности (1 ≤ N ≤ 100).
// Далее идут N чисел — элементы этой последовательности, натуральные числа от 1 до 9.

// Формат вывода
// Выведите сначала число M — минимальное количество элементов, которое надо дописать к последовательности,
// а потом M чисел(каждое — от 1 до 9) — числа, которые надо дописать к последовательности.

function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}

function inputProcessing(lines) {
  // const n = Number(lines[0]); // (1 ≤ N ≤ 100)
  const list = lines[1].split(' ').map(Number); // (от 1 до 9)
  const listReverse = [...list].reverse();
  console.log('list :>> ', list);
  console.log('listReverse :>> ', listReverse);
  const stack = [];

  // for (const num of list) {
  //   stack.push(num);
  // }
  let index = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] === listReverse[index]) {
      index += 1;
    } else {
      console.log({ i, push: list[i] });
      stack.push(list[i]);
    }
  }
  console.log({ stack });
  return [...stack].reverse();
}

(async () => {
  // const inputLines = await input(1);
  const inputLines = ['', '1 2 1 2 2'];
  // const inputLines = [9, '1 2 3 4 5 4 3 2 1'];
  console.log({ inputLines });

  const outputLines = inputProcessing(inputLines);
  console.log({ outputLines });
  // output(outputLines);
})();
export default inputProcessing;
