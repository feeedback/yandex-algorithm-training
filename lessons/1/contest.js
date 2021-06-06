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
    // console.log({ roomByFloor, newFloorRaw });

    output.podezd = newFloorRaw < floorMax ? Math.ceil(newFloorRaw / floorMax) : 0;
    output.floor = output.floor ?? output.room < oldAddress.room ? oldAddress.floor : 0;
    // console.log({ output });
    return [output.podezd, output.floor].join(' '); // этаж нельзя определить точно
  }

  const roomByFloorRaw = Math.ceil(oldAddress.room / ((oldAddress.podezd - 1) * floorMax + oldAddress.floor));
  // const newFloorRaw = Math.ceil(output.room / roomByFloor);
  // console.log({
  //   roomByFloor,
  //   newFloorRaw,
  // });
  const variantRoomByFloor = new Set();
  const variantPodezd = new Set();
  const variantFloor = new Set();

  // output.podezd = newFloorRaw < floorMax ? Math.ceil(newFloorRaw / floorMax) : 0;
  for (let roomByFloorI = roomByFloorRaw; roomByFloorI <= roomByFloorRaw + 1; roomByFloorI++) {
    // console.log(`oldAddress.room ${oldAddress.room} / roomByFloorI ${roomByFloorI}`);
    const floorInputRaw = Math.ceil(oldAddress.room / roomByFloorI);
    const podezdInput = Math.ceil(floorInputRaw / floorMax);
    const floorInput = Math.floor(floorInputRaw - (podezdInput - 1) * floorMax);
    // console.log({ floorInputRaw, floorInput, podezdInput });

    if (floorInput === oldAddress.floor && podezdInput === oldAddress.podezd) {
      variantRoomByFloor.add(roomByFloorI);

      const newFloorRaw = Math.ceil(output.room / roomByFloorI);
      const podezd = Math.ceil(newFloorRaw / floorMax);
      const floor = output.floor ?? Math.floor(newFloorRaw - (podezd - 1) * floorMax);

      // console.log({ newFloorRaw, podezd, floor });
      variantPodezd.add(podezd);
      variantFloor.add(floor);
    }
  }
  // console.log({ variantRoomByFloor });
  // console.log({ variantPodezd });
  // console.log({ variantFloor });

  const podezdArr = [...variantPodezd];
  const floorArr = [...variantFloor];

  if (podezdArr.length === 0 || floorArr.length === 0) {
    output.podezd = -1;
    output.floor = -1;
  } else {
    output.podezd = podezdArr.length === 1 ? podezdArr[0] : 0;
    output.floor = floorArr.length === 1 ? floorArr[0] : 0;
  }
  // floor (этаж) = от 1 до floorMax, если floorMax = 1, то floor = 1
  // podezd (подъезд) = от 1 до ?

  // если roomByFloor нельзя определить то podezd 0
  // если roomByFloor не сходится то данные противоречивы -1 -1
  // console.log({ output });
  return [output.podezd, output.floor].join(' ');
}
