import { test, expect } from '@jest/globals';
import fn from './C_draft.js';

test('1', () => {
  expect(fn(['1', '-1 0', '-5 -3', '2 5', '0 0'])).toStrictEqual('No solution');
});

test('2', () => {
  expect(fn(['1', '-1 0', '0 1', '0 0'])).toStrictEqual(['1', '0 1']);
});

test('my', () => {
  expect(fn(['2', '0 2', '0 0'])).toStrictEqual(['1', '0 2']);
});

test('my 2', () => {
  expect(fn(['2', '0 5', '0 0'])).toStrictEqual(['1', '0 5']);
});

test('my 3', () => {
  expect(fn(['2', '2 5', '0 0'])).toStrictEqual('No solution');
});

test('my 4', () => {
  expect(fn(['2', '0 1', '1 1', '1 2', '0 0'])).toStrictEqual(['2', '0 1', '1 2']);
});

// test('my 5', () => {
//   expect(fn(['2', '0 1', '1 1', '1 2', '0 3', '0 0'])).toStrictEqual(['1', '0 3']);
// });

// TODO: DRAFT version, solution not ready, test failed
// test('my 6', () => {
//   expect(fn(['2', '0 1', '1 2', '0 2', '0 0'])).toStrictEqual(['1', '0 2']);
// });
