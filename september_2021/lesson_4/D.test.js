import { test, expect } from '@jest/globals';
import fn from './D.js';

test('1', () => {
  expect(fn(['Party One 100000', 'Party Two 200000', 'Party Three 400000'])).toStrictEqual([
    'Party One 64',
    'Party Two 129',
    'Party Three 257',
  ]);
});

test('2', () => {
  expect(fn(['Party number one 100', 'Partytwo 100'])).toStrictEqual([
    'Party number one 225',
    'Partytwo 225',
  ]);
});

test('3', () => {
  expect(fn(['Party number one 449', 'Partytwo 1'])).toStrictEqual(['Party number one 449', 'Partytwo 1']);
});
