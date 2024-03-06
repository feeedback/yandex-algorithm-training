function calculateGoalsNeeded(
  goalsFirstMatchTeam1, //
  goalsFirstMatchTeam2,
  goalsSecondMatchTeam1,
  goalsSecondMatchTeam2,
  isFirstTeamPlayingAsVisitorInFirstMatch
) {
  const isPlayingAsVisitor = {
    firstMatch: {
      team1: isFirstTeamPlayingAsVisitorInFirstMatch,
      team2: !isFirstTeamPlayingAsVisitorInFirstMatch,
    },
    secondMatch: {
      team1: !isFirstTeamPlayingAsVisitorInFirstMatch,
      team2: isFirstTeamPlayingAsVisitorInFirstMatch,
    },
  };

  const totalGoalsTeam1 = goalsFirstMatchTeam1 + goalsSecondMatchTeam1;
  const totalGoalsTeam2 = goalsFirstMatchTeam2 + goalsSecondMatchTeam2;

  const totalDiffGoals = totalGoalsTeam2 - totalGoalsTeam1;

  if (totalDiffGoals < 0) {
    return 0; // первая команда и так побеждает
  }
  // добавляем мин.необходимое количество голов для уравнивания
  const queryGoals = totalDiffGoals;

  const team1GoalsAllMatchOnOpponentPitch =
    (isPlayingAsVisitor.firstMatch.team1 ? goalsFirstMatchTeam1 : 0) +
    // учитываем добавление мин.необходимого количества голов для уравнивания
    (isPlayingAsVisitor.secondMatch.team1
      ? goalsSecondMatchTeam1 + queryGoals
      : 0);

  const team2GoalsAllMatchOnOpponentPitch =
    (isPlayingAsVisitor.firstMatch.team2 ? goalsFirstMatchTeam2 : 0) +
    (isPlayingAsVisitor.secondMatch.team2 ? goalsSecondMatchTeam2 : 0);

  // чтобы не проиграть, накидываем гол
  if (team1GoalsAllMatchOnOpponentPitch < team2GoalsAllMatchOnOpponentPitch) {
    return queryGoals + 1;
  }
  // чтобы не допустим ничью, накидываем гол
  if ((team1GoalsAllMatchOnOpponentPitch === team2GoalsAllMatchOnOpponentPitch)) {
    return queryGoals + 1;
  }

  return queryGoals;
}

/**
 * "B. Футбольный комментатор" {@link "https://contest.yandex.ru/contest/59539/problems/B}
 *
 * @param { string[] } lines В первой строке записан счёт первого мачта в формате G1:G2, где G1 —
 * число мячей, забитых первой командой, а G2 — число мячей, забитых второй командой.
 * Во второй строке записан счёт второго (текущего) матча в аналогичном формате.
 * Все числа в записи счёта не превышают 5.
 * В третьей строке записано число 1, если первую игру первая команда провела «дома»,
 * или 2, если «в гостях».
 *
 * @return { number } Выведите единственное целое число — сколько голов МИНИМАЛЬНО необходимо забить первой команде,
 * чтобы победить, не переводя игру в дополнительное время. ВТОРАЯ КОМАНДА НЕ ЗАБИВАЕТ ГОЛЫ ПОСЛЕ ТЕКУЩЕГО СЧЁТА.
 * Если число забитых мячей совпадает, выигрывает команда, забившая больше мячей «в гостях» ВО ВСЕХ МАТЧАХ.
 */
function inputProcessing(lines) {
  const [goalsFirstMatchTeam1, goalsFirstMatchTeam2] = lines[0]
    .split(":")
    .map(Number);

  const [goalsSecondMatchTeam1, goalsSecondMatchTeam2] = lines[1]
    .split(":")
    .map(Number);

  const isFirstTeamPlayingAsVisitorInFirstMatch = Number(lines[2]) === 2;

  return calculateGoalsNeeded(
    goalsFirstMatchTeam1,
    goalsFirstMatchTeam2,
    goalsSecondMatchTeam1,
    goalsSecondMatchTeam2,
    isFirstTeamPlayingAsVisitorInFirstMatch
  );
}

export default inputProcessing;
