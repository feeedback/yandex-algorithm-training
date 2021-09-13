import { test, expect } from '@jest/globals';
import fn from './A.js';

test('1', () => {
  expect(fn(['1 3 2', '4 3 2'])).toStrictEqual(2);
});
