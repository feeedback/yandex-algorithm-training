const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const inputLines = [];

rl.on('line', (data) => {
  inputLines.push(data.toString());
});

rl.on('close', () => {
  const outputLines = inputProcessing(inputLines);
  process.stdout.write(outputLines.join('\n'));
});

function inputProcessing(lines) {
  const [basePhone, ...phones] = lines.map((phonesRaw) =>
    phonesRaw.replace(/\D/g, '').padStart(11, '8495').slice(1)
  );

  const result = phones.map((phone) => (phone === basePhone ? 'YES' : 'NO'));
  return result;
}
