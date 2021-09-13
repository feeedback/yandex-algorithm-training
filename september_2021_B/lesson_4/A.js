/* eslint-disable no-nested-ternary */
/**
 * "A. Толя-Карп и новый набор структур, часть 2" {@link "https://contest.yandex.ru/contest/28970/problems/A/}
 *
 * Чему будут равны значения чисел, если сложить между собой все те, что имеют одинаковый цвет.
 * Напишите, пожалуйста, программу, которая выводит результат.
 *
 * @param { BigInt } count  число n (0 ≤ n ≤ 2*10^5)
 * @param { Array<[BigInt, BigInt] } colorWithValues список по два числа: цвет числа в ящике di и
 * значение числа ai (-10^18 ≤ di ai ≤ 10^18).
 *
 * @return { string[] } Выведите в порядке возрастания номера цвета пары чисел, каждая в новой
 * строке: номер цвета и сумму всех чисел данного цвета.
 */
function calcColorsBoxCounts(count, colorWithValues) {
  const colorsSums = new Map();

  for (let index = 0; index < count; index++) {
    const [color, value] = colorWithValues[index];
    colorsSums.set(color, BigInt(colorsSums.get(color) || 0) + value);
  }

  const colors = [...colorsSums.keys()].sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

  return colors.map((color) => `${color} ${colorsSums.get(color)}`);
}

function inputProcessing(lines) {
  const count = BigInt(lines[0]);
  const colorWithValues = lines.slice(1).map((line) => line.split(' ').map((n) => BigInt(n)));

  return calcColorsBoxCounts(count, colorWithValues);
}

export default inputProcessing;
