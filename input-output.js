// export const input = (INPUT_LINE_COUNT = 1) => {
//   const inputLines = [];

//   do {
//     process.stdin.once('data', (data) => {
//       inputLines.push(data.toString());
//     });
//   } while (inputLines.length === INPUT_LINE_COUNT);

//   return inputLines;
// };

// export const output = (inputLines, inputProcessing = (lines) => lines) => {
//   const outputLines = inputProcessing(inputLines);

//   for (const outputLine of outputLines) {
//     process.stdout.write(String(outputLine));
//   }

//   process.exit();
// };
import readline from 'readline';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

(async () => {
  const promiseRl = () =>
    new Promise((resolve, reject) => {
      const id = setTimeout(() => {
        throw new Error('TIMEOUT wait line stdin');
      }, 2000);

      rl.once('line', (data) => {
        clearTimeout(id);
        resolve(data);
      });
    });
  console.log(`out ${await promiseRl()}`);
  console.log('после 1');
  console.log(`out ${await promiseRl()}`);
  console.log('после 2');
  rl.close();
})();
