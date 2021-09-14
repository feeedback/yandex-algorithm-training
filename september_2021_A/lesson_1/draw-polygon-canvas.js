// import { JSDOM } from 'jsdom';
import canvasLib from 'canvas';
import { promises as fsp } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const { createCanvas } = canvasLib;
// const getDOMDocument = (data) => new JSDOM(data).window.document;
// const document = getDOMDocument(``);
function drawPoint(context, x, y, label, color = '#000', size = 5) {
  // to increase smoothing for numbers with decimal part
  const pointX = Math.round(x);
  const pointY = Math.round(y);

  context.beginPath();
  context.fillStyle = color;
  context.arc(pointX, pointY, size, 0 * Math.PI, 2 * Math.PI);
  context.fill();

  if (label) {
    const textX = pointX;
    const textY = Math.round(pointY - size - 3);

    context.font = 'bold 14px Arial';
    // context.fillStyle = "rgba(0, 0, 0, 0.9)";
    context.fillStyle = 'rgba(0, 0, 0, 1)';
    context.textAlign = 'center';
    context.fillText(label, textX, textY);
  }
}

const getDist = (a, b) => Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2);
const getMinXY = (points) => {
  const min = {
    x: Math.min(...points.map(({ x, y }) => x)),
    y: Math.min(...points.map(({ x, y }) => y)),
  };
  const max = {
    x: Math.max(...points.map(({ x, y }) => x)),
    y: Math.max(...points.map(({ x, y }) => y)),
  };
  return { min, max };
};

// eslint-disable-next-line no-unused-vars
const canvasBoxCreate = () => {
  const parentForCanvas = document.createElement('div');

  parentForCanvas.classList.add('boxCanvas');
  document.body.appendChild(parentForCanvas);

  return parentForCanvas;
};

const canvasCreate = (width, height, parent) => {
  // const canvasCreate = (width, height, parent = document.body) => {
  // const canv = document.createElement('canvas');
  // const canv = document.createElement('canvas');
  // const canv = createCanvas(width, height, 'svg');
  const canv = createCanvas(width, height);

  // canv.setAttribute('id', 'canvas');
  // canv.setAttribute('width', `${width}px`);
  // canv.setAttribute('height', `${height}px`);
  // canv.style.border = '1px solid rgba(0, 0, 0, 0.2)';

  // parent.appendChild(canv);
  return canv;
};

const drawFigure = (ctx, ...points) => {
  ctx.beginPath();
  const [startPoints, ...restPoints] = points;

  ctx.moveTo(startPoints.x, startPoints.y);

  for (const point of restPoints) {
    ctx.lineTo(point.x, point.y);
  }

  ctx.closePath();
  ctx.lineWidth = 1;
  // ctx.strokeStyle = "rgba(0, 0, 0, 0.7)";
  ctx.strokeStyle = 'rgba(0, 0, 0, 1)';
  ctx.stroke();
  ctx.fillStyle = 'rgba(0, 255,0, 0.3)';
  ctx.fill();
};

const generateLabelsToVerticles = (points) => {
  const labels = {};
  const labelinit = 'A'.charCodeAt(); // const nameInit = 'a'.charCodeAt()

  for (let index = 0; index < points.length; index++) {
    labels[index] = `${String.fromCharCode(labelinit + index)} (${points[index].x}, ${points[index].y})`;
  }

  return labels;
};

const createFnZoom =
  (shiftXY, zoomRatio) =>
  ({ x = 0, y = 0 }) => ({ x: (x - shiftXY.x) * zoomRatio, y: (y - shiftXY.y) * zoomRatio });

const canvasInit = (points) => {
  const minAndMax = getMinXY(points);
  const maxSide = getDist(minAndMax.min, minAndMax.max) || 1;

  const zoomRatio = 800 / 1.1 / maxSide;
  const labels = generateLabelsToVerticles(points);

  const maxLengthLabels = Math.max(...Object.values(labels).map((l) => l.length));
  const startXY = { x: 15 + 3 * maxLengthLabels, y: 10 + 1.5 * maxLengthLabels };
  const shiftXY = { x: minAndMax.min.x - startXY.x / zoomRatio, y: minAndMax.min.y - startXY.y / zoomRatio };

  const getZoomed = createFnZoom(shiftXY, zoomRatio);
  const zoomedPoints = points.map(getZoomed);
  // const boxForCanvas = canvasBoxCreate()
  const canvas = canvasCreate(getZoomed(minAndMax.max).x + startXY.x, getZoomed(minAndMax.max).y + startXY.y);
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  return { canvas, ctx, zoomedPoints, labels };
};
const nowTime = (now = new Date()) => now.toLocaleTimeString('ru-Ru');

const getDirname = (url) => path.dirname(fileURLToPath(url)); // import.meta.url
const canvasToFilePng = (index, canvas) =>
  // const uriCanvas = canvas.toDataURL();

  // const dataBase64 = uriCanvas.split(',')[1];
  // // const bufferImageData = Buffer.from(dataBase64).toString('base64');
  // console.log(dataBase64);
  // fs.writeFileSync('./secondDemo.png', dataBase64, 'base64');
  // fs.writeFileSync('./out.png', canvas.toBuffer());
  // fs.writeFileSync('./out.png', canvas.toBuffer('image/png', { compressionLevel: 0 }));
  fsp.writeFile(
    path.resolve(getDirname(import.meta.url), `./img/figure_${index}_${nowTime().replace(/:/g, '_')}.jpeg`),
    // canvas.toBuffer('image/jpeg', { quality: 0.96, progressive: true, chromaSubsampling: true })
    canvas.toBuffer('image/jpeg', { quality: 0.7, progressive: true, chromaSubsampling: true })
  );
function drawFigureMain(figures) {
  const promises = [];
  for (let figureIndex = 0; figureIndex < figures.length; figureIndex++) {
    const points = figures[figureIndex];
    console.time('нарисовал');
    const { canvas, ctx, zoomedPoints, labels } = canvasInit(points);

    drawFigure(ctx, ...zoomedPoints);

    for (let index = 0; index < zoomedPoints.length; index++) {
      const point = zoomedPoints[index];
      const label = labels[index];

      drawPoint(ctx, point.x, point.y, label, 'black', 3);
    }
    console.timeEnd('нарисовал');
    promises.push(canvasToFilePng(figureIndex, canvas));
  }
  return Promise.allSettled(promises);
}
// const example1 = [
//   { x: 1, y: 1 },
//   { x: 1, y: 2 },
//   { x: 2, y: 2 },
//   { x: 2, y: 1 },
// ];
// const example2 = [
//   { x: 1, y: 1 },
//   { x: 4, y: 50 },
//   { x: 2, y: 200 },
// ];

// const example3 = [
//   { x: -11, y: -12 },
//   { x: -14, y: -14 },
//   { x: -12, y: -13 },
//   { x: -10, y: -10 },
// ];
// drawFigureMain([example1, example2, example3]);

export default drawFigureMain;
