// Бригада скорой помощи выехала по вызову в один из отделенных районов.
// К сожалению, когда диспетчер получил вызов, он успел записать только адрес дома и номер квартиры K1, а затем связь прервалась.
// Однако он вспомнил, что по этому же адресу дома некоторое время назад скорая помощь выезжала в квартиру K2, которая расположена в подъезда P2 на этаже N2.
//   Известно, что в доме M этажей и количество квартир на каждой лестничной площадке одинаково.
// Напишите программу, которая вычисляет номер подъезда P1 и номер этажа N1 квартиры K1.

// Формат ввода
// Во входном файле записаны пять положительных целых чисел K1, M, K2, P2, N2. Все числа не превосходят 10^6.

// Формат вывода
// Выведите два числа P1 и N1. Если входные данные не позволяют однозначно определить P1 или N1, вместо соответствующего числа напечатайте 0. Если входные данные противоречивы, напечатайте два числа –1 (минус один).

// import { input, output } from '../input-output.js';

function inputProcessing(lines) {
  const getPodezd = (floorRaw, floorMax) => Math.ceil(floorRaw / floorMax);
  const getFloor = (floorRaw, podezd, floorMax) => Math.floor(floorRaw - (podezd - 1) * floorMax);

  const [K1, M, K2, P2, N2] = lines[0].split(' ').map(Number);

  const floorMax = M;
  const oldAddr = {
    room: K2,
    floor: N2,
    podezd: P2,
  };
  const newAddr = {
    room: K1,
  };

  if (oldAddr.floor > floorMax || (oldAddr.podezd === 1 && oldAddr.room / oldAddr.floor < 1)) {
    return [-1, -1].join(' ');
  }

  if (floorMax === 1) {
    newAddr.floor = floorMax;
  }

  const roomByFloorRaw = Math.ceil(oldAddr.room / ((oldAddr.podezd - 1) * floorMax + oldAddr.floor));

  if (oldAddr.floor === 1 && oldAddr.podezd === 1) {
    const floorRaw = Math.ceil(newAddr.room / roomByFloorRaw);

    newAddr.podezd = floorRaw < floorMax ? getPodezd(floorRaw, floorMax) : 0;
    newAddr.floor = newAddr.floor ?? newAddr.room < oldAddr.room ? oldAddr.floor : 0;

    return [newAddr.podezd, newAddr.floor].join(' ');
  }

  const variantPodezd = new Set();
  const variantFloor = new Set();

  for (let roomByFloorI = roomByFloorRaw; roomByFloorI <= roomByFloorRaw + 1; roomByFloorI++) {
    const floorInputRaw = Math.ceil(oldAddr.room / roomByFloorI);
    const podezdInput = getPodezd(floorInputRaw, floorMax);
    const floorInput = getFloor(floorInputRaw, podezdInput, floorMax);

    if (floorInput === oldAddr.floor && podezdInput === oldAddr.podezd) {
      const floorRaw = Math.ceil(newAddr.room / roomByFloorI);
      const podezd = getPodezd(floorRaw, floorMax);
      const floor = newAddr.floor ?? getFloor(floorRaw, podezd, floorMax);

      variantPodezd.add(podezd);
      variantFloor.add(floor);
    }
  }

  const podezdArr = [...variantPodezd];
  const floorArr = [...variantFloor];

  if (podezdArr.length === 0 || floorArr.length === 0) {
    newAddr.podezd = -1;
    newAddr.floor = -1;
  } else {
    newAddr.podezd = podezdArr.length === 1 ? podezdArr[0] : 0;
    newAddr.floor = floorArr.length === 1 ? floorArr[0] : 0;
  }

  return [newAddr.podezd, newAddr.floor].join(' ');
}

export default inputProcessing;
