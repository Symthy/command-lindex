import { IndexedDBAccessor } from '@/apps/infrastracture/db/frontDb/IndexedDbAccessor';
import { Category } from '@/apps/model/Category';
import { Resource } from '@/apps/model/Resource';

const Dexie = require('dexie');
const indexedDB = require('fake-indexeddb');
const IDBKeyRange = require('fake-indexeddb/lib/FDBKeyRange');
const testDb = new Dexie('testDatabase', {
  indexedDB: indexedDB,
  IDBKeyRange: IDBKeyRange,
});

testDb.version(1).stores({
  resources: '++id, title, summary, detail categoryId, create_at, update_at',
  categories: '++id, name, orderNum, create_at, update_at',
});
testDb.resources = testDb.table('resources');
testDb.categories = testDb.table('categories');
testDb.resources.mapToClass(Resource);
testDb.categories.mapToClass(Category);

const accessor = new IndexedDBAccessor(testDb);
const title = 'title';
const summary = 'summary';
const detail = 'detail';
const categoryId = 1;
const resource = new Resource(title, summary, detail, categoryId, 1);

// test('insert of Resource', async () => {
//   await testDb.transaction('rw', testDb.resources, async () => {
//     await testDb.resources.add(resource);
//     return await testDb.resources.toArray().then((array: { title: any, summary: any, detail: any, categoryId: any, create_at: any, update_at: any; }[]) => {
//       expect(array[0].title).toBe(title);
//       expect(array[0].summary).toBe(summary);
//       expect(array[0].detail).toBe(detail);
//       expect(array[0].categoryId).toBe(categoryId);
//       expect(array[0].create_at).toBeDefined();
//       expect(array[0].update_at).toBeUndefined();
//     });
//   });
// })

test('insert of Resource', async () => {
  await accessor.insert(resource);
  return accessor.findResourceAll().then((array) => {
    expect(array.length).toBe(1);
    expect(array[0].id).toBeDefined();
    expect(array[0].title).toBe(title);
    expect(array[0].summary).toBe(summary);
    expect(array[0].detail).toBe(detail);
    expect(array[0].categoryId).toBe(categoryId);
    expect(array[0].create_at).toBeDefined();
    expect(array[0].update_at).toBeUndefined();
  });
});

test('update of Resource', async () => {
  const resource2 = new Resource(
    'update',
    resource.summary,
    resource.detail,
    resource.categoryId,
    resource.id,
    resource.create_at
  );
  await accessor.update(resource2);
  return accessor.findResourceAll().then((array) => {
    expect(array.length).toBe(1);
    expect(array[0].id).toBe(resource.id);
    expect(array[0].title).toBe('update');
    expect(array[0].summary).toBe(summary);
    expect(array[0].detail).toBe(detail);
    expect(array[0].categoryId).toBe(categoryId);
    expect(array[0].create_at).toEqual(resource.create_at);
    expect(array[0].update_at).toBeDefined();
  });
});
