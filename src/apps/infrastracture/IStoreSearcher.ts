import { ModelType } from './ModelTypes';

export interface IStoreSearcher {
  find<T extends ModelType>(type: T): T;
  findAll<T extends ModelType>(type: T): T[];
}
