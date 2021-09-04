import { test, expect } from '@jest/globals';
import fn from './E.js';

test('1', () => {
  expect(fn(['2', '2 1'])).toStrictEqual(1);
});

test('My', () => {
  expect(fn(['3', '1000 2 5'])).toStrictEqual(7);
});
