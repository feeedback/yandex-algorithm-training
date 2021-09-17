import { test, expect } from '@jest/globals';
import fn from './C.js';

test('1', () => {
  expect(fn(['a'])).toStrictEqual(0);
});
test('2', () => {
  expect(fn(['ab'])).toStrictEqual(1);
});
test('3', () => {
  expect(fn(['cognitive'])).toStrictEqual(4);
});
