import { test, expect } from '@jest/globals';
import fn from '../../lessons/1/E.js';

test('1', () => {
  expect(fn(['89 20 41 1 11'])).toStrictEqual('2 3');
});
test('2', () => {
  expect(fn(['11 1 1 1 1'])).toStrictEqual('0 1');
});
test('3', () => {
  expect(fn(['3 2 2 2 1'])).toStrictEqual('-1 -1');
});
test('4', () => {
  expect(fn(['5 20 2 1 1'])).toStrictEqual('1 0');
});
test('5', () => {
  expect(fn(['11 2 4 1 2'])).toStrictEqual('0 2');
});
test('6', () => {
  expect(fn(['1000 1 449 449 1'])).toStrictEqual('1000 1');
});
test('7', () => {
  expect(fn(['40 5 60 6 5'])).toStrictEqual('4 5');
});
test('9', () => {
  expect(fn(['753 10 1000 1 1'])).toStrictEqual('1 1');
});
test('14', () => {
  expect(fn(['41 10 41 1 10'])).toStrictEqual('-1 -1');
});
