/**
 * "D. Лавочки в атриуме" {@link "https://contest.yandex.ru/contest/28738/problems/D/}
 *
 * @param { number } benchLength  длина лавочки 1- 10 000
 * @param { number } leftCoordsBlock различных целых неотрицательных чисел, задающих положение
   каждой ножки. Положение ножки определяется расстоянием от левого края плиты до левого края ножки
   (ножка - это куб размером 1×1×1). Ножки перечислены слева направо (то есть начиная с ножки с
   меньшим расстоянием до левого края).
 *
 * @return { string } Требуется перечислить ножки, которые студентам нужно оставить. Для каждой
 * ножки нужно выдать ее положение, как оно задано во входных данных. Ножки следует перечислять
 * слева направо, в том порядке, в котором они встречаются во входных данных.
 */
function calcWhichBlockStay(benchLength, leftCoordsBlock) {
  let minBlockNeed = 1;
  if (benchLength % 2 === 0) {
    minBlockNeed = 2; // может быть два блока минимум
  }
  const setBlock = new Set(leftCoordsBlock);
  const centerIndex = Math.floor((benchLength - 1) / 2);

  for (let delta = 0, leftBlock = null, rightBlock = null; delta <= centerIndex + 1; delta++) {
    const indexL = centerIndex - delta;
    const indexR = centerIndex + delta;

    if (leftBlock === null && setBlock.has(indexL)) {
      if (minBlockNeed === 1 && indexL === centerIndex) {
        return `${indexL}`;
      }
      leftBlock = indexL;
    }
    if (rightBlock === null && indexR !== leftBlock && setBlock.has(indexR)) {
      rightBlock = indexR;
    }

    if (leftBlock !== null && rightBlock !== null) {
      return `${leftBlock} ${rightBlock}`;
    }
  }
}

function inputProcessing(lines) {
  const [benchLength] = lines[0].split(' ').map(Number); // ,blockCount
  const leftCoordsBlock = lines[1].split(' ').map(Number);

  return calcWhichBlockStay(benchLength, leftCoordsBlock);
}

export default inputProcessing;
