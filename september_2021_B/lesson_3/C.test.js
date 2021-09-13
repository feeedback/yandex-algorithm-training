import { test, expect } from '@jest/globals';
import fn from './C.js';

test('1', () => {
  expect(fn(['1 2 2 3 3 3'])).toStrictEqual('1');
});

test('2', () => {
  expect(fn(['4 3 5 2 5 1 3 5'])).toStrictEqual('4 2 1');
});
