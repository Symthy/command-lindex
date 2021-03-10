import { IStoreSearcher } from '../../IStoreSearcher';
import { IStoreAccessor } from '../../IStoreUpdater';
import { ModelType } from '../../ModelTypes';

class ServerDbAccessor implements IStoreAccessor, IStoreSearcher {
  insert(query: any): void {
    throw new Error('Method not implemented.');
  }
  update(query: any): void {
    throw new Error('Method not implemented.');
  }
  delete(query: any): void {
    throw new Error('Method not implemented.');
  }
  find<T extends ModelType>(type: T): T {
    throw new Error('Method not implemented.');
  }
  findAll<T extends ModelType>(type: T): T[] {
    throw new Error('Method not implemented.');
  }
}
