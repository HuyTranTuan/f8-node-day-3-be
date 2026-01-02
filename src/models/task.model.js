const pool = require("../config/database");

class Task {
  async findAll() {
    const [rows, field] = await pool.query(`select * from tasks;`);
    return rows;
  }

  async findOne(id) {
    const [rows] = await pool.query(`select * from tasks where id = ${id};`);
    return rows[0];
  }

  async create(taskData) {
    const now = new Date();
    const [row] = await pool.query(
      `INSERT INTO tasks (title, completed, created_at, updated_at) VALUES (?, ?, ?, ?);`,
      [taskData.title, 0, now, now]
    );
    return row[0];
  }
  async update(id, taskData) {
    const [row] = await pool.query(
      `UPDATE tasks SET title = ?, completed = ? WHERE id = ?`,
      [taskData.title, taskData.completed, id]
    );
    return row.affectedRows > 0;
  }
  async destroy(id) {
    const [rows] = await pool.query(`delete from tasks where id = ${id};`);
    return rows[0];
  }
}

module.exports = new Task();
