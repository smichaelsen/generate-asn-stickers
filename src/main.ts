import './style.css'
import { ILayout } from './ILayout';
import { generatePdf } from './generatePdf.ts';

document.querySelector('#generate')?.addEventListener('click', (e) => {
  e.preventDefault();
  const layout: ILayout = {
    stickerMarginHorizontal: 4,
    stickerMarginVertical: 2,
    columns: 4,
    pageHeight: 297,
    pageMarginHorizontal: 8,
    pageMarginVertical: 13.3,
    pageWidth: 210,
    prefix: '',
    rows: 16,
    start: 1000,
    unit: 'mm',
  };
  generatePdf(layout);
});