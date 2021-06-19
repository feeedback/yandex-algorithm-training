/* eslint-disable default-case */
/* eslint-disable guard-for-in */
// https://contest.yandex.ru/contest/27665/problems/G

// Вам необходимо реализовать такую систему. Клиенты банка идентифицируются именами (уникальная
// строка, не содержащая пробелов). Первоначально у банка нет ни одного клиента. Как только для
// клиента проводится операция пололнения, снятия или перевода денег, ему заводится счет с нулевым
// балансом. Все дальнейшие операции проводятся только с этим счетом. Сумма на счету может быть как
// положительной, так и отрицательной, при этом всегда является целым числом.

// Формат ввода
// Входной файл содержит последовательность операций. Возможны следующие операции: DEPOSIT name sum
// - зачислить сумму sum на счет клиента name. Если у клиента нет счета, то счет создается.
// WITHDRAW name sum - снять сумму sum со счета клиента name. Если у клиента нет счета, то счет
// создается. BALANCE name - узнать остаток средств на счету клиента name. TRANSFER name1 name2 sum
// - перевести сумму sum со счета клиента name1 на счет клиента name2. Если у какого-либо клиента
// нет счета, то ему создается счет. INCOME p - начислить всем клиентам, у которых открыты счета,
// p% от суммы счета. Проценты начисляются только клиентам с положительным остатком на счету, если
// у клиента остаток отрицательный, то его счет не меняется. После начисления процентов сумма на
// счету остается целой, то есть начисляется только целое число денежных единиц. Дробная часть
// начисленных процентов отбрасывается.

// Формат вывода
// Для каждого запроса BALANCE программа должна вывести остаток на счету данного клиента. Если же у
// клиента с запрашиваемым именем не открыт счет в банке, выведите ERROR.

import fs from 'fs';
import readline from 'readline';

const rl = readline.createInterface({ input: fs.createReadStream('input.txt'), output: process.stdout });

const clients = new Map();

const createBankCard = (client) => {
  clients.set(client, 0);
};
const IsNoExistCreateBankCard = (client) => {
  if (!clients.has(client)) {
    createBankCard(client);
  }
};
const mapOperationToFn = {
  DEPOSIT: (client, money) => {
    IsNoExistCreateBankCard(client);

    clients.set(client, clients.get(client) + Number(money));
  },
  WITHDRAW: (client, money) => {
    IsNoExistCreateBankCard(client);

    clients.set(client, clients.get(client) - Number(money));
  },
  TRANSFER: (clientFrom, clientTo, money) => {
    IsNoExistCreateBankCard(clientFrom);
    IsNoExistCreateBankCard(clientTo);

    clients.set(clientFrom, clients.get(clientFrom) - Number(money));
    clients.set(clientTo, clients.get(clientTo) + Number(money));
  },
  INCOME: (percent) => {
    for (const everyClient of clients.keys()) {
      const amount = clients.get(everyClient);

      if (amount > 0) {
        const income = Math.floor((Number(percent) / 100) * amount);
        clients.set(everyClient, amount + income);
      }
    }
  },
  BALANCE: (client) => {
    const res = clients.has(client) ? String(clients.get(client)) : 'ERROR';
    process.stdout.write(`${res}\n`);
  },
};

rl.on('line', (input) => {
  const [operation, ...data] = input.split(' ');

  mapOperationToFn[operation](...data);
});
