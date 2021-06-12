// https://contest.yandex.ru/contest/27472/problems/D/
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
  // const mapIndexToPlaces = scores.map();
  // const mapIndexToPlaces = scores.reduce((acc, score, i) => ({ ...acc, [i]: i + 1 }), {});
  const mapIndexToPlaces = list.reduce((acc, score, i) => ({ ...acc, [i]: scores.indexOf(score) + 1 }), {});

  console.log({ scores });
  console.log({ mapIndexToPlaces });

  let maxPlace = 0;

  for (let i = 1; i < list.length - 1; i++) {
    const current = list[i];
    if (current % 5 === 0 && mapIndexToPlaces[[i - 1]] <= 3 && current > list[i + 1]) {
      console.log('vitalya', i, 'res:', current);
      console.log('place', mapIndexToPlaces[i]);
      if (mapIndexToPlaces[i] > maxPlace) {
        maxPlace = mapIndexToPlaces[i];
      }
    }

    // if (list[i - 1] < list[i] && list[i] > list[i + 1]) {
    //   count += 1;
    // }
  }
  return maxPlace;
}

(async () => {
  // const inputLines = await input(1);
  const inputLines = [3, '10 15 20'];
  console.log({ inputLines });

  const outputLines = inputProcessing(inputLines);
  console.log({ outputLines });
  // output(outputLines);
})();
export default inputProcessing;
