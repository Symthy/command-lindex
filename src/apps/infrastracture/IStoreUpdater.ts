// TODO: argument type
export interface IStoreAccessor {
  insert(query: any): void;
  update(query: any): void;
  delete(query: any): void;
}
