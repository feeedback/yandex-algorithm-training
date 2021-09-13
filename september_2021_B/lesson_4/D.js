/**
 * "D. Выборы Государственной Думы" {@link "https://contest.yandex.ru/contest/28970/problems/D/}
 *
 * Необходимо распределить 450 мест между партиями, участвовавших в выборах.
 *
 * @param { string } text  список партий, участвовавших в выборах. Каждая строка входного файла
 * содержит название партии (строка, возможно, содержащая пробелы), затем, через пробел, количество
 * голосов, полученных данной партией – число, не превосходящее 10^8.
 *
 * @return { string[] } вывести названия всех партий и количество голосов в парламенте, полученных
 * данной партией. Названия необходимо выводить в том же порядке, в котором они шли во входных
 * данных.
 */
function calcPartyVotes(partyWithVotes) {
  const STATE_DUMA_MAX_PLACES = 450;
  let placesFree = STATE_DUMA_MAX_PLACES;
  let sumVotes = 0;
  const votesByParty = new Map();

  // Сначала подсчитывается сумма голосов избирателей, поданных за каждую партию и подсчитывается
  // сумма голосов, поданных за все партии.
  for (let index = 0; index < partyWithVotes.length; index++) {
    const [party, votesCount] = partyWithVotes[index];
    sumVotes += votesCount;
    votesByParty.set(party, (votesByParty.get(party) || 0) + votesCount);
  }

  // сумма голосов, поданных за все партии делится на 450, получается величина, называемая “первое избирательное частное”
  // (смысл первого избирательного частного - это количество голосов избирателей, которое
  // необходимо набрать для получения одного места в парламенте)
  const votesToOnePlace = sumVotes / placesFree;
  const parties = [...votesByParty.keys()];
  const partiesFractionPartRaw = [];

  for (let index = 0; index < parties.length; index++) {
    const party = parties[index];
    const placesRaw = votesByParty.get(party) / votesToOnePlace;
    partiesFractionPartRaw[index] = { party, fractPart: placesRaw % 1 };

    // каждая партия получает столько мест, чему равна целая часть от деления числа голосов за данную партию на первое избирательное частное
    const places = Math.floor(placesRaw);
    votesByParty.set(party, places);

    placesFree -= places;
  }

  // Если после первого раунда распределения мест сумма количества мест, отданных партиям, меньше
  // 450, то оставшиеся места передаются по одному партиям, в порядке убывания дробной части частного
  // от деления числа голосов за данную партию на первое избирательное частное.
  // Если же для двух партий эти дробные части равны, то преимущество отдается той партии, которая
  // получила большее число голосов.
  const partiesFractionPart = partiesFractionPartRaw.sort(
    (prev, next) =>
      next.fractPart - prev.fractPart || votesByParty.get(next.party) - votesByParty.get(prev.party)
  );

  let index = 0;
  while (placesFree > 0) {
    const { party } = partiesFractionPart[index];
    votesByParty.set(party, votesByParty.get(party) + 1);

    index = (index + 1) % partiesFractionPart.length;
    placesFree -= 1;
  }

  return parties.map((party) => `${party} ${votesByParty.get(party)}`);
}

function inputProcessing(lines) {
  const partyWithVotes = lines.map((line) => {
    const party = line.split(' ');
    const votes = party.pop();

    return [party.join(' '), Number(votes)];
  });

  return calcPartyVotes(partyWithVotes);
}

export default inputProcessing;
