import { ModelType } from './ModelTypes';

export interface IStoreManager {
  checkConnect(): void
  getAll<T extends ModelType>(type: T): T[];
}
