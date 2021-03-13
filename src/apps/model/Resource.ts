import { DateTimeHolder, generateDateTime } from './TimeGenerator';

export interface IResource {
  id?: number;
  title: string;
  summary: string;
  detail: string;
  categoryId: number;
  create_at?: Date;
  update_at?: Date;
}

export class Resource implements IResource, DateTimeHolder {
  private _id?: number;
  private _create_at?: Date;
  private _update_at?: Date;
  constructor(
    private _title: string,
    private _summary: string,
    private _detail: string,
    private _categoryId: number,
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
  get title() {
    return this._title;
  }
  get summary() {
    return this._summary;
  }
  get detail() {
    return this._detail;
  }
  get categoryId() {
    return this._categoryId;
  }
  get create_at() {
    return this._create_at;
  }
  get update_at() {
    return this._update_at;
  }
}
