const db = require('../util/database');

module.exports = class Weapon {
  constructor(id, item) {
    this.id = id;
    this.item = item;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM weapons');
  }

  static post(item) {
    return db.execute('INSERT INTO weapons (item) VALUES (?)', [item]);
  }

  static update(id, item) {
    return db.execute('UPDATE weapons SET item = ? WHERE id=?', [item, id]);
  }

  static delete(id) {
    return db.execute('DELETE FROM weapons WHERE id=?', [id]);
  }
};
