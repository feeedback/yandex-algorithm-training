const calcWorkingOsCount = (segmentsCount, segments) => {
  let existedOS = [];

  for (const segment of segments) {
    const [beginNew, endNew] = segment;

    existedOS = existedOS.filter(([begin, end]) => !(beginNew <= end && begin <= endNew));

    existedOS.push(segment);
  }

  return existedOS.length;
};

/**
 * "6. Операционные системы lite" {@link "https://contest.yandex.ru/contest/45468/problems/6}
 *
 * Васин жесткий диск состоит из M секторов. Вася последовательно устанавливал на него различные
 * операционные системы следующим методом: он создавал новый раздел диска из последовательных
 * секторов, начиная с сектора номер ai и до сектора bi включительно, и устанавливал на него
 * очередную систему. При этом, если очередной раздел хотя бы по одному сектору пересекается с
 * каким-то ранее созданным разделом, то ранее созданный раздел «затирается», и операционная
 * система, которая на него была установлена, больше не может быть загружена.
 * Напишите программу, которая по информации о том, какие разделы на диске создавал Вася,
 * определит, сколько в итоге работоспособных операционных систем установлено и работает в
 * настоящий момент на Васином компьютере.
 *
 * @param { string[] } lines Сначала вводятся натуральное число M — количество секторов на жестком
 * диске (1 ≤ M ≤ 10^9) и целое число N — количество разделов, которое последовательно создавал Вася
 * (0 ≤ N ≤ 1000). Далее идут N пар чисел ai и bi, задающих номера начального и конечного секторов
 * раздела (1 ≤ ai ≤ bi ≤ M).
 *
 * @return { number } Выведите одно число — количество работающих операционных систем на Васином
 * компьютере.
 */
function inputProcessing(lines) {
  // const maxNumber = Number(lines[0]);
  const segmentsCount = Number(lines[1]);
  const segments = lines.slice(2).map((pair) => pair.split(' ').map(Number));

  return calcWorkingOsCount(segmentsCount, segments);
}

export default inputProcessing;
