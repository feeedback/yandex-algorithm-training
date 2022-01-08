import { test, expect } from '@jest/globals';
import fn from './A.js';

test('1', () => {
  expect(fn(['1', '10 20'])).toStrictEqual(10);
});

test('2', () => {
  expect(fn(['1', '10 10'])).toStrictEqual(0);
});

test('3', () => {
  expect(fn(['2', '10 20', '20 40'])).toStrictEqual(30);
});

test('3 my', () => {
  expect(fn(['2', '10 20', '30 40'])).toStrictEqual(20);
});
