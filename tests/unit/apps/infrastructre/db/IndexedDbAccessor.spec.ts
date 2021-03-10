import { IndexedDBAccessor } from '@/apps/infrastracture/db/indexedDb/IndexedDbAccessor.ts';

test('insert', () => {
  const accessor = new IndexedDBAccessor();
  expect(() => {
    accessor.insert(0);
  }).toThrow('Method not implemented.');
});
