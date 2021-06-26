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
// !! Тут в вводе пробел лишний в конце последовательности.
// Из-за этого тест 8 не проходил. Надо или в формате ввода указать или убрать его.

// Формат вывода
// Выведите сначала число M — минимальное количество элементов, которое надо дописать к последовательности,
// а потом M чисел(каждое — от 1 до 9) — числа, которые надо дописать к последовательности.

// 32
// 1 3 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1

// function isPalindromeCheck(str) {
//   for (let i = 0; i < str.length / 2; i++) {
//     if (str[i] !== str[str.length - i - 1]) {
//       return false;
//     }
//   }
//   return true;
// }
// (async () => {
//   const inputLines = [
//     '',
//     '1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 3 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 ',
//   ]; // 1 2 1
//   // const inputLines = ['', '1 2 3']; // 1 2 1
//   // console.log({ inputLines });
//   console.log(inputLines[1].split(' ').join(''));

//   const outputLines = inputProcessing(inputLines);
//   console.log({ outputLines });
//   const str = [...inputLines[1].split(' '), ...outputLines[1].split(' ')].join('');
//   console.log({ str });
//   console.log(isPalindromeCheck(str));
// })();

function inputProcessing(lines) {
  // const n = Number(lines[0]); // (1 ≤ N ≤ 100)
  const list = lines[1].split(' ').map(Number); // (от 1 до 9)
  const listReverse = [...list].reverse();

  const stack = [];
  let index = 0;

  for (let i = 0; i < list.length; i++) {
    if (list[i] === listReverse[index]) {
      let isPalindrome = true;

      for (let j = i; j < list.length; j++) {
        if (list[j] !== listReverse[j - i]) {
          isPalindrome = false;
          break;
        }
      }

      if (!isPalindrome) {
        index = 0;
        stack.push(list[i]);
      } else {
        break;
      }
    } else {
      stack.push(list[i]);
    }
  }

  return stack.length === 0 ? '0' : [String(stack.length), [...stack].reverse().join(' ')];
}

export default inputProcessing;
