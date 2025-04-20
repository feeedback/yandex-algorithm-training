import assert from 'node:assert/strict';
import { describe, test } from 'node:test';
import fn from './D.js';

describe('september_2021_B/lesson_4/D', () => {
  test('1', () => {
    assert.deepStrictEqual(
      fn(['Party One 100000', 'Party Two 200000', 'Party Three 400000']),
      ['Party One 64', 'Party Two 129', 'Party Three 257']
    );
  });

  test('2', () => {
    assert.deepStrictEqual(fn(['Party number one 100', 'Partytwo 100']), [
      'Party number one 225',
      'Partytwo 225',
    ]);
  });

  test('3', () => {
    assert.deepStrictEqual(fn(['Party number one 449', 'Partytwo 1']), [
      'Party number one 449',
      'Partytwo 1',
    ]);
  });

  test('My "Если же для двух партий эти дробные части равны, то преимущество отдается той партии, которая получила большее число голосов"', () => {
    assert.deepStrictEqual(fn(['a 12', 'b 5', 'c 43']), [
      'a 90',
      'b 37',
      'c 323',
    ]);
  });

  // Поиск случая когда важно условия из теста выше

  // import { randomInt } from 'crypto';
  // const aCode = 'a'.charCodeAt();
  // const size = 3;
  // for (let n = 0; n < 10000; n++) {
  //   const data = new Array(size)
  //     .fill(null)
  //     .map((_, i) => `${String.fromCharCode(aCode + (i % size))} ${randomInt(1, 50)}`);
  //   const result = fn(data);
  //   if (result === null) {
  //     console.log(data);
  //     break;
  //   }
  // }
});
