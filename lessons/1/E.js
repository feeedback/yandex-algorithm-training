// Бригада скорой помощи выехала по вызову в один из отделенных районов.
// К сожалению, когда диспетчер получил вызов, он успел записать только адрес дома и номер квартиры K1, а затем связь прервалась.
// Однако он вспомнил, что по этому же адресу дома некоторое время назад скорая помощь выезжала в квартиру K2, которая расположена в подъезда P2 на этаже N2.
//   Известно, что в доме M этажей и количество квартир на каждой лестничной площадке одинаково.
// Напишите программу, которая вычисляет номер подъезда P1 и номер этажа N1 квартиры K1.

// Формат ввода
// Во входном файле записаны пять положительных целых чисел K1, M, K2, P2, N2. Все числа не превосходят 10^6.

// Формат вывода
// Выведите два числа P1 и N1. Если входные данные не позволяют однозначно определить P1 или N1, вместо соответствующего числа напечатайте 0. Если входные данные противоречивы, напечатайте два числа –1 (минус один).

// import { input, output } from '../../input-output.js';

function inputProcessing(lines) {
  const [K1, M, K2, P2, N2] = lines[0].split(' ').map(Number);

  const floorMax = M;

  const oldAddress = {
    room: K2,
    floor: N2,
    podezd: P2,
  };
  const output = {
    room: K1,
    // podezd: P2,
    // floor: N2,
  };
  console.log({ oldAddress, floorMax });
  // const roomByFloor = Math.ceil(
  //   oldAddress.room / ((oldAddress.podezd - 1) / (oldAddress.floor % floorMax))
  // );
  if (oldAddress.floor > floorMax) {
    console.log('oldAddress.floor > floorMax');
    return [-1, -1];
  }
  if (oldAddress.podezd === 1) {
    console.log('oldAddress.podezd === 1');
    if (oldAddress.room / oldAddress.floor < 1) {
      console.log('oldAddress.room / oldAddress.floor < 1');
      return [-1, -1];
    }
  } else if (oldAddress.room / (oldAddress.podezd * oldAddress.floor) < floorMax) {
    console.log('oldAddress.room / (oldAddress.podezd * oldAddress.floor) < floorMax');
    return [-1, -1];
  }
  // if (oldAddress.room === output.room) {
  //   console.log('oldAddress.room === output.room');
  //   return [oldAddress.podezd, oldAddress.floor];
  // }
  if (floorMax === 1) {
    console.log('floorMax === 1');
    output.floor = floorMax;
  }
  if (oldAddress.floor === 1 && oldAddress.podezd === 1) {
    console.log('oldAddress.floor === 1 && oldAddress.podezd === 1', 'этаж нельзя определить');
    const roomByFloor = Math.ceil(oldAddress.room / ((oldAddress.podezd - 1) * floorMax + oldAddress.floor));
    // let num_room_on_fl = math.ceil(int(K2) / ( (int(P2) - 1) * int(M) + int(N2) ))

    console.log({ roomByFloor });

    const newFloorRaw = Math.ceil(output.room / roomByFloor);
    console.log({ newFloorRaw });
    output.podezd = Math.ceil(newFloorRaw / floorMax);
    return [output.podezd, output.floor ?? 0]; // этаж нельзя определить
  }
  // (output.room / oldAddress.room)
  const roomByFloor = Math.ceil(oldAddress.room / ((oldAddress.podezd - 1) * floorMax + oldAddress.floor));
  // let num_room_on_fl = math.ceil(int(K2) / ( (int(P2) - 1) * int(M) + int(N2) ))

  console.log({ roomByFloor });

  const newFloorRaw = Math.ceil(output.room / roomByFloor);
  console.log({ newFloorRaw });
  output.podezd = Math.ceil(newFloorRaw / floorMax);
  // output.floor = Math.floor((newFloorRaw - (output.podezd - 1) * floorMax) / roomByFloor);
  output.floor = output.floor ?? Math.floor(newFloorRaw - (output.podezd - 1) * floorMax);
  // output.floor = (newFloorRaw % floorMax) + 1;
  // const roomByFloor = oldAddress.room / (floorMax * oldAddress.floor)
  // const [roomQuery, M, roomOld, P2, N2] = lines.map(Number);
  // количество квартир на каждой лестничной площадке одинаково.

  // floor (этаж) = от 1 до floorMax, если floorMax = 1, то floor = 1
  // podezd (подъезд) = от 1 до ?

  // если roomByFloor нельзя определить то podezd 0
  // если roomByFloor не сходится то данные противоречивы -1 -1
  return output;
}

(async () => {
  // const inputLines = await input(3);
  const inputLines = ['89 20 41 1 11'];
  // console.log({ inputLines });
  const outputLines = inputProcessing(inputLines);
  console.log({ outputLines });
  // output(outputLines);
})();
