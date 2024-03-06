import { test, expect } from '@jest/globals';
import fn from './B.js';

test('team1 >', () => {
  expect(fn(['2:0', '0:0', '1'])).toStrictEqual(0);
});
test('team2 > (team2 > opponent pitch)', () => {
  expect(fn(['0:2', '0:0', '1'])).toStrictEqual(2 + 1); // 3:0
});
test('team2 > (first match 0:0) (team2 > home pitch)', () => {
  expect(fn(['0:0', '0:2', '1'])).toStrictEqual(2); // 2:2
});
test('team2 > (first match 0:0) (team2 > opponent pitch)', () => {
  expect(fn(['0:0', '0:2', '2'])).toStrictEqual(2 + 1); // 3:2
});
test('team2 > (team2 > home pitch)', () => {
  expect(fn(['0:2', '0:2', '1'])).toStrictEqual(4); // 4:2
});
test('team2 = team1', () => {
  expect(fn(['0:0', '0:0', '2'])).toStrictEqual(0 + 1); // 1:0
});

test('1 (team2 = team1)', () => {
  expect(fn(['0:0', '0:0', '1'])).toStrictEqual(0 + 1);
});
test('2', () => {
  expect(fn(['0:2', '0:3', '1'])).toStrictEqual(5);
});
test('3', () => {
  expect(fn(['0:2', '0:3', '2'])).toStrictEqual(5 + 1);
});
test('5', () => {
  expect(fn(['2:2', '1:1', '2'])).toStrictEqual(0);
});
