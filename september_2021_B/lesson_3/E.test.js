import { test, expect } from '@jest/globals';
import fn from './E.js';

test('1', () => {
  expect(fn(['3', 'ABC', 'A37', 'BCDA', '2', 'A317BD', 'B137AC'])).toStrictEqual(['B137AC']);
});

test('2', () => {
  expect(fn(['2', '1ABC', '3A4B', '3', 'A143BC', 'C143AB', 'AAABC1'])).toStrictEqual(['A143BC', 'C143AB']);
});
test('3 from Bot', () => {
  expect(
    fn([
      '1',
      'AAAAAAAAAAAA',
      '13',
      'AAAAAAAAAAAAAB',
      'BASD234234',
      'ASDBSBF',
      'BBBBBDS',
      'SDASDSD',
      'AAAAAA',
      'BBBBBDS',
      'ASDBSBF',
      'AAAAAA',
      'BABA',
      'AB',
      'A',
      'AAAAAAAAAAAAAAAAAAAA',
    ])
  ).toStrictEqual([
    'AAAAAAAAAAAAAB',
    'BASD234234',
    'ASDBSBF',
    'SDASDSD',
    'AAAAAA',
    'ASDBSBF',
    'AAAAAA',
    'BABA',
    'AB',
    'A',
    'AAAAAAAAAAAAAAAAAAAA',
  ]);
});
