const assert = require('node:assert');

describe('Utils rules', async function() {
  let mergedObject;

  before(function() {
    const mergeConfigs = require('./utils/merge-configs.js');

    const objectOne = {
      a: '1',
      b: {
        c: '3',
        d: {
          e: '4',
          f: '5',
        },
        g: '6',
      },
      h: ['7', '8'],
      i: ['9', '10'],
      m: '18',
    };

    const objectTwo = {
      a: '11',
      b: {
        c: '13',
        d: {
          e: '14',
          k: '16',
        },
        l: '17',
      },
      h: ['15'],
    };

    mergedObject = mergeConfigs({}, objectOne, objectTwo);
  });

  describe('Merge objects', function() {
    it('Overwrites shallow', function() {
      assert.strictEqual(mergedObject.a, '11');
    });

    it('Overwrites 1 deep', function() {
      assert.strictEqual(mergedObject.b.c, '13');
    });

    it('Adds 1 deep', function() {
      assert.strictEqual(mergedObject.b.l, '17');
    });

    it('Keeps 1 deep', function() {
      assert.strictEqual(mergedObject.b.g, '6');
    });

    it('Overwrites 2 deep', function() {
      assert.strictEqual(mergedObject.b.d.e, '14');
    });

    it('Adds 2 deep', function() {
      assert.strictEqual(mergedObject.b.d.k, '16');
    });

    it('Keeps 2 deep', function() {
      assert.strictEqual(mergedObject.b.d.f, '5');
    });

    it('Keeps all items in array', function() {
      assert.ok(mergedObject.h.includes('7'));
      assert.ok(mergedObject.h.includes('8'));
    });

    it('Add new field to array', function() {
      assert.ok(mergedObject.h.includes('15'));
    });

    it('Keeps array', function() {
      assert.ok(mergedObject.i.includes('9'));
      assert.ok(mergedObject.i.includes('10'));
    });

    it('Keeps flat object', function() {
      assert.strictEqual(mergedObject.m, '18');
    });
  });
});
