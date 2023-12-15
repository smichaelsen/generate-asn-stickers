export interface ILayout {
  columns: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  pageHeight: number;
  pageMarginHorizontal: number;
  pageMarginVertical: number;
  pageWidth: number;
  prefix: string;
  rows: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;
  start: number;
  stickerMarginHorizontal: number;
  stickerMarginVertical: number;
  unit: 'mm' | 'cm' | 'in';
}