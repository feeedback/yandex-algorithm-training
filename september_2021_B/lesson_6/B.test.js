import assert from 'node:assert/strict';
import { describe, test } from 'node:test';
import fn from './B.js';

describe('september_2021_B/lesson_6/B', () => {
  const splitLine = (str) => str.trim().split('\n');

  const data = [
    [
      `4
1 2 2 3
4
4 3 2 1
`,
      `0 0
4 4
2 3
1 1
`,
    ],
    [
      `10
1 2 3 4 5 6 7 7 8 9
10
7 3 3 1 3 7 9 7 7 10
`,
      `7 8
3 3
3 3
1 1
3 3
7 8
10 10
7 8
7 8
0 0

  `,
    ],
    [
      `10
1 3 3 3 3 6 8 8 9 10
10
2 9 6 4 2 9 3 7 9 7
`,
      `0 0
9 9
6 6
0 0
0 0
9 9
2 5
0 0
9 9
0 0
`,
    ],
  ];

  for (let i = 1; i <= data.length; i++) {
    const [input, output] = data[i - 1];

    test(`${i}`, () => {
      assert.deepStrictEqual(fn(splitLine(input)), splitLine(output));
    });
  }
});
