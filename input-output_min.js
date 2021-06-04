const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const inputLines = [];

rl.on('line', (data) => {
  inputLines.push(data.toString());
});

rl.on('close', () => {
  const outputLines = inputProcessing(inputLines);

  for (const outputLine of outputLines) {
    process.stdout.write(String(outputLine));
  }
});

// function inputProcessing(lines) {
//   return [];
// }
