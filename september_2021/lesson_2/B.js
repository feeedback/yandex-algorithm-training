/**
 * "B. Дома и магазины" {@link "https://contest.yandex.ru/contest/28738/problems/B/}
 *
 * @param { Array<number } buildingList десять чисел, каждое задает тип здания: 1 - обозначает
 * жилой дом, 2 - обозначает магазин, 0 - обозначает офисное здание. Гарантируется, что есть хотя
 * бы один жилой дом и хотя бы один магазин.
 *
 * @return { number } одно целое число: наибольшее расстояние от дома до ближайшего к нему
 * магазина. Расстояние между двумя соседними домами считается равным 1 (если между двумя домами
 * есть еще один дом, то расстояние между ними равно 2 и т.д.)
 */
function calcMaxDistanceFromHomeToShop(buildingList) {
  let prevShopIndex = null;
  let maxDistance = -Infinity;
  let houseWithoutTwoShop = [];

  for (let index = 0; index < buildingList.length; index++) {
    switch (buildingList[index]) {
      case 1:
        houseWithoutTwoShop.push(index);
        break;
      case 2:
        if (prevShopIndex !== null) {
          for (const houseIndex of houseWithoutTwoShop) {
            const distance = Math.min(Math.abs(houseIndex - index), Math.abs(houseIndex - prevShopIndex));

            if (distance > maxDistance) {
              maxDistance = distance;
            }
          }
          houseWithoutTwoShop = [];
        }

        prevShopIndex = index;
        break;
    }
  }

  for (const houseIndex of houseWithoutTwoShop) {
    const distance = Math.abs(houseIndex - prevShopIndex);

    if (distance > maxDistance) {
      maxDistance = distance;
    }
  }

  return maxDistance;
}

function inputProcessing(lines) {
  const nums = lines[0].split(' ').map(Number);

  return calcMaxDistanceFromHomeToShop(nums);
}

export default inputProcessing;
