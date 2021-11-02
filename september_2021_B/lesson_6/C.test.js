import { test, expect } from '@jest/globals';
import fn from './C.js';

// 1x^3+-3x^2+3x+-1=0
// x = 1

test('1', () => {
  expect(fn(['1 -3 3 -1'])).toBeCloseTo(1.0000036491, 5);
});

test('2', () => {
  expect(fn(['-1 -6 -12 -7'])).toBeCloseTo(-1.0000000111, 5);
});

test('my 1', () => {
  expect(fn(['2 5 3 -3'])).toBeCloseTo(1 / 2, 5);
});
test('my 2', () => {
  expect(fn(['1000 1 1 1'])).toBeCloseTo(-0.096991, 5);
});
test('my 2', () => {
  expect(fn(['1 -1000 -1000 -1000'])).toBeCloseTo(-0.096991, 5);
});
