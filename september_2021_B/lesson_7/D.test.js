import { test, expect } from '@jest/globals';
import fn from './D.js';

test('// no test?', () => {
  expect(fn(['2 1', '0 1', '0 1'])).toStrictEqual([2]);
});
