// https://contest.yandex.ru/contest/27472/problems/

// Дан список. Определите, является ли он монотонно возрастающим
// (то есть верно ли, что каждый элемент этого списка больше предыдущего).

// Выведите YES, если массив монотонно возрастает и NO в противном случае.

function inputProcessing(lines) {
  const list = lines[0].split(' ').map(Number);

  return new Set(list).size;
}

(async () => {
  // const inputLines = await input(1);
  const inputLines = ['1 2 3 4 5 1 2 1 2 7 3'];
  console.log({ inputLines });
  const outputLines = inputProcessing(inputLines);
  console.log({ outputLines });
  // output(outputLines);
})();

export default inputProcessing;
