import { Category } from '../model/Category';
import { Resource } from '../model/Resource';

export type ModelType = Resource | Category;

export type ModelTypeString = keyof typeof ModelTables;

export const ModelTables = {
  Resource: 'resources',
  Category: 'categories',
} as const;
