import { IStoreAccessor } from '../../IStoreUpdater';

export class IndexedDBAccessor implements IStoreAccessor {
  insert(query: any): void {
    throw new Error("Method not implemented.");
  }
  update(query: any): void {
    throw new Error("Method not implemented.");
  }
  delete(query: any): void {
    throw new Error("Method not implemented.");
  }
}
