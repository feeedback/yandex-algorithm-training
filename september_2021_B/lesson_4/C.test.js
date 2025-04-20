import { test } from 'node:test';
import assert from 'node:assert/strict';;
import fn from './C.js';

test('1', () => {
  assert.deepStrictEqual(
    fn([
      'hi',
      'hi',
      'what is your name',
      'my name is bond',
      'james bond',
      'my name is damme',
      'van damme',
      'claude van damme',
      'jean claude van damme',
    ])
    , [
      'damme',
      'is',
      'name',
      'van',
      'bond',
      'claude',
      'hi',
      'my',
      'james',
      'jean',
      'what',
      'your',
    ]);
});

test('2', () => {
  assert.deepStrictEqual(fn(['oh you touch my tralala', 'mmm my ding ding dong']), [
    'ding',
    'my',
    'dong',
    'mmm',
    'oh',
    'touch',
    'tralala',
    'you',
  ]);
});

test('3', () => {
  assert.deepStrictEqual(fn(['ai ai ai ai ai ai ai ai ai ai']), ['ai']);
});
