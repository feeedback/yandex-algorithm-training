import { test } from 'node:test';
import assert from 'node:assert/strict';;
import fn from './E.js';

test('1', () => {
  assert.deepStrictEqual(fn(['3', 'ABC', 'A37', 'BCDA', '2', 'A317BD', 'B137AC']), ['B137AC']);
});

test('2', () => {
  assert.deepStrictEqual(fn(['2', '1ABC', '3A4B', '3', 'A143BC', 'C143AB', 'AAABC1']), ['A143BC', 'C143AB']);
});
test('3 from Bot', () => {
  assert.deepStrictEqual(
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
    , [
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
