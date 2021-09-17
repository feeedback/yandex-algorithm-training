import { test, expect } from '@jest/globals';
import fn from './B.js';

test('1', () => {
  expect(fn(['1 2 3 2 3 4'])).toStrictEqual(['NO', 'NO', 'NO', 'YES', 'YES', 'NO']);
});
