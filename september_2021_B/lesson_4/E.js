/**
 * "E. Форум" {@link "https://contest.yandex.ru/contest/28970/problems/E/}
 *
 * Форум имеет следующую структуру: каждое сообщение либо начинает новую тему, либо является
 * ответом на какое-либо предыдущее сообщение и принадлежит той же теме.
 *
 * @param { string[] } text строки содержат описание сообщений в хронологическом порядке. Описание
 * сообщения, которое представляет собой начало новой темы, состоит из трех строк. Первая строка
 * содержит число 0. Вторая строка содержит название темы. Длина названия не превышает 30 символов.
 * Третья строка содержит текст сообщения.
 *
 * @return { string } Выведите название темы, к которой относится наибольшее количество
 * сообщений. Если таких тем несколько, то выведите первую в хронологическом порядке
 */
function calcMostPopularTopic(text) {
  const mapTopicIdToTitle = new Map();
  const mapTopicIdToMessageCount = new Map();
  const mapMessageIndexToRelatedTopicId = new Map();
  let messageIndex = 0;
  let topicId = 0;

  for (let i = 0; i < text.length; i += 1) {
    const line = Number(text[i]);

    if (Number.isNaN(line)) {
      continue;
    }
    messageIndex += 1;

    if (line === 0) {
      topicId += 1;
      const topic = text[i + 1];
      mapMessageIndexToRelatedTopicId.set(messageIndex, topicId);
      mapTopicIdToTitle.set(topicId, topic);

      mapTopicIdToMessageCount.set(topicId, 0);
    } else {
      const topicIdAssociatedWithThisMessage = mapMessageIndexToRelatedTopicId.get(line);
      mapMessageIndexToRelatedTopicId.set(messageIndex, topicIdAssociatedWithThisMessage);

      mapTopicIdToMessageCount.set(
        topicIdAssociatedWithThisMessage,
        mapTopicIdToMessageCount.get(topicIdAssociatedWithThisMessage) + 1
      );
    }
  }

  const maxAnswerToTopic = Math.max(...[...mapTopicIdToMessageCount.values()]);
  const [mostPopularTopicId] = [...mapTopicIdToMessageCount].find(([, count]) => count === maxAnswerToTopic);

  return mapTopicIdToTitle.get(mostPopularTopicId);
}

function inputProcessing(lines) {
  const messages = lines.slice(1);

  return calcMostPopularTopic(messages);
}

export default inputProcessing;
