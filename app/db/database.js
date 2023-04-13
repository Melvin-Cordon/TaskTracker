const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('../db/TaskTrackerDB.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the myDatabase database.');
});

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

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Database connection closed.');
});


module.exports = {

add_task_card: function(title, descrip) {

  const db = new sqlite3.Database('../db/TaskTrackerDB.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to TaskTrackerDB.');
  });

  const sql = 'INSERT INTO task_card (title, descrip) VALUES (?, ?)';
  const params = [title, descrip];

  db.run(sql, params, function (err) {
  if (err) {
      console.error(err.message);
  } else {
      console.log(`task card added with ID: ${this.lastID}`);
  }
  })
  
  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Database connection closed.');
  });
  
  
  }

  



};