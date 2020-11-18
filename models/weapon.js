module.exports = class Weapon {
  constructor(id, item) {
    this.id = id;
    this.item = item;
  }

  static fetchAll() {
    return [
      {
        id: 1,
        item: 'Hand gun',
      },
      {
        id: 2,
        item: 'Cannon',
      },
    ];
  }
};
