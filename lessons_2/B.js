// https://contest.yandex.ru/contest/27472/problems/B/

// По последовательности чисел во входных данных определите ее вид:

// CONSTANT – последовательность состоит из одинаковых значений
// ASCENDING – последовательность является строго возрастающей
// WEAKLY ASCENDING – последовательность является нестрого возрастающей
// DESCENDING – последовательность является строго убывающей
// WEAKLY DESCENDING – последовательность является нестрого убывающей
// RANDOM – последовательность не принадлежит ни к одному из вышеупомянутых типов
// Формат ввода
// По одному на строке поступают числа последовательности ai, |ai| ≤ 109.

// Признаком окончания последовательности является число -2× 109. Оно в последовательность не входит.

// Формат вывода
// В единственной строке выведите тип последовательности.

function inputProcessing(lines) {
  const mapDefinitionToFnCheck = {
    CONSTANT: (sequence) => new Set(sequence).size === 1, // последовательность состоит из одинаковых значений
    ASCENDING: (sequence) => {
      // последовательность является строго возрастающей
      for (let i = 1; i < sequence.length; i++) {
        if (sequence[i] <= sequence[i - 1]) {
          return false;
        }
      }
      return true;
    },
    DESCENDING: (sequence) => {
      // последовательность является строго убывающей
      for (let i = 1; i < sequence.length; i++) {
        if (sequence[i] >= sequence[i - 1]) {
          return false;
        }
      }
      return true;
    },
    'WEAKLY ASCENDING': (sequence) => {
      // последовательность является нестрого возрастающей

      for (let i = 1; i < sequence.length; i++) {
        if (sequence[i] < sequence[i - 1]) {
          return false;
        }
      }
      return true;
    },
    'WEAKLY DESCENDING': (sequence) => {
      // последовательность является нестрого убывающей
      for (let i = 1; i < sequence.length; i++) {
        if (sequence[i] > sequence[i - 1]) {
          return false;
        }
      }
      return true;
    },
  };
  const DEFAULT_DEFINITION = 'RANDOM';

  const list = lines.map(Number);
  const FINISH_NUM = -2e9;
  const sequence = list.slice(0, list.indexOf(FINISH_NUM) || -list.length);
  // const sequence = list.slice(0, -1);
  //
  for (const [definition, fnCheck] of Object.entries(mapDefinitionToFnCheck)) {
    if (fnCheck(sequence)) {
      return definition;
    }
  }
  return DEFAULT_DEFINITION;
}

(async () => {
  // const inputLines = await input(1);
  const inputLines = [-530, -530, -530, -530, -530, -530, -2000000000];
  console.log({ inputLines });
  const outputLines = inputProcessing(inputLines);
  console.log({ outputLines });
  // output(outputLines);
})();
export default inputProcessing;
