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

function inputProcessing(lines) {
  const zeroRoot = 'NO SOLUTION';
  const infinitelyRoot = 'MANY SOLUTIONS';

  const [a, b, c] = lines.map(Number);
  if (c < 0) {
    return zeroRoot;
  }
  if (a === 0) {
    return c ** 2 === b ? infinitelyRoot : zeroRoot;
  }

  const x = (c ** 2 - b) / a;

  if (Number.isInteger(x)) {
    return x;
  }
  return zeroRoot;
}
