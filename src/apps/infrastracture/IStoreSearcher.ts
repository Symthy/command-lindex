import { Category } from '../model/Category';
import { Resource } from '../model/Resource';

export interface IStoreSearcher {
  findResource(model: Partial<Resource>): Promise<Resource>;
  findResourceAll(): Promise<Resource[]>;
  findCategory(model: Partial<Category>): Promise<Category>;
  findCategoryAll(): Promise<Category[]>;
}
