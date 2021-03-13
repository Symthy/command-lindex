import { Category } from '@/apps/model/Category';
import { Resource } from '@/apps/model/Resource';
import { IStoreSearcher } from '../../IStoreSearcher';
import { IStoreAccessor } from '../../IStoreUpdater';
import { ModelType } from '../../ModelTypes';
import { StoreAdapter } from './DexieDb';

export class IndexedDBAccessor implements IStoreAccessor, IStoreSearcher {
  private db: IStoreAccessor & IStoreSearcher;

  constructor();
  constructor(db: IStoreAccessor & IStoreSearcher);
  constructor(db?: IStoreAccessor & IStoreSearcher) {
    if (db) {
      this.db = db;
    }
    this.db = new StoreAdapter();
  }

  insert(model: ModelType): void {
    if (model.create_at === undefined) {
      model.registerCreateTime();
    }
    this.db.insert(model);
  }
  update(model: ModelType): void {
    if (model.update_at === undefined) {
      model.registerUpdateTime();
    }
    this.db.update(model);
  }
  delete(model: ModelType): void {
    this.db.delete(model);
  }

  findResource(model: Partial<Resource>): Promise<Resource> {
    return this.db.findResource(model);
  }
  findResourceAll(): Promise<Resource[]> {
    return this.db.findResourceAll();
  }

  findCategory(model: Partial<Category>): Promise<Category> {
    return this.db.findCategory(model);
  }
  findCategoryAll(): Promise<Category[]> {
    return this.db.findCategoryAll();
  }
}
