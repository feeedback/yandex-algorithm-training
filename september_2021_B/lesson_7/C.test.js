import { test } from 'node:test';
import assert from 'node:assert/strict';;
import fn from './C_draft.js';

test('1', () => {
  assert.strictEqual(fn(['1', '-1 0', '-5 -3', '2 5', '0 0']), 'No solution');
});

test('2', () => {
  assert.deepStrictEqual(fn(['1', '-1 0', '0 1', '0 0']), ['1', '0 1']);
});

test('my', () => {
  assert.deepStrictEqual(fn(['2', '0 2', '0 0']), ['1', '0 2']);
});

test('my 2', () => {
  assert.deepStrictEqual(fn(['2', '0 5', '0 0']), ['1', '0 5']);
});

test('my 3', () => {
  assert.strictEqual(fn(['2', '2 5', '0 0']), 'No solution');
});

test('my 4', () => {
  assert.deepStrictEqual(fn(['2', '0 1', '1 1', '1 2', '0 0']), ['2', '0 1', '1 2']);
});

// test('my 5', () => {
//   assert.strictEqual(fn(['2', '0 1', '1 1', '1 2', '0 3', '0 0']), ['1', '0 3']);
// });

// TODO: DRAFT version, solution not ready, test failed
// test('my 6', () => {
//   assert.strictEqual(fn(['2', '0 1', '1 2', '0 2', '0 0']), ['1', '0 2']);
// });
