// https://contest.yandex.ru/contest/27472/problems/I/

// Вам необходимо построить поле для игры "Сапер" по его конфигурации – размерам и координатам расставленных на нем мин.

// Вкратце напомним правила построения поля для игры "Сапер":

// Поле состоит из клеток с минами и пустых клеток
// Клетки с миной обозначаются символом *
// Пустые клетки содержат число ki,j, 0≤ ki, j ≤ 8 – количество мин на соседних клетках.
// Соседними клетками являются восемь клеток, имеющих смежный угол или сторону.

// Формат ввода
// В первой строке содержатся три числа: N, 1 ≤ N ≤ 100 - количество строк на поле, M, 1 ≤ M ≤ 100
// - количество столбцов на поле, K, 0 ≤ K ≤ N ⋅ M - количество мин на поле.

// В следующих K строках содержатся по два числа с координатами мин: p, 1 ≤ p ≤ N - номер строки
// мины, q, 1 ≤ 1 ≤ M - номер столбца мины.

// Формат вывода
// Выведите построенное поле, разделяя строки поля переводом строки, а столбцы - пробелом.

function inputProcessing(lines) {
  const [config, ...minesYXRaw] = lines;
  const [Y, X, MINES] = config.split(' ').map(Number);
  const minesXY = minesYXRaw.map((yx) => yx.split(' ').map(Number));
  // console.log({ X, Y, MINES });
  // console.log({ minesXY });
  const mapDefinitionToSymbol = { MINE: '*', ZERO_MINES_NEARBY: 0 };

  class Minesweeper {
    constructor(x = 9, y = 9, mines = 10) {
      if (mines > x * y) {
        throw new Error('ERROR: mines more than cell');
      }
      this.x = x;
      this.y = y;
      this.mines = mines;

      this.init();
    }

    _initFieldAndFillValue(value) {
      return Array.from({ length: this.y }, () => new Array(this.x).fill(value));
    }

    _getArea8(cellX, cellY) {
      const area8 = [];
      for (let y = cellY - 1; y <= cellY + 1; y += 1) {
        for (let x = cellX - 1; x <= cellX + 1; x += 1) {
          if (y >= 0 && y < this.y && x >= 0 && x < this.x && !(cellX === x && cellY === y)) {
            area8.push({ x, y });
          }
        }
      }
      return area8;
    }

    _increaseMineCounterInArea8(mineX, mineY) {
      this._getArea8(mineX, mineY).forEach(({ x, y }) => {
        const cellValue = this.field[y][x];
        if (cellValue !== mapDefinitionToSymbol.MINE) {
          this.field[y][x] = cellValue + 1;
        }
      });
    }

    _calculateMinesAndSetCounterValues() {
      this.field.forEach((row, y) =>
        row.forEach((cell, x) => {
          if (cell === mapDefinitionToSymbol.MINE) {
            this._increaseMineCounterInArea8(x, y);
          }
        })
      );
    }

    _initMines() {
      for (const [y, x] of minesXY) {
        this.field[y - 1][x - 1] = mapDefinitionToSymbol.MINE;
      }
    }

    init() {
      this.field = this._initFieldAndFillValue(mapDefinitionToSymbol.ZERO_MINES_NEARBY);
      this._initMines();
      this._calculateMinesAndSetCounterValues();
    }
  }

  const game = new Minesweeper(X, Y, MINES);

  return game.field.map((y) => y.join(' '));
}

(async () => {
  // const inputLines = ['3 2 2', '1 1', '2 2'];
  const inputLines = ['4 4 4', '1 3', '2 1', '4 2', '4 4'];
  console.log({ inputLines });

  const outputLines = inputProcessing(inputLines);
  console.log({ outputLines });
})();

export default inputProcessing;
