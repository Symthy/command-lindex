import { ModelType } from '../../DdModelType';
import { IDbSearcher } from '../../IDataSearcher';
import { IDbAccessor } from '../../IDbAccessor';

class ServerDbAccessor implements IDbAccessor, IDbSearcher{
  insert(query: any): void {
    throw new Error("Method not implemented.");
  }
  update(query: any): void {
    throw new Error("Method not implemented.");
  }
  delete(query: any): void {
    throw new Error("Method not implemented.");
  }
  find<T extends ModelType>(type: T): T {
    throw new Error("Method not implemented.");
  }
  findAll<T extends ModelType>(type: T): T[] {
    throw new Error("Method not implemented.");
  }
}
