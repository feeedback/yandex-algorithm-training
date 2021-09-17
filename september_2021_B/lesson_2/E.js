/**
 * "E. Дипломы в папках" {@link "https://contest.yandex.ru/contest/28738/problems/E/}
 *
 * @param { number } folderCount целое число N (1 ≤ N ≤ 100) - количество папок
 * @param { Array<number> } diplomasCountByFolder массив целых чисел a1, a2, ..., aN (1 ≤ ai ≤ 100) - количество дипломов в каждой из папок.
 *
 * @return { number } минимальное количество секунд, необходимое в худшем случае для определения того, в какой папке содержится диплом.
 */
function calcMinSecondToFoundDiplomas(folderCount, diplomasCountByFolder) {
  return (
    diplomasCountByFolder.sort((a, b) => a - b).reduce((sum, diplomasCount) => sum + diplomasCount, 0) -
    diplomasCountByFolder[folderCount - 1]
  );
}

function inputProcessing(lines) {
  const folderCount = Number(lines[0]);
  const diplomasCountByFolder = lines[1].split(' ').map(Number);

  return calcMinSecondToFoundDiplomas(folderCount, diplomasCountByFolder);
}

export default inputProcessing;
