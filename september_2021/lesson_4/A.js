/**
 * "A. Толя-Карп и новый набор структур, часть 2" {@link "https://contest.yandex.ru/contest/28970/problems/A/}
 *
 * Чему будут равны значения чисел, если сложить между собой все те, что имеют одинаковый цвет.
 * Напишите, пожалуйста, программу, которая выводит результат.
 *
 * @param { number } count  число n (0 ≤ n ≤ 2*10^5)
 * @param { Array<[number, number] } colorWithValues список по два числа: цвет числа в ящике di и
 * значение числа ai (-10^18 ≤ di ai ≤ 10^18).
 *
 * @return { string[] } Выведите в порядке возрастания номера цвета пары чисел, каждая в новой
 * строке: номер цвета и сумму всех чисел данного цвета.
 */
function calcColorsBoxCounts(count, colorWithValues) {
  const colorsSums = new Map();

  for (let index = 0; index < count; index++) {
    const [color, value] = colorWithValues[index];

    colorsSums.set(color, (colorsSums.get(color) || 0) + value);
  }

  return [...colorsSums].sort(([a], [b]) => a - b).map((p) => p.join(' '));
}

function inputProcessing(lines) {
  const count = Number(lines[0]);
  const colorWithValues = lines.slice(1).map((line) => line.split(' ').map(Number));

  return calcColorsBoxCounts(count, colorWithValues);
}

export default inputProcessing;
