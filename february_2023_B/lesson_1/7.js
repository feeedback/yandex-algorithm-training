const timeToSec = (timeStr) => {
  const [h, m, s] = timeStr.split(':');

  return parseInt(h, 10) * 60 * 60 + parseInt(m, 10) * 60 + parseInt(s, 10);
};

const secToTime = (totalSeconds) => {
  const hour = Math.floor(totalSeconds / 3600) % 24;
  const minute = Math.floor(totalSeconds / 60) % 60;
  const sec = totalSeconds % 60;

  const f = (num) => String(num).padStart(2, '0');

  return `${f(hour)}:${f(minute)}:${f(sec)}`;
};

const getClientTime = (reqSentTimeStr, serverTimeStr, reqReceivedTimeStr) => {
  const [reqSentTime, serverTime, reqReceivedTimeRaw] = [
    reqSentTimeStr,
    serverTimeStr,
    reqReceivedTimeStr,
  ].map(timeToSec);

  const reqReceivedTime =
    reqReceivedTimeRaw < reqSentTime
      ? reqReceivedTimeRaw + 24 * 3600
      : reqReceivedTimeRaw;

  const clientTime =
    serverTime + Math.round((reqReceivedTime - reqSentTime) / 2);

  return secToTime(clientTime);
};

/**
 * "7. SNTP" {@link "https://contest.yandex.ru/contest/45468/problems/7}
 *
 * 1. Клиент отправляет запрос на сервер и запоминает время отправления A (по клиентскому времени)
 * 2. Сервер получает запрос в момент времени B (по точному серверному времени) и отправляет клиенту
 * сообщение, содержащее время B.
 * 3. =Клиент получает ответ на свой запрос в момент времени C (по клиентскому времени) и запоминает
 * его. Теперь клиент, из предположения, что сетевые задержки при передаче сообщений от клиента
 * серверу и от сервера клиенту одинаковы, может определить и установить себе точное время,
 * используя известные значения A, B, C.Вам предстоит реализовать алгоритм, с точностью до
 * секунды определяющий точное время для установки на клиенте по известным A, B и C. При
 * необходимости округлите результат до целого числа секунд по правилам арифметики (в меньшую
 * сторону, если дробная часть числа меньше 1/2, иначе в большую сторону).
 *
 * @param { string[] } lines Программа получает на вход три временные метки A, B, C, по одной в
 * каждой строке. Все временные метки представлены в формате «hh:mm:ss», где «hh» – это часы, «mm»
 * – минуты, «ss» – секунды. Часы, минуты и секунды записываются ровно двумя цифрами каждое
 * (возможно, с дополнительными нулями в начале числа).
 *
 * @return { string } Программа должна вывести одну временную метку в формате, описанном во входных
 * данных, – вычисленное точное время для установки на клиенте. В выводе не должно быть пробелов,
 * пустых строк в начале вывода.
 */
function inputProcessing(lines) {
  const reqSentTime = lines[0];
  const serverTime = lines[1];
  const reqReceivedTime = lines[2];

  return getClientTime(reqSentTime, serverTime, reqReceivedTime);
}

export default inputProcessing;
