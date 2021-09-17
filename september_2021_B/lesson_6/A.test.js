import { test, expect } from '@jest/globals';
import fn from './A.js';

test('1', () => {
  expect(fn(['5', '10 1 10 3 4', '4', '1 10', '2 9', '3 4', '2 2'])).toStrictEqual('5 2 2 0');
});
