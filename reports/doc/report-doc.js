const docx = require('docx');
const fs = require('fs');
const event = require('../helpers/event');

// Create document
const doc = new docx.Document({
    creator: "Sport Events System",
    title: "Total Report",
    description: "Итоговый отчет",
});

doc.Styles.createParagraphStyle("topCol", "top Col")
    .basedOn("Normal")
    .next("Normal")
    .quickFormat()
    .font("Times New Roman")
    .size(20)
    .center()
    .bold()
    .spacing({ after: 220 });

doc.Styles.createParagraphStyle("centerBold", "Center Bold")
    .basedOn("topCol")
    .next("topCol")
    .allCaps()
    .size(24)
    .spacing({ after: 60 });

doc.Styles.createParagraphStyle("hideStyle", "hideStyle")
    .basedOn("Normal")
    .next("Normal")
    .size(6);

doc
    .Header
    .createParagraph(event.eventInfo.nameEvent)
    .style("topCol");

doc
    .Header
    .createParagraph('Итоговый протокол')
    .style("centerBold");

var leftText = new docx.TextRun(event.eventInfo.place).bold();
var rightText = new docx.TextRun(event.eventInfo.date).bold().tab();

doc
    .Header
    .createParagraph()
    .maxRightTabStop()
    .addRun(leftText)
    .addRun(rightText);

let table = doc.Header.createTable(1,1);
table.setWidth(docx.WidthType.PERCENTAGE, '100%');
let row = table.getRow(0);
let cell = row.getCell(0);
cell.addContent(new docx.Paragraph().style('hideStyle'));

cell.CellProperties.Borders
    .addTopBorder(docx.BorderStyle.NIL, 0)
    .addBottomBorder(docx.BorderStyle.SINGLE, 1)
    .addStartBorder(docx.BorderStyle.NIL,  0)
    .addEndBorder(docx.BorderStyle.NIL, 0);

const packer = new docx.Packer();

packer.toBuffer(doc).then(buffer => {
    fs.writeFileSync("Report.docx", buffer);
});
