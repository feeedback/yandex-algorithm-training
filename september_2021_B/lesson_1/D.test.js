import { test, expect } from '@jest/globals';
import fn from './D.js';

test('1', () => {
  expect(fn([4, '1 2 3 4'])).toStrictEqual(3);
});

test('2', () => {
  expect(fn([3, '-1 0 1'])).toStrictEqual(0);
});

test('My', () => {
  expect(fn([2, '10 10'])).toStrictEqual(10);
});
test('My 2', () => {
  expect(fn([4, '0 0 0 10'])).toStrictEqual(0);
});
test('3 from bot', () => {
  expect(fn([5, '-9 -1 8 9 10'])).toStrictEqual(8);
});
