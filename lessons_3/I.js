// https://contest.yandex.ru/contest/27663/problems/I/

// Каждый из N школьников некоторой школы знает M языков. Определите, какие языки знают все
// школьники и языки, которые знает хотя бы один из школьников.

// Формат ввода Первая строка входных данных содержит количество школьников N. Далее идет N чисел M,
// после каждого из чисел идет Mi строк, содержащих названия языков, которые знает i-й
// школьник. Длина названий языков не превышает 1000 символов, количество различных языков не более
// 1000. 1 ≤ N ≤ 1000, 1 ≤ Mi ≤ 500.

// Формат вывода В первой строке выведите количество языков, которые знают все школьники. Начиная
// со второй строки - список таких языков. Затем - количество языков, которые знает хотя бы один
// школьник, на следующих строках - список таких языков.

function inputProcessing(lines) {
  const N = Number(lines[0]); // школьники

  const studentsLanguages = [];

  for (let i = 1; i < lines.length; i++) {
    const M = Number(lines[i]);

    if (Number.isInteger(M)) {
      studentsLanguages.push(lines.slice(i + 1, i + 1 + M));
    }
  }

  const mapLanguageToCount = {};
  const atLeastOneStudentLang = [];
  const everyStudentLang = [];

  for (const studentLangs of studentsLanguages) {
    for (const lang of studentLangs) {
      if (!mapLanguageToCount[lang]) {
        mapLanguageToCount[lang] = 0;
      }
      mapLanguageToCount[lang] += 1;

      if (mapLanguageToCount[lang] === 1) {
        atLeastOneStudentLang.push(lang);
      }
      if (mapLanguageToCount[lang] === N) {
        everyStudentLang.push(lang);
      }
    }
  }

  // console.log({ mapLanguageToCount, atLeastOneStudentLang, everyStudentLang });

  return [
    everyStudentLang.length,
    ...everyStudentLang,
    atLeastOneStudentLang.length,
    ...atLeastOneStudentLang,
  ];
}

(async () => {
  const inputLines = ['3', '3', 'Russian', 'English', 'Japanese', '2', 'Russian', 'English', '1', 'English'];
  console.log({ inputLines });

  const outputLines = inputProcessing(inputLines);
  console.log({ outputLines });
})();

export default inputProcessing;
