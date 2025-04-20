import assert from 'node:assert/strict';
import { describe, test } from 'node:test';
import fn from './B.js';

describe('march_2024/lesson_1/B', () => {
  test('team1 >', () => {
    assert.strictEqual(fn(['2:0', '0:0', '1']), 0);
  });
  test('team2 > (team2 > opponent pitch)', () => {
    assert.strictEqual(fn(['0:2', '0:0', '1']), 2 + 1); // 3:0
  });
  test('team2 > (first match 0:0) (team2 > home pitch)', () => {
    assert.strictEqual(fn(['0:0', '0:2', '1']), 2); // 2:2
  });
  test('team2 > (first match 0:0) (team2 > opponent pitch)', () => {
    assert.strictEqual(fn(['0:0', '0:2', '2']), 2 + 1); // 3:2
  });
  test('team2 > (team2 > home pitch)', () => {
    assert.strictEqual(fn(['0:2', '0:2', '1']), 4); // 4:2
  });
  test('team2 = team1', () => {
    assert.strictEqual(fn(['0:0', '0:0', '2']), 0 + 1); // 1:0
  });

  test('1 (team2 = team1)', () => {
    assert.strictEqual(fn(['0:0', '0:0', '1']), 0 + 1);
  });
  test('2', () => {
    assert.strictEqual(fn(['0:2', '0:3', '1']), 5);
  });
  test('3', () => {
    assert.strictEqual(fn(['0:2', '0:3', '2']), 5 + 1);
  });
  test('5', () => {
    assert.strictEqual(fn(['2:2', '1:1', '2']), 0);
  });
});
