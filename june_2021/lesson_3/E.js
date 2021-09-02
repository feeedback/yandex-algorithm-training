// https://contest.yandex.ru/contest/27663/problems/E

// В новой программе OpenCalculator появилась новая возможность – можно настроить, какие кнопки отображаются, а какие – нет.
// Если кнопка не отображается на экране, то ввести соответствующую цифру с клавиатуры или копированием из другой программы нельзя.
// Петя настроил калькулятор так, что он отображает только кнопки с цифрами x, y, z.
// Напишите программу, определяющую, сможет ли Петя ввести число N, а если нет,
//   то какое минимальное количество кнопок надо дополнительно отобразить на экране для его ввода.

// Формат ввода
// Сначала вводятся три различных числа из диапазона от 0 до 9: x, y и z (числа разделяются пробелами).
// Далее вводится целое неотрицательное число N, которое Петя хочет ввести в калькулятор.Число N не превышает 10000.

// Формат вывода
// Выведите, какое минимальное количество кнопок должно быть добавлено для того,
// чтобы можно было ввести число N(если число может быть введено с помощью уже имеющихся кнопок, выведите 0)

function inputProcessing(lines) {
  const xyz = new Set(lines[0].split(' ').map(Number));
  const queryNumber = Number(lines[1]);
  const digits = new Set(String(queryNumber).split('').map(Number));
  const tail = [];

  for (const num of digits) {
    if (!xyz.has(num)) {
      tail.push(num);
    }
  }

  return tail.length;
}

(async () => {
  // const inputLines = await input(1);
  // const inputLines = ['1 2 3', '1123'];
  const inputLines = ['5 7 3', '123'];

  console.log({ inputLines });
  const outputLines = inputProcessing(inputLines);
  console.log({ outputLines });
  // output(outputLines);
})();

export default inputProcessing;
