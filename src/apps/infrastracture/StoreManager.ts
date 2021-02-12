import { IndexedDBAccessor } from './db/indexedDb/IndexedDbAccessor';
import { ModelType } from './DdModelType';
import { IDbAccessor } from './IDbAccessor';
import { IDbManager } from './IDbManager';

export class DbManager implements IDbManager, IDbAccessor {
  private accessors: Array<IDbAccessor>
  constructor() {
    this.accessors = [new IndexedDBAccessor()];
  }

  checkConnect(): void {
    throw new Error('Method not implemented.');
  }
  getAll<T extends ModelType>(type: T): T[] {
    throw new Error('Method not implemented.');
  }
  insert(query: any): void {
    throw new Error('Method not implemented.');
  }
  update(query: any): void {
    throw new Error('Method not implemented.');
  }
  delete(query: any): void {
    throw new Error('Method not implemented.');
  }
}
