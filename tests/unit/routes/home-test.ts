import Service from '@ember/service';
import { module, test } from 'qunit';
import { setupTest } from 'glorp/tests/helpers';

module('Unit | Route | home', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:home');
    assert.ok(route);
  });

  test('it requests commands when authenticated', async function (assert) {
    assert.expect(2);

    class SessionStub extends Service {
      isAuthenticated = true;
    }

    class StoreStub extends Service {
      async findAll(modelName: string) {
        assert.strictEqual(modelName, 'command');

        return [
          { id: 1, name: 'Deploy' },
          { id: 2, name: 'Backup' },
        ];
      }
    }

    this.owner.register('service:session', SessionStub);
    this.owner.register('service:store', StoreStub);

    const route = this.owner.lookup('route:home');
    const model = await route.model();

    assert.deepEqual(model, {
      commands: [
        { id: '1', name: 'Deploy' },
        { id: '2', name: 'Backup' },
      ],
    });
  });

  test('it skips loading commands when unauthenticated', async function (assert) {
    assert.expect(1);

    class SessionStub extends Service {
      isAuthenticated = false;
    }

    class StoreStub extends Service {
      async findAll() {
        assert.true(false, 'store.findAll should not be called');
        return [];
      }
    }

    this.owner.register('service:session', SessionStub);
    this.owner.register('service:store', StoreStub);

    const route = this.owner.lookup('route:home');
    const model = await route.model();

    assert.deepEqual(model, { commands: [] });
  });
});
