// https://contest.yandex.ru/contest/27663/problems/G

// Широко известна следующая задача для младших школьников. Три черепахи ползут по дороге. Одна
// черепаха говорит: “Впереди меня две черепахи”. Другая черепаха говорит: “Позади меня две
// черепахи”. Третья черепаха говорит: “Впереди меня две черепахи и позади меня две черепахи”. Как
// такое может быть? Ответ: третья черепаха врет! По дороге одна за другой движутся N черепах.
// Каждая черепаха говорит фразу вида: “Впереди меня ai черепах, а позади меня bi черепах”. Ваша
// задача определить, сколько самое большее количество черепах могут говорить правду.

// Формат ввода
// В первой строке вводится целое число N (1 ≤ N ≤ 10000) строк, содержащих целые числа ai и bi, по
// модулю не превосходящие 10000, описывающие высказывание i-ой черепахи.

// Формат вывода
// Выведите целое число M – максимальное количество черепах, которые могут говорить правду.

function inputProcessing(lines) {
  const [nRaw, ...rest] = lines;
  const N = Number(nRaw);
  const used = new Set();
  const digits = rest.map((ab) => ab.split(' ').map(Number));
  // console.log({ N, digits });

  for (const [a, b] of digits) {
    if (a >= 0 && b >= 0 && a + b === N - 1 && !used.has(a)) {
      used.add(a);
    }
  }

  return used.size;
}

(async () => {
  // const inputLines = await input(1);
  // const inputLines = ['1 2 3', '1123'];
  const inputLines = ['3', '2 0', '0 2', '2 2'];

  console.log({ inputLines });
  const outputLines = inputProcessing(inputLines);
  console.log({ outputLines });
  // output(outputLines);
})();

export default inputProcessing;
