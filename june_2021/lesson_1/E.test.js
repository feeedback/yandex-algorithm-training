import { test, describe } from 'node:test';
import assert from 'node:assert/strict';;
import fn from './E.js';

describe('june_2021/lesson_1/E', () => {
  test('1', () => {
    assert.strictEqual(fn(['89 20 41 1 11']), '2 3');
  });
  test('2', () => {
    assert.strictEqual(fn(['11 1 1 1 1']), '0 1');
  });
  test('3', () => {
    assert.strictEqual(fn(['3 2 2 2 1']), '-1 -1');
  });
  test('4', () => {
    assert.strictEqual(fn(['5 20 2 1 1']), '1 0');
  });
  test('5', () => {
    assert.strictEqual(fn(['11 2 4 1 2']), '0 2');
  });
  test('6', () => {
    assert.strictEqual(fn(['1000 1 449 449 1']), '1000 1');
  });
  test('7', () => {
    assert.strictEqual(fn(['40 5 60 6 5']), '4 5');
  });
  test('9', () => {
    assert.strictEqual(fn(['753 10 1000 1 1']), '1 1');
  });
  test('14', () => {
    assert.strictEqual(fn(['41 10 41 1 10']), '-1 -1');
  });
});
