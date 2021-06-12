// https://contest.yandex.ru/contest/27472/problems/E/

// К сожалению, после чемпионата потерялись записи с фамилиями участников,
// остались только записи о длине броска в том порядке, в котором их совершали участники.

// Тракторист Василий помнит три факта:

// 1) Число метров, на которое он метнул лепешку, оканчивалось на 5
// 2) Один из победителей чемпионата метал лепешку до Василия
// 3) Участник, метавший лепешку сразу после Василия, метнул ее на меньшее количество метров

// Будем считать, что участник соревнования занял k-е место,
// если ровно(k − 1) участников чемпионата метнули лепешку строго дальше, чем он.

// Какое максимально высокое место мог занять Василий?

// Формат ввода
// Первая строка входного файла
//     содержит целое число n — количество участников чемпионата по метанию лепешек(3 ≤ n ≤ 105).
// Вторая строка входного файла
//     содержит n положительных целых чисел, каждое из которых не превышает 1000,
// — дальность броска участников чемпионата, приведенные в том порядке, в котором происходило метание.

// Формат вывода
// Выведите самое высокое место, которое мог занять тракторист Василий.
// Если не существует ни одного участника чемпионата, который удовлетворяет, описанным выше условиям, выведите число 0.

function inputProcessing(lines) {
  // const n = Number(lines[0]); // (3 ≤ n ≤ 105).
  const list = lines[1].split(' ').map(Number);

  // Будем считать, что участник соревнования занял k - е место,
  // если ровно(k − 1) участников чемпионата метнули лепешку строго дальше, чем он.
  // 30 - 1
  // 20 - 2
  // 15 - 3
  // 10 - 4
  // 10 - 4
  // 5 - 6
  // 1 - 7
  const scores = [...list].sort((a, b) => b - a);
  const mapIndexToPlaces = {};
  const winners = [];

  for (const [index, score] of Object.entries(list)) {
    const place = scores.indexOf(score) + 1;
    mapIndexToPlaces[index] = place;

    if (place <= 3) {
      winners.push(Number(index));
    }
  }
  const minWinnerIndex = Math.min(...winners);
  let maxPlace = 0;

  for (let i = 1; i < list.length - 1; i++) {
    const current = list[i];
    const place = mapIndexToPlaces[i];

    if (
      current % 5 === 0 &&
      current % 2 !== 0 &&
      minWinnerIndex < i &&
      current > list[i + 1] &&
      place > maxPlace
    ) {
      maxPlace = place;
    }
  }
  return maxPlace;
}

(async () => {
  // const inputLines = await input(1);
  const inputLines = [10, '555 76 661 478 889 453 555 359 601 835'];
  console.log({ inputLines });

  const outputLines = inputProcessing(inputLines);
  console.log({ outputLines });
  // output(outputLines);
})();
export default inputProcessing;
