const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('A:\TaskTracker\app\db\.database.db');



db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS task_card 
        (id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            descrip TEXT NOT NULL 
        )`, (err) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log('Table created successfully');
      }
    });
  });
  
const add_task_card = (title, descrip) => {
    const sql = 'INSERT INTO task_card (title, descrip) VALUES (?, ?)';
    const params = [title, descrip];

    db.run(sql, params, function (err) {
    if (err) {
        console.error(err.message);
    } else {
        console.log(`task card added with ID: ${this.lastID}`);
    }
    });
};

module.exports = {add_task_card};