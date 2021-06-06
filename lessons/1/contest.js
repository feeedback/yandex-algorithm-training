const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const inputLines = [];

rl.on('line', (data) => {
  inputLines.push(data.toString());
});

rl.on('close', () => {
  const outputLines = inputProcessing(inputLines);
  process.stdout.write(Array.isArray(outputLines) ? outputLines.join('\n') : String(outputLines));
});

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
  // console.log({ oldAddress, floorMax });
  // const roomByFloor = Math.ceil(
  //   oldAddress.room / ((oldAddress.podezd - 1) / (oldAddress.floor % floorMax))
  // );
  if (oldAddress.floor > floorMax) {
    // console.log('oldAddress.floor > floorMax');
    return [-1, -1].join(' ');
  }
  if (oldAddress.podezd === 1) {
    // console.log('oldAddress.podezd === 1');
    if (oldAddress.room / oldAddress.floor < 1) {
      // console.log('oldAddress.room / oldAddress.floor < 1');
      return [-1, -1].join(' ');
    }
  } else if (oldAddress.room / (oldAddress.podezd * oldAddress.floor) < floorMax) {
    // console.log('oldAddress.room / (oldAddress.podezd * oldAddress.floor) < floorMax');
    return [-1, -1].join(' ');
  }
  if (oldAddress.room === output.room) {
    // console.log('oldAddress.room === output.room');
    return [oldAddress.podezd, oldAddress.floor].join(' ');
  }
  if (floorMax === 1) {
    // console.log('floorMax === 1');
    output.floor = floorMax;
  }
  if (oldAddress.floor === 1 && oldAddress.podezd === 1) {
    // console.log('oldAddress.floor === 1 && oldAddress.podezd === 1', 'этаж нельзя определить');
    const roomByFloor = Math.ceil(oldAddress.room / ((oldAddress.podezd - 1) * floorMax + oldAddress.floor));
    const newFloorRaw = Math.ceil(output.room / roomByFloor);
    output.podezd = Math.ceil(newFloorRaw / floorMax);
    return [output.podezd, output.floor ?? 0].join(' '); // этаж нельзя определить точно
  }
  // (output.room / oldAddress.room)
  const roomByFloor = Math.ceil(oldAddress.room / ((oldAddress.podezd - 1) * floorMax + oldAddress.floor));
  // let num_room_on_fl = math.ceil(int(K2) / ( (int(P2) - 1) * int(M) + int(N2) ))

  // console.log({ roomByFloor });

  const newFloorRaw = Math.ceil(output.room / roomByFloor);
  // console.log({ newFloorRaw });
  output.podezd = Math.ceil(newFloorRaw / floorMax);
  // output.floor = Math.floor((newFloorRaw - (output.podezd - 1) * floorMax) / roomByFloor);
  output.floor = Math.floor(newFloorRaw - (output.podezd - 1) * floorMax);
  // output.floor = (newFloorRaw % floorMax) + 1;
  // const roomByFloor = oldAddress.room / (floorMax * oldAddress.floor)
  // const [roomQuery, M, roomOld, P2, N2] = lines.map(Number);
  // количество квартир на каждой лестничной площадке одинаково.

  // floor (этаж) = от 1 до floorMax, если floorMax = 1, то floor = 1
  // podezd (подъезд) = от 1 до ?

  // если roomByFloor нельзя определить то podezd 0
  // если roomByFloor не сходится то данные противоречивы -1 -1
  return [output.podezd, output.floor].join(' ');
}
