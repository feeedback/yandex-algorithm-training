const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const inputLines = [];

rl.on('line', (data) => {
  const dataStr = data.toString().trim();
  inputLines.push(dataStr);
});

rl.on('close', () => {
  // eslint-disable-next-line no-undef
  const outputLines = inputProcessing(inputLines);
  process.stdout.write(Array.isArray(outputLines) ? outputLines.join('\n') : String(outputLines));
});
