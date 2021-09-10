/**
 * "E. Автомобильные номера" {@link "https://contest.yandex.ru/contest/28964/problems/E}
 *
 * Номер согласуется с показанием свидетеля, если все символы, которые назвал свидетель,
 * присутствуют в этом номере (не важно, сколько раз).

 * @param { number } countWitnesses количество свидетелей  (<= 100)
 * @param { Array<string> } numbersFromWitnessTestimony показания очередного свидетеля. Строки
 * непустые и состоят из не более чем 20 символов, символы могут повторяться
 * @param { number } countCarNumbers количество номеров (<= 100)
 * @param { Array<string> } numbersOfSuspected номера подозреваемых машин (имеют такой же формат,
 * как и показания свидетелей)
 *
 * @return { Array<string> } Выпишите номера автомобилей, согласующиеся с максимальным количеством
 * свидетелей. Если таких номеров несколько, то выведите их в том же порядке, в котором они были
 * заданы на входе
 */
function guessPossibleNumber(
  countWitnesses,
  numbersFromWitnessTestimony,
  countCarNumbers,
  numbersOfSuspected
) {
  const witnessTestimonySets = numbersFromWitnessTestimony.map((numbers) => [...new Set(numbers)]);
  const suspectedNumberCountWitness = new Array(countCarNumbers).fill(0);

  let max = 0;

  for (let m = 0; m < countWitnesses; m++) {
    for (let n = 0; n < countCarNumbers; n++) {
      if (witnessTestimonySets[m].every((char) => numbersOfSuspected[n].includes(char))) {
        suspectedNumberCountWitness[n] += 1;

        if (suspectedNumberCountWitness[n] > max) {
          max = suspectedNumberCountWitness[n];
        }
      }
    }
  }

  return numbersOfSuspected.filter((carNumber, i) => suspectedNumberCountWitness[i] === max);
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
