/**
 * "B. Выборы в США" {@link "https://contest.yandex.ru/contest/28970/problems/B/}
 *
 * Чему будут равны значения чисел, если сложить между собой все те, что имеют одинаковый цвет.
 * Напишите, пожалуйста, программу, которая выводит результат.
 *
 * @param { Array<[string, number] } surnameWithVotes список - фамилия кандидата, за которого отдают
 * голоса выборщики этого штата, и количество выборщиков, отдавших голоса за этого кандидата.
 *
 * @return { string[] } Выведите фамилии всех кандидатов в лексикографическом порядке, затем, через
 * пробел, количество отданных за них голосов.
 */
function calcVotesInTheElections(surnameWithVotes) {
  const votesBySurname = new Map();

  for (let index = 0; index < surnameWithVotes.length; index++) {
    const [surname, votesCount] = surnameWithVotes[index];

    votesBySurname.set(surname, BigInt(votesBySurname.get(surname) || 0) + BigInt(votesCount));
  }
  const surnames = [...votesBySurname.keys()].sort((a, b) => a.localeCompare(b));

  return surnames.map((color) => `${color} ${votesBySurname.get(color)}`);
}

function inputProcessing(lines) {
  const surnameWithVotes = lines.map((line) => line.split(' '));

  return calcVotesInTheElections(surnameWithVotes);
}

export default inputProcessing;
