// https://contest.yandex.ru/contest/27663/problems/H/

// Вы никогда не задумывались, почему в Angry Birds у птиц нет крыльев? Тем же вопросом задались разработчики новой игры.
// В их версии смысл игры прямо противоположен Angry Birds:
// зеленая свинка стреляет по злым птицам из лазерного ружья(завязка явно не хуже исходной игры).

// // Птицы в игре представляются точками на плоскости.
// Выстрел сбивает только ближайшую птицу находящуюся на линии огня.При этом сбитая птица падая сбивает всех птиц, находящихся ровно под ней.
// Две птицы не могут находиться в одной точке.По заданному расположению птиц
// необходимо определить, какое минимальное количество выстрелов необходимо, чтобы все птицы были сбиты.

// // Формат ввода
// // Первая строка входного файла содержит единственное целое число N (1 ≤ N ≤ 1000) — количество птиц.

// // Следующие N строк содержат по два натуральных числа каждая xi, yi — координаты i-ой птицы (0 < x, y ≤ 109).
// Свинка находится в точке с координатами(0, 0).

// // Формат вывода
// // Единственная строка выходного файла должна содержать
// одно целое число — минимальное количество выстрелов, необходимое для того, чтобы сбить всех птиц.

function inputProcessing(lines) {
  const [NRaw, ...birdsXYRaw] = lines;
  const N = Number(NRaw); // N (1 ≤ N ≤ 1000)

  const birdsXY = birdsXYRaw.map((xy) => xy.split(' ').map(Number));

  const mapXToBirdsXY = {};
  for (const [x, y] of birdsXY) {
    if (!mapXToBirdsXY[x]) {
      mapXToBirdsXY[x] = [];
    }
    mapXToBirdsXY[x].push([x, y]);
  }

  console.log(mapXToBirdsXY);
  // const [pigX, pigY] = [0, 0];
  const maxXY = Math.max(...birdsXY.flat());
  console.log({ N });
  console.log({ birdsXY, maxXY });

  const mapDefinitionToSymbol = { MINE: '*', ZERO_MINES_NEARBY: 0 };

  class Minesweeper {
    constructor(x = 9, y = 9, mines = 10, minesXY = 0) {
      if (mines > x * y) {
        throw new Error('ERROR: mines more than cell');
      }
      this.x = x;
      this.y = y;
      this.mines = mines;
      this.birdsXY = minesXY;

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
      for (const [x, y] of this.birdsXY) {
        this.field[y][x] = mapDefinitionToSymbol.MINE;
      }
    }

    init() {
      this.field = this._initFieldAndFillValue(mapDefinitionToSymbol.ZERO_MINES_NEARBY);
      this._initMines();
      // this._calculateMinesAndSetCounterValues();
    }
  }

  const game = new Minesweeper(maxXY + 1, maxXY + 1, N, birdsXY);

  game.field.forEach((y) => console.log(y.join(' ')));
  return Object.keys(mapXToBirdsXY).length;
}

(async () => {
  // const inputLines = ['6', '1 1', '2 2', '3 3', '2 1', '3 2', '3 1'];
  const inputLines = [6, '1 1', '2 2', '3 3', '2 1', '3 2', '3 4'];
  console.log({ inputLines });

  const outputLines = inputProcessing(inputLines);
  console.log({ outputLines });
})();

export default inputProcessing;
