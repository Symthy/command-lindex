import { DateTimeHolder, generateDateTime } from './TimeGenerator';

export interface ICategory {
  id?: number;
  name: string;
  orderNum: number;
  create_at?: Date;
  update_at?: Date;
}

export class Category implements ICategory, DateTimeHolder {
  private _id?: number;
  private _create_at?: Date;
  private _update_at?: Date;
  constructor(
    private _name: string,
    private _orderNum: number,
    _id?: number,
    _create_at?: Date,
    _update_at?: Date
  ) {
    if (_id) this._id = _id;
    if (_create_at) this._create_at = _create_at;
    if (_update_at) this._update_at = _update_at;
  }

  registerCreateTime() {
    this._create_at = generateDateTime();
  }
  registerUpdateTime(): void {
    this._update_at = generateDateTime();
  }

  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get orderNum() {
    return this._orderNum;
  }
  get create_at() {
    return this._create_at;
  }
  get update_at() {
    return this._update_at;
  }
}
