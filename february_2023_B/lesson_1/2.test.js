import { test } from 'node:test';
import assert from 'node:assert/strict';
import fn from './2.js';

test('simplified two chars test - max at begin', () => {
  assert.strictEqual(fn(['2', 'abbaaba']), 5);
});

test('simplified two chars test - max at end', () => {
  assert.strictEqual(fn(['2', 'bbabaa']), 5);
});

test('1', () => {
  assert.strictEqual(fn(['2', 'abcaz']), 4);
});

test('2', () => {
  assert.strictEqual(fn(['2', 'helto']), 3);
});
