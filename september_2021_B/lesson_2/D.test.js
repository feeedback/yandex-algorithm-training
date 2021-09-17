import { test, expect } from '@jest/globals';
import fn from './D.js';

test('1', () => {
  expect(fn(['5 2', '0 2'])).toStrictEqual('2');
});

test('2', () => {
  expect(fn(['13 4', '1 4 8 11'])).toStrictEqual('4 8');
});

test('3', () => {
  expect(fn(['14 6', '1 6 8 11 12 13'])).toStrictEqual('6 8');
});

test('My', () => {
  expect(fn(['6 6', '0 1 2 3 4 5'])).toStrictEqual('2 3');

  expect(fn(['6 2', '0 5'])).toStrictEqual('0 5');

  expect(fn(['6 2', '0 4'])).toStrictEqual('0 4');
});

test('4 from bot', () => {
  expect(fn(['4 4', '0 1 2 3'])).toStrictEqual('1 2');
});
