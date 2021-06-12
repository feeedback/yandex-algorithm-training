/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const inputLines = [];

rl.on('line', (data) => {
  inputLines.push(data.toString());
});

rl.on('close', () => {
  const outputLines = inputProcessing(inputLines);
  process.stdout.write(Array.isArray(outputLines) ? outputLines.join('\n') : String(outputLines));
});