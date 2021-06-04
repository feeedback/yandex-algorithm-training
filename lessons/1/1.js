// В офисе, где работает программист Петр, установили кондиционер нового типа.
// Этот кондиционер отличается особой простотой в управлении.
// У кондиционера есть всего лишь два управляемых параметра: желаемая температура и режим работы.

// Кондиционер может работать в следующих четырех режимах:

// «freeze» — охлаждение.В этом режиме кондиционер может только уменьшать температуру.Если температура в комнате и так не больше желаемой, то он выключается.
// «heat» — нагрев.В этом режиме кондиционер может только увеличивать температуру.Если температура в комнате и так не меньше желаемой, то он выключается.
// «auto» — автоматический режим.В этом режиме кондиционер может как увеличивать, так и уменьшать температуру в комнате до желаемой.
// «fan» — вентиляция.В этом режиме кондиционер осуществляет только вентиляцию воздуха и не изменяет температуру в комнате.

// Кондиционер достаточно мощный, поэтому при настройке на правильный режим работы он за час доводит температуру в комнате до желаемой.

// Требуется написать программу, которая по заданной температуре в комнате troom, установленным на кондиционере желаемой температуре tcond и режиму работы определяет температуру, которая установится в комнате через час.

// Формат ввода
// Первая строка входного файла содержит два целых числа troom, и tcond, разделенных ровно одним пробелом(–50 ≤ troom ≤ 50, –50 ≤ tcond ≤ 50).
// Вторая строка содержит одно слово, записанное строчными буквами латинского алфавита — режим работы кондиционера.

// Формат вывода
// Выходной файл должен содержать одно целое число — температуру, которая установится в комнате через час.

// const inputLines = [];
// const INPUT_LINE_COUNT = 2;

// const inputProcessing = (lines) => lines;

// process.stdin.on('data', (data) => {
//   console.log('out', data.toString());
//   inputLines.push(data.toString());

//   if (inputLines.length === INPUT_LINE_COUNT) {
//     const outputLines = inputProcessing(inputLines);

//     for (const outputLine of outputLines) {
//       process.stdout.write(String(outputLine));
//     }

//     process.exit();
//   }
// });
import { input, output } from '../../input-output.js';

(async () => {
  const inputLines = await input(2);
  output(inputLines, (lines) => `OUT   ${lines}`);
})();

// const [troom, tcond] =
// const mode = {
//   freeze: () => ({}),
//   heat: () => ({}),
//   auto: () => ({}),
//   fan: () => ({}),
// };
