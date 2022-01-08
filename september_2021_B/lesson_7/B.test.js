import { test, expect } from '@jest/globals';
import fn from './B.js';

test('1', () => {
  expect(fn(['3', '3 2', '4 2', '5 2'])).toStrictEqual(2);
});

test('2', () => {
  expect(fn(['5', '13 4', '15 1', '11 5', '12 3', '10 3'])).toStrictEqual(3);
});
