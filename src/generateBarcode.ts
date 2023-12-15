import bwipjs from 'bwip-js';

let canvas = document.createElement('canvas');

export function generateBarcode(text: string): string {
  bwipjs.toCanvas(canvas, {
    bcid: 'code128',
    text,
  });
  return canvas.toDataURL('image/png');
}
