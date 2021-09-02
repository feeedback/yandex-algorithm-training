// https://contest.yandex.ru/contest/27472/problems/

// Дан список. Определите, является ли он монотонно возрастающим
// (то есть верно ли, что каждый элемент этого списка больше предыдущего).

// Выведите YES, если массив монотонно возрастает и NO в противном случае.

function inputProcessing(lines) {
  const list = lines[0].split(' ').map(Number);

  let last = Number.NEGATIVE_INFINITY;
  for (const num of list) {
    if (num <= last) {
      return 'NO';
    }
    last = num;
  }
  return 'YES';
}

(async () => {
  // const inputLines = await input(1);
  const inputLines = ['-1 -2'];
  console.log({ inputLines });
  const outputLines = inputProcessing(inputLines);
  console.log({ outputLines });
  // output(outputLines);
})();

export default inputProcessing;
