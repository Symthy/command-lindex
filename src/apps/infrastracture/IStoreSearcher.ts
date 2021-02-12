import { ModelType } from './DdModelType';

export interface IDbSearcher {
  find<T extends ModelType>(type: T): T;
  findAll<T extends ModelType>(type: T): T[];
}
