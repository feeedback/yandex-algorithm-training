import { test } from 'node:test';
import assert from 'node:assert/strict';;
import fn from './E.js';

test('1', () => {
  assert.strictEqual(
    fn([
      '7',
      '0',
      'Олимпиада по информатике',
      'Скоро третья командная олимпиада?',
      '0',
      'Новая компьютерная игра',
      'Вышла новая крутая игра!',
      '1',
      'Она пройдет 24 ноября',
      '1',
      'В Санкт-Петербурге и Барнауле',
      '2',
      'Где найти?',
      '4',
      'Примет участие более 50 команд',
      '6',
      'Интересно, какие будут задачи',
    ])
    , 'Олимпиада по информатике');
});

test('2', () => {
  assert.strictEqual(fn(['1', '0', 'topic 1', 'body 1']), 'topic 1');
});

test('My - cЕсли таких тем несколько, то выведите первую в хронологическом порядкеc', () => {
  assert.strictEqual(
    fn([
      '4',
      '0',
      'Олимпиада по информатике',
      'Скоро третья командная олимпиада?',
      '0',
      'Новая компьютерная игра',
      'Вышла новая крутая игра!',
      '1',
      'Она пройдет 24 ноября',
      '2',
      'Где найти?',
    ])
    , 'Олимпиада по информатике');
});

test('6 from bot ~ similar', () => {
  assert.strictEqual(
    fn([
      '25',
      '0',
      'topic 1',
      'message_text',
      '1',
      'message_text',
      '1',
      'message_text',
      '2',
      'message_text',
      '0',
      'topic 2',
      'message_text',
      '5',
      'message_text',
      '0',
      'topic 3',
      'message_text',
      '4',
      'message_text',
      '4',
      'message_text',
      '2',
      'message_text',
      '0',
      'topic 4',
    ])
    , 'topic 1');
});
