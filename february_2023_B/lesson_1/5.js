const calcGoodValueForString = (alphabetLength, countCharsInString) => {
  let goodValue = 0;

  for (let i = 0; i < alphabetLength - 1; i++) {
    goodValue += Math.min(countCharsInString[i], countCharsInString[i + 1]);
  }
  return goodValue;
};

/**
 * "5. Хорошая строка" {@link "https://contest.yandex.ru/contest/45468/problems/5}
 *
 * Прямо сейчас юный исследователь полностью поглощён изучением хорошести строк. Хорошестью строки
 * называется количество позиций от 1 до L-1 (где L — длина строки), таких, что следующая буква в
 * строке является следующей по алфавиту. Например, хорошесть строки "abcdefghijklmnopqrstuvwxyz"
 * равна 25, а строки "abdc" — только 1.
 *
 * @param { string[] } lines Первая строка ввода содержит единственное целое число N — количество
 * различных букв в наборе (1 ≤ N ≤ 26). Обратите внимание: в наборе всегда используются N первых
 * букв латинского алфавита.
 * Следующие N строк содержат целые положительные числа ci — количество букв соответствующего типа
 * (1 ≤ ci ≤ 10^9)
 * Таким образом, первое число означает количество букв "a", второе число задаёт количество букв
 * "b" и так далее.
 *
 * @return { number } Выведите единственное целое число — максимально возможную хорошесть строки,
 * которую можно собрать из имеющихся дощечек.
 */
function inputProcessing(lines) {
  const alphabetLength = Number(lines[0]);
  const countCharsInString = lines.slice(1).map(Number);

  return calcGoodValueForString(alphabetLength, countCharsInString);
}

export default inputProcessing;
