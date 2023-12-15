import { jsPDF } from "jspdf";
import { ILayout } from './ILayout.ts';
import { generateBarcode } from './generateBarcode.ts';

export function generatePdf(layout: ILayout): void {
  const barcodesToGenerate = layout.columns * layout.rows;
  console.log(`Generating PDF with numbers from ${layout.start} to ${layout.start + barcodesToGenerate - 1}...`);
  const doc = new jsPDF({unit: layout.unit, format: [layout.pageWidth, layout.pageHeight]});

  const stickerWidth = (layout.pageWidth - layout.pageMarginHorizontal * 2) / layout.columns;
  const stickerHeight = (layout.pageHeight - layout.pageMarginVertical * 2) / layout.rows;
  const textHeight = 4;

  doc.setFontSize(10);
  for (let i = 0; i < barcodesToGenerate; i++) {
    const currentColumn = i % layout.columns;
    const currentRow = Math.floor(i / layout.columns);
    const barcodeText = `${layout.prefix}${layout.start + i}`;
    const barcodeImage = generateBarcode(barcodeText);
    const stickerX = layout.pageMarginHorizontal + currentColumn * stickerWidth;
    const stickerY = layout.pageMarginVertical + currentRow * stickerHeight;
    const codeX = stickerX + layout.stickerMarginHorizontal;
    const codeY = stickerY + layout.stickerMarginVertical;
    const codeWidth = stickerWidth - layout.stickerMarginHorizontal * 2;
    const codeHeight = stickerHeight - layout.stickerMarginVertical * 2 - textHeight;
    doc.addImage(barcodeImage, 'PNG', codeX, codeY, codeWidth, codeHeight);

    const textWidth = doc.getTextWidth(barcodeText);
    const textX = codeX + (codeWidth / 2) - (textWidth / 2);
    const textY = codeY + codeHeight + textHeight;
    doc.text(barcodeText, textX, textY);
  }
  doc.save("a4.pdf");
}