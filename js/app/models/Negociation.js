class Negociation {
  constructor(createAt, quantity, price) {
    this._createAt = new Date(createAt.getTime());
    this._quantity = quantity;
    this._price = price;
    Object.freeze(this);
  }

  get volume() {
    return this._quantity * this._price;
  }

  get createAt() {
    return new Date(this._createAt.getTime());
  }

  get quantity() {
    return this._quantity;
  }

  get price() {
    return this._price;
  }
}
