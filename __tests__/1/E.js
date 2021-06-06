import { test, expect } from '@jest/globals';
import fn from '../../lessons/1/E.js';

// test('deep diff JSON files. format "stylish" (default)', () => {
//   expect(getDiff(filepathJsonA, filepathJsonB)).toBe(expectedStylish);
// });

test('1', () => {
  expect(fn(['89 20 41 1 11'])).toStrictEqual([2, 3]);
});
