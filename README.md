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

1. [контест](https://contest.yandex.ru/contest/27393/problems/) | [решение](june_2021/lesson_1/) 10/11
2. [контест](https://contest.yandex.ru/contest/27472/problems/) | [решение](june_2021/lesson_2/) 10/10
3. [контест](https://contest.yandex.ru/contest/27663/problems/) | [решение](june_2021/lesson_3/) 9/10
4. [контест](https://contest.yandex.ru/contest/27665/problems/) | [решение](june_2021/lesson_4/) 10/10
5. [контест](https://contest.yandex.ru/contest/27794/problems/) | [решение](june_2021/lesson_5/) 2/8
6. [контест](https://contest.yandex.ru/contest/27844/problems/) | [решение](june_2021/lesson_6/) 3/11
7. [контест](https://contest.yandex.ru/contest/27883/problems/) | _решение_ 0/10
8. [контест](https://contest.yandex.ru/contest/28069/problems/) | _решение_ 0/10

### Сентябрь 2021

_Дивизион ***B***_

1. [контест](https://contest.yandex.ru/contest/28730/problems/) | [решение](september_2021_B/lesson_1/) 5/5
2. [контест](https://contest.yandex.ru/contest/28738/problems/) | [решение](september_2021_B/lesson_2/) 5/5
3. [контест](https://contest.yandex.ru/contest/28964/problems/) | [решение](september_2021_B/lesson_3/) 5/5
4. [контест](https://contest.yandex.ru/contest/28970/problems/) | [решение](september_2021_B/lesson_4/) 5/5
5. [контест](https://contest.yandex.ru/contest/29075/problems/) | _решение_ 0/5
6. [контест](https://contest.yandex.ru/contest/29188/problems/) | [решение](september_2021_B/lesson_6/) 2/5
7. [контест](https://contest.yandex.ru/contest/29396/problems/) | [решение](september_2021_B/lesson_7/) 3/5

_Дивизион **A**_

1. [контест](https://contest.yandex.ru/contest/28724/problems/) | [решение](september_2021_A/lesson_1/) 2/5

### Февраль 2023

_Дивизион **B**_

1. [контест 1-10](https://contest.yandex.ru/contest/45468/problems/) | [решение](february_2023_B/lesson_1/) 9/10 (_Блок_ "закрепление предыдущих Тренировок" - _лекции 1-8_)

### Март 2024

_также делаю решение на Go_

1. [контест](https://contest.yandex.ru/contest/59539/problems/) | [решение](march_2024/lesson_1/) 2/10

**Для запуска тестов**: `npm test [filepath]`

**Как отправляю решение в Я.Контест:**

- копирую/вставляю функцию с обработки логики `inputProcessing` из файла конкретной задачи,
- копирую/вставляю содержимое файла [`contest-io-template.js`](https://github.com/feeedback/yandex-interview-contest/tree/main/contest-io-template.js), для обработки ввода-вывода

_(Если решение с выводом понемногу в функции логики (для производительности), то копирую уже цельный код из файла конкретной задачи)_
