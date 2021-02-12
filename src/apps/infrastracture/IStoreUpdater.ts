
// TODO: argument type
export interface IDbAccessor {
  insert(query: any): void;
  update(query: any): void;
  delete(query: any): void;
}
