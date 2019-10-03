const docx = require('docx');
const fs = require('fs');

const nameEvent = 'Открытый Кубок Рославльского района по каратэ WKF 2019 г., и открытый детский турнир по каратэ WKF на призы СРФСОО «Федерация каратэ Смоленской области»';
const placeEvent = 'г. Рославль';
const dateEvent = '07 апреля 2019';

// Create document
const doc = new docx.Document({
    creator: "Clippy",
    title: "Sample Document",
    description: "A brief example of using docx",
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
    .createParagraph(nameEvent)
    .style("topCol");

doc
    .Header
    .createParagraph('Итоговый протокол')
    .style("centerBold");

var leftText = new docx.TextRun(placeEvent).bold();
var rightText = new docx.TextRun(dateEvent).bold().tab();

doc
    .Header
    .createParagraph()
    .maxRightTabStop()
    .addRun(leftText)
    .addRun(rightText);

// let table = new docx.Table(1, 1);
let table = doc.Header.createTable(1,1);
table.setWidth(docx.WidthType.PERCENTAGE, '100%');
let row = table.getRow(0)
let cell = row.getCell(0)
cell.addContent(new docx.Paragraph().style('hideStyle'))

cell.CellProperties.Borders
    .addTopBorder(docx.BorderStyle.NIL, 0)
    .addBottomBorder(docx.BorderStyle.SINGLE, 1)
    .addStartBorder(docx.BorderStyle.NIL,  0)
    .addEndBorder(docx.BorderStyle.NIL, 0);


doc.Footer.createParagraph("Footer text");

doc.Styles.createParagraphStyle("Heading1", "Heading 1")
    .basedOn("Normal")
    .next("Normal")
    .quickFormat()
    .size(28)
    .bold()
    .italics()
    .spacing({ after: 120 });

doc.Styles.createParagraphStyle("Heading2", "Heading 2")
    .basedOn("Normal")
    .next("Normal")
    .quickFormat()
    .size(26)
    .bold()
    .underline("double", "FF0000")
    .spacing({ before: 240, after: 120 });

doc.Styles.createParagraphStyle("aside", "Aside")
    .basedOn("Normal")
    .next("Normal")
    .color("999999")
    .italics()
    .indent({ left: 720 })
    .spacing({ line: 276 });

doc.Styles.createParagraphStyle("wellSpaced", "Well Spaced")
    .basedOn("Normal")
    .spacing({ line: 276, before: 20 * 72 * 0.1, after: 20 * 72 * 0.05 });

doc.Styles.createParagraphStyle("ListParagraph", "List Paragraph")
    .quickFormat()
    .basedOn("Normal");

const numberedAbstract = doc.Numbering.createAbstractNumbering();
numberedAbstract.createLevel(0, "lowerLetter", "%1)", "left");

doc.createParagraph("Test heading1, bold and italicized").heading1();
doc.createParagraph("Some simple content");
doc.createParagraph("Test heading2 with double red underline").heading2();

const letterNumbering = doc.Numbering.createConcreteNumbering(numberedAbstract);
const letterNumbering5 = doc.Numbering.createConcreteNumbering(numberedAbstract);
letterNumbering5.overrideLevel(0, 5);

doc.createParagraph("Option1").setNumbering(letterNumbering, 0);
doc.createParagraph("Option5 -- override 2 to 5").setNumbering(letterNumbering5, 0);
doc.createParagraph("Option3").setNumbering(letterNumbering, 0);

doc
    .createParagraph()
    .createTextRun("Some monospaced content")
    .font("Monospace");

doc.createParagraph("An aside, in light gray italics and indented").style("aside");
doc.createParagraph("This is normal, but well-spaced text").style("wellSpaced");
const para = doc.createParagraph();
para.createTextRun("This is a bold run,").bold();
para.createTextRun(" switching to normal ");
para.createTextRun("and then underlined ").underline();
para.createTextRun("and back to normal.");

const packer = new docx.Packer();

packer.toBuffer(doc).then(buffer => {
    fs.writeFileSync("My First Document.docx", buffer);
});

// Done! A file called 'My First Document.docx' will be in your file system.
