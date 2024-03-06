package main

import (
	"fmt"
	"strconv"
	"strings"
)

func calculateGoalsNeeded(
	goalsFirstMatchTeam1,
	goalsFirstMatchTeam2,
	goalsSecondMatchTeam1,
	goalsSecondMatchTeam2 int,
	isFirstTeamPlayingAsVisitorInFirstMatch bool,
) int {
	isPlayingAsVisitor := map[string]map[string]bool{
		"firstMatch": {
			"team1": isFirstTeamPlayingAsVisitorInFirstMatch,
			"team2": !isFirstTeamPlayingAsVisitorInFirstMatch,
		},
		"secondMatch": {
			"team1": !isFirstTeamPlayingAsVisitorInFirstMatch,
			"team2": isFirstTeamPlayingAsVisitorInFirstMatch,
		},
	}

	totalGoalsTeam1 := goalsFirstMatchTeam1 + goalsSecondMatchTeam1
	totalGoalsTeam2 := goalsFirstMatchTeam2 + goalsSecondMatchTeam2

	totalDiffGoals := totalGoalsTeam2 - totalGoalsTeam1

	if totalDiffGoals < 0 {
		return 0 // первая команда и так побеждает
	}
	// добавляем мин.необходимое количество голов для уравнивания
	queryGoals := totalDiffGoals

	team1GoalsAllMatchOnOpponentPitch := 0
	if isPlayingAsVisitor["firstMatch"]["team1"] {
		team1GoalsAllMatchOnOpponentPitch += goalsFirstMatchTeam1
	}
	if isPlayingAsVisitor["secondMatch"]["team1"] {
		// учитываем добавление мин.необходимого количества голов для уравнивания
		team1GoalsAllMatchOnOpponentPitch += goalsSecondMatchTeam1 + queryGoals
	}

	team2GoalsAllMatchOnOpponentPitch := 0
	if isPlayingAsVisitor["firstMatch"]["team2"] {
		team2GoalsAllMatchOnOpponentPitch += goalsFirstMatchTeam2
	}
	if isPlayingAsVisitor["secondMatch"]["team2"] {
		team2GoalsAllMatchOnOpponentPitch += goalsSecondMatchTeam2
	}

	// чтобы не проиграть, накидываем гол
	if team1GoalsAllMatchOnOpponentPitch < team2GoalsAllMatchOnOpponentPitch {
		return queryGoals + 1
	}
	// чтобы не допустим ничью, накидываем гол
	if team1GoalsAllMatchOnOpponentPitch == team2GoalsAllMatchOnOpponentPitch {
		return queryGoals + 1
	}

	return queryGoals
}

func mainB() {
	var match1, match2, isFirstTeamPlayingAsVisitorInFirstMatchStr string

	fmt.Scan(&match1, &match2, &isFirstTeamPlayingAsVisitorInFirstMatchStr)

	goalsFirstMatch := strings.Split(match1, ":")
	goalsFirstMatchTeam1, _ := strconv.Atoi(goalsFirstMatch[0])
	goalsFirstMatchTeam2, _ := strconv.Atoi(goalsFirstMatch[1])

	goalsSecondMatch := strings.Split(match2, ":")
	goalsSecondMatchTeam1, _ := strconv.Atoi(goalsSecondMatch[0])
	goalsSecondMatchTeam2, _ := strconv.Atoi(goalsSecondMatch[1])

	isFirstTeamAway := isFirstTeamPlayingAsVisitorInFirstMatchStr == "2"

	fmt.Print(calculateGoalsNeeded(
		goalsFirstMatchTeam1,
		goalsFirstMatchTeam2,
		goalsSecondMatchTeam1,
		goalsSecondMatchTeam2,
		isFirstTeamAway,
	))
}
