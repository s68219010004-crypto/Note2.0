const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// ตัวอย่าง array เก็บข้อมูลในหน่วยความจำ
let notes = [
  { id: '1', title: 'ถึงฉันในอีก 5 ปีข้างหน้า', detail: 'หวังว่าเธอจะมีชีวิตที่ดี ยิ้มได้เยอะๆ ในทุกๆ วันนะ!' }
];

// 1. READ: แสดงรายการทั้งหมด
app.get('/', (req, res) => {
  res.render('index', { notes: notes });
});

// 2. CREATE: เพิ่มข้อมูลใหม่
app.post('/add', (req, res) => {
  const { title, detail } = req.body;
  notes.push({
    id: Date.now().toString(),
    title: title,
    detail: detail
  });
  res.redirect('/');
});

// 3. UPDATE: แก้ไขข้อมูล
app.post('/update', (req, res) => {
  const { id, title, detail } = req.body;
  const note = notes.find(n => n.id === id);
  if (note) {
    note.title = title;
    note.detail = detail;
  }
  res.redirect('/');
});

// 4. DELETE: ลบข้อมูล
app.post('/delete/:id', (req, res) => {
  const { id } = req.params;
  notes = notes.filter(n => n.id !== id);
  res.redirect('/');
});

app.listen(3000, () => console.log('Server is running on port 3000'));