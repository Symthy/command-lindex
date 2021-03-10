import { ExcludeMethods } from '@/apps/type';
import { IStoreAccessor } from '../../IStoreUpdater';
import { DexieDb } from './DexieDb';

type DbType = ExcludeMethods<DexieDb>;

export class IndexedDBAccessor implements IStoreAccessor {
  private db: DbType;
  constructor();
  constructor(db: DbType);
  constructor(db?: DbType) {
    if (db) {
      this.db = db;
    }
    this.db = new DexieDb();
  }

  insert(query: any): void {
    this.db.resources.put(query);
  }
  update(query: any): void {
    this.db.resources.update(0, query);
  }
  delete(query: any): void {
    this.db.resources.delete(query);
  }
}
