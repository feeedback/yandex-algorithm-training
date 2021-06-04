import readline from 'readline';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const promisedReadline = () =>
  new Promise((resolve, reject) => {
    const id = setTimeout(() => {
      // throw new Error('TIMEOUT wait line stdin');
      // eslint-disable-next-line prefer-promise-reject-errors
      reject('TIMEOUT wait line stdin');
    }, 10000);

    rl.once('line', (data) => {
      clearTimeout(id);
      resolve(data);
    });
  });

export const input = async (INPUT_LINE_COUNT = 1) => {
  const inputLines = [];

  do {
    try {
      const data = await promisedReadline();
      inputLines.push(data.toString());
    } catch (error) {
      console.log(error);
      console.log(`Received ${inputLines.length} just lines. Expected ${INPUT_LINE_COUNT}`);
      rl.close();
      return inputLines;
    }
  } while (inputLines.length < INPUT_LINE_COUNT);

  rl.close();

  return inputLines;
};

export const output = (outputLines) => {
  for (const outputLine of outputLines) {
    process.stdout.write(`${String(outputLine)}\n`);
  }
  // process.exit();
};
