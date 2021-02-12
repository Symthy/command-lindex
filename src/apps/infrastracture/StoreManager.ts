import { IndexedDBAccessor } from './db/indexedDb/IndexedDbAccessor';
import { IStoreManager } from './IStoreManager';
import { IStoreAccessor } from './IStoreUpdater';
import { ModelType } from './ModelTypes';

export class StoreManager implements IStoreManager, IStoreAccessor {
  private accessors: Array<IStoreAccessor>
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
