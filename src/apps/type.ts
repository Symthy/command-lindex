type MethodsTypeNever<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any ? never : K;
};

export type ExcludeMethods<T> = Pick<T, MethodsTypeNever<T>[keyof T]>;
