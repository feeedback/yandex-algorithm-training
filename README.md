# Тренировки по алгоритмам от Яндекса

[![wakatime](https://wakatime.com/badge/github/feeedback/yandex-algorithm-training.svg)](https://wakatime.com/badge/github/feeedback/yandex-algorithm-training)

Каждый поток:

- 8 лекций с домашними заданиями на платформе Яндекс.Контест и ответы на ваши вопросы;
- 20 задач в неделю (домашних заданий)
- 4 видео-трансляции с проверкой домашних заданий, разбором решений и популярных ошибок.

### Содержание

1. "Сложность, тестирование, особые случаи" [**(** лекция **)**](https://www.youtube.com/watch?v=QLhqYNsPIVo)
2. "Линейный поиск" [**(** лекция **)**](https://www.youtube.com/watch?v=SKwB41FrGgU)
3. "Множества" [**(** лекция **)**](https://www.youtube.com/watch?v=PUpmV2ieIHA)
4. "Словари и сортировка подсчётом" [**(** лекция **)**](https://www.youtube.com/watch?v=Nb5mW1yWVSs)
5. "Префиксные суммы и два указателя" [**(** лекция **)**](https://www.youtube.com/watch?v=de28y8Dcvkg)
6. "Бинарный поиск" [**(** лекция **)**](https://www.youtube.com/watch?v=YENpZexHfuk)
7. "Сортировка событий" [**(** лекция **)**](https://www.youtube.com/watch?v=hGixDBO-p6Q)
8. "Деревья" [**(** лекция **)**](https://www.youtube.com/watch?v=lEJzqHgyels)

### Июнь 2021

1. [контест](https://contest.yandex.ru/contest/27393) | [решение](june_2021/lesson_1/) 10/11
2. [контест](https://contest.yandex.ru/contest/27472) | [решение](june_2021/lesson_2/) 10/10
3. [контест](https://contest.yandex.ru/contest/27663) | [решение](june_2021/lesson_3/) 9/10
4. [контест](https://contest.yandex.ru/contest/27665) | [решение](june_2021/lesson_4/) 10/10
5. [контест](https://contest.yandex.ru/contest/27794) | [решение](june_2021/lesson_5/) 2/8
6. [контест](https://contest.yandex.ru/contest/27844) | [решение](june_2021/lesson_6/) 3/11
7. [контест](https://contest.yandex.ru/contest/27883) | _решение_ 0/10
8. [контест](https://contest.yandex.ru/contest/28069) | _решение_ 0/10

### Сентябрь 2021

_Дивизион B_

1. [контест](https://contest.yandex.ru/contest/28730/) | [решение](september_2021_B/lesson_1/) 5/5
2. [контест](https://contest.yandex.ru/contest/28738/) | [решение](september_2021_B/lesson_2/) 5/5
3. [контест](https://contest.yandex.ru/contest/28964/) | [решение](september_2021_B/lesson_3/) 5/5
4. [контест](https://contest.yandex.ru/contest/28970/) | [решение](september_2021_B/lesson_4/) 5/5
5. [контест](https://contest.yandex.ru/contest/29075/) | _решение_ 0/5
6. [контест](https://contest.yandex.ru/contest/29188/) | [решение](september_2021_B/lesson_6/) 1/5

_Дивизион A_

1. [контест](https://contest.yandex.ru/contest/28724/) | [решение](september_2021_A/lesson_1/) 2/5

**Для запуска тестов**: `npm test [filepath]`

**Как отправляю решение в Я.Контест:**

- копирую/вставляю функцию с обработки логики `inputProcessing` из файла конкретной задачи,
- копирую/вставляю содержимое файла [`contest-io-template.js`](https://github.com/feeedback/yandex-interview-contest/tree/main/contest-io-template.js), для обработки ввода-вывода

_(Если решение с выводом понемногу в функции логики (для производительности), то копирую уже цельный код из файла конкретной задачи)_
