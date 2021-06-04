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

function inputProcessing(lines) {
  const [a, b, c] = lines.map(Number);

  let isPossible = 'NO';
  if (a < b + c && b < a + c && c < a + b) {
    isPossible = 'YES';
  }
  return [isPossible];
}
