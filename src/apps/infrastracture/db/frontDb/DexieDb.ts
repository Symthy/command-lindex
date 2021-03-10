import Dexie from 'dexie';
import { Category } from '@/apps/model/Category';
import { Resource } from '@/apps/model/Resource';

export class DexieDb extends Dexie {
  private _resources: Dexie.Table<Resource, number>;
  private _categories: Dexie.Table<Category, number>;

  constructor();
  constructor(db: Dexie);
  constructor() {
    super('resourceLindexDB');
    this.version(1).stores({
      resources: '++id, title, summary, detail, create_at, update_at',
      categories: '++id, name, order_num, create_at, update_at',
    });
    this._resources = this.table('resources');
    this._categories = this.table('categories');
    this._resources.mapToClass(Resource);
    this._categories.mapToClass(Category);
  }

  get resources() {
    return this._resources;
  }
  get categories() {
    return this._categories;
  }
}
