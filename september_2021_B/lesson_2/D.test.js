import assert from 'node:assert/strict';
import { describe, test } from 'node:test';
import fn from './D.js';

describe('september_2021_B/lesson_2/D', () => {
  test('1', () => {
    assert.strictEqual(fn(['5 2', '0 2']), '2');
  });

  test('2', () => {
    assert.strictEqual(fn(['13 4', '1 4 8 11']), '4 8');
  });

  test('3', () => {
    assert.strictEqual(fn(['14 6', '1 6 8 11 12 13']), '6 8');
  });

  test('My', () => {
    assert.strictEqual(fn(['6 6', '0 1 2 3 4 5']), '2 3');

    assert.strictEqual(fn(['6 2', '0 5']), '0 5');

    assert.strictEqual(fn(['6 2', '0 4']), '0 4');
  });

  test('4 from bot', () => {
    assert.strictEqual(fn(['4 4', '0 1 2 3']), '1 2');
  });
});
