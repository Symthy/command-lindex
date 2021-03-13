import { Category, ICategory } from '@/apps/model/Category';
import { IResource, Resource } from '@/apps/model/Resource';
import Dexie from 'dexie';
import { IStoreSearcher } from '../../IStoreSearcher';
import { IStoreAccessor } from '../../IStoreUpdater';
import { ModelType, ModelTypeString } from '../../ModelTypes';

export class StoreAdapter implements IStoreAccessor, IStoreSearcher {
  private db: DexieDb;
  constructor();
  constructor(_db: Dexie);
  constructor(_db?: Dexie) {
    if (_db) {
      this.db = new DexieDb(_db);
    }
    this.db = new DexieDb();
  }

  insert(model: ModelType): void {
    this.db.getTable(model).add(model);
  }
  update(model: ModelType): void {
    this.db.getTable(model).put(model);
  }
  delete(model: ModelType): void {
    this.db.getTable(model).delete(model);
  }

  async findResource(model: Partial<Resource>): Promise<Resource> {
    return await this.db.getTable('Resource').get(model);
  }
  async findResourceAll(): Promise<Resource[]> {
    return await this.db.getTable('Resource').toArray();
  }
  async findCategory(model: Partial<Category>): Promise<Category> {
    return await this.db.getTable('Category').get(model);
  }
  async findCategoryAll(): Promise<Category[]> {
    return await this.db.getTable('Category').toArray();
  }
}

class DexieDb {
  private db: Dexie;
  private resources: Dexie.Table<IResource, number>;
  private categories: Dexie.Table<ICategory, number>;

  constructor(_db?: Dexie) {
    if (_db) {
      this.db = _db;
    } else {
      this.db = new Dexie('resourceLindexDB');
    }
    this.db.version(1).stores({
      resources:
        '++id, title, summary, detail categoryId, create_at, update_at',
      categories: '++id, name, orderNum, create_at, update_at',
    });
    this.resources = this.db.table('resources');
    this.categories = this.db.table('categories');
    this.resources.mapToClass(Resource);
    this.categories.mapToClass(Category);
  }

  getTable(model: ModelType | ModelTypeString): Dexie.Table | never {
    if (model instanceof Resource || model === 'Resource') {
      return this.resources;
    } else {
      return this.categories;
    }
  }
}
