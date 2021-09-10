/**
 * "E. Автомобильные номера" {@link "https://contest.yandex.ru/contest/28964/problems/E}
 *
 * Неизвестный водитель совершил ДТП и скрылся с места происшествия. Полиция опрашивает свидетелей.
 * Каждый из них говорит, что запомнил какие-то буквы и цифры номера. Но при этом свидетели не
 * помнят порядок этих цифр и букв. Полиция хочет проверить несколько подозреваемых автомобилей.
 * Будем говорить, что номер согласуется с показанием свидетеля, если все символы, которые назвал
 * свидетель, присутствуют в этом номере (не важно, сколько раз).

 * @param { number } countWitnesses количество свидетелей  (<= 100)
 * @param { Array<string> } numbersFromWitnessTestimony показания очередного свидетеля. Строки непустые и состоят из
 * не более чем 20 символов. Каждый символ в строке - либо цифра, либо заглавная латинская буква,
 * причём символы могут повторятся
 * @param { number } countCarNumbers количество номеров (<= 100)
 * @param { Array<string> } numbersOfSuspected номера подозреваемых машин (имеют такой же формат, как и
 * показания свидетелей)
 *
 * @return { Array<string> } Выпишите номера автомобилей, согласующиеся с максимальным количеством
 * свидетелей. Если таких номеров несколько, то выведите их в том же порядке, в котором они были
 * заданы на входе. Август
 */
function guessPossibleNumber(
  countWitnesses,
  numbersFromWitnessTestimony,
  countCarNumbers,
  numbersOfSuspected
) {
  const witnessTestimonySets = numbersFromWitnessTestimony.map((numbers) => [...new Set(numbers)]);
  const mapSuspectedNumberCountToWitness = new Map();

  for (let i = 0; i < countCarNumbers; i++) {
    mapSuspectedNumberCountToWitness.set(numbersOfSuspected[i], 0);
  }

  for (const witnessTestimonyNumberChars of witnessTestimonySets) {
    for (const suspectedSet of mapSuspectedNumberCountToWitness.keys()) {
      if (witnessTestimonyNumberChars.every((char) => suspectedSet.includes(char))) {
        mapSuspectedNumberCountToWitness.set(
          suspectedSet,
          (mapSuspectedNumberCountToWitness.get(suspectedSet) || 0) + 1
        );
      }
    }
  }
  const possibleNumberToCountWitness = [...mapSuspectedNumberCountToWitness];
  const max = Math.max(...possibleNumberToCountWitness.map(([, count]) => count));
  return possibleNumberToCountWitness.filter(([, count]) => count === max).map(([carNumber]) => carNumber);
}

function inputProcessing(lines) {
  const countWitnesses = Number(lines[0]);
  const numbersFromWitnessTestimony = lines.slice(1, countWitnesses + 1);

  const countCarNumbers = Number(lines[countWitnesses + 1]);
  const numbersOfSuspected = lines.slice(1 + countWitnesses + 1);

  return guessPossibleNumber(
    countWitnesses,
    numbersFromWitnessTestimony,
    countCarNumbers,
    numbersOfSuspected
  );
}

export default inputProcessing;

// inputProcessing(['3', 'ABC', 'A37', 'BCDA', '2', 'A317BD', 'B137AC']); // .toStrictEqual(['B137AC']);
// inputProcessing(['3', 'ABC', 'A37', 'BCDA', '1', 'B137AC']); // .toStrictEqual(['B137AC']);
