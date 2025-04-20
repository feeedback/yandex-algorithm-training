import { test } from 'node:test';
import assert from 'node:assert/strict';;
import fn from './B.js';

test('1', () => {
  assert.strictEqual(fn(['McCain 10', 'McCain 5', 'Obama 9', 'Obama 8', 'McCain 1']), [
    'McCain 16',
    'Obama 17',
  ]);
});

test('2', () => {
  assert.strictEqual(fn(['ivanov 100', 'ivanov 500', 'ivanov 300', 'petr 70', 'tourist 1', 'tourist 2']), [
    'ivanov 900',
    'petr 70',
    'tourist 3',
  ]);
});

test('3', () => {
  assert.strictEqual(fn(['bur 1']), ['bur 1']);
});
