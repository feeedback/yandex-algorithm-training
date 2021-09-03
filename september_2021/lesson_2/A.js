/**
 * "A. Количество равных максимальному" {@link "https://contest.yandex.ru/contest/28738/problems/A/}
 *
 * @param { Array<number } nums последовательность натуральных целых чисел, оканчивающаяся числом 0 (само число 0 в последовательность не входит).
 *
 * @return { number } . Определите, сколько элементов этой последовательности равны ее наибольшему элементу.
 * Числа, следующие за числом 0, считывать не нужно.
 */
function countEqualMax(nums) {
  const max = Math.max(...nums);
  let count = 0;

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === 0) {
      break;
    }
    if (nums[index] === max) {
      count += 1;
    }
  }
  return count;
}

function inputProcessing(lines) {
  const nums = lines.map(Number);

  return countEqualMax(nums);
}

export default inputProcessing;
