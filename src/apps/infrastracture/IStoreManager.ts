import { ModelType } from './DdModelType';

export interface IDbManager {
  checkConnect(): void
  getAll<T extends ModelType>(type: T): T[];
}
