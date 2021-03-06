import { test, expect } from '@jest/globals';
import fn from './C.js';

test('1', () => {
  expect(
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
  ).toStrictEqual([
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
  expect(fn(['oh you touch my tralala', 'mmm my ding ding dong'])).toStrictEqual([
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
  expect(fn(['ai ai ai ai ai ai ai ai ai ai'])).toStrictEqual(['ai']);
});
