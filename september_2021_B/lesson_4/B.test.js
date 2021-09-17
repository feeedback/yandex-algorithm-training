import { test, expect } from '@jest/globals';
import fn from './B.js';

test('1', () => {
  expect(fn(['McCain 10', 'McCain 5', 'Obama 9', 'Obama 8', 'McCain 1'])).toStrictEqual([
    'McCain 16',
    'Obama 17',
  ]);
});

test('2', () => {
  expect(fn(['ivanov 100', 'ivanov 500', 'ivanov 300', 'petr 70', 'tourist 1', 'tourist 2'])).toStrictEqual([
    'ivanov 900',
    'petr 70',
    'tourist 3',
  ]);
});

test('3', () => {
  expect(fn(['bur 1'])).toStrictEqual(['bur 1']);
});
