import { test, expect } from '@jest/globals';
import fn from '../../lessons/1/G.js';

test('1', () => {
  expect(fn(['10 5 2'])).toStrictEqual('4');
});
test('2', () => {
  expect(fn(['13 5 3'])).toStrictEqual('3');
});
test('2', () => {
  expect(fn(['14 5 3'])).toStrictEqual('4');
});
