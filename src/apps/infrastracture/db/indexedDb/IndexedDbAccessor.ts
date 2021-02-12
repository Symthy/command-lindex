import { IDbAccessor } from '../../IDbAccessor';

export class IndexedDBAccessor implements IDbAccessor {
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
