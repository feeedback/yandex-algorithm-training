import { test, expect } from '@jest/globals';
import fn from './A.js';

test('1', () => {
  expect(fn(['1', '1', '2', '2'])).toStrictEqual('NO');
});

test('2', () => {
  expect(fn([2, -4, 7, 1])).toStrictEqual(2);
});

test('3', () => {
  expect(fn([35, 14, 11, -3])).toStrictEqual('NO');
});

test('my', () => {
  expect(fn([0, 0, 11, -3])).toStrictEqual('INF');
});
