/**
 * "D. Угадай число" {@link "https://contest.yandex.ru/contest/28964/problems/D}
 *
 * Август загадал натуральное число от 1 до maxPossibleNumber.
 *
 * @param { number } maxPossibleNumber наибольшее число,которое мог загадать Август
 * @param { Array<string> } questionsAndAnswers идут строки, содержащие вопросы Беатрисы.
 * Каждая строка представляет собой набор чисел, разделенных пробелами. После каждой строки с
 * вопросом идет ответ Августа: YES или NO
 *
 * @return { string } вывести (через пробел, в порядке возрастания) все числа, которые мог задумать Август
 */
function guessPossibleNumber(maxPossibleNumber, questionsAndAnswers) {
  const possibleNumberByQuestions = new Map();
  const unPossibleNumber = new Set();
  let questionsYesCount = 0;

  for (let i = 0; i < questionsAndAnswers.length; i += 2) {
    const question = questionsAndAnswers[i].split(' ').map(Number);
    const answer = questionsAndAnswers[i + 1];

    if (answer === 'YES') {
      question.forEach((num) => {
        if (num <= maxPossibleNumber) {
          possibleNumberByQuestions.set(num, (possibleNumberByQuestions.get(num) || 0) + 1);
        }
      });
      questionsYesCount += 1;
    } else {
      question.forEach((num) => {
        unPossibleNumber.add(num);
      });
    }
  }

  const possibleNumber = new Set();

  if (questionsYesCount > 0) {
    for (const [num, count] of possibleNumberByQuestions) {
      if (count >= questionsYesCount && !unPossibleNumber.has(num)) {
        possibleNumber.add(num);
      }
    }
  } else {
    for (let num = 1; num <= maxPossibleNumber; num++) {
      if (!unPossibleNumber.has(num)) {
        possibleNumber.add(num);
      }
    }
  }

  return [...possibleNumber].sort((a, b) => a - b).join(' ');
}

function inputProcessing(lines) {
  const maxPossibleNumber = Number(lines[0]);
  const questionsAndAnswersLines = lines.slice(1, lines.length - 1);

  return guessPossibleNumber(maxPossibleNumber, questionsAndAnswersLines);
}
export default inputProcessing;
