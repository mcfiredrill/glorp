import Service from '@ember/service';
import { module, test } from 'qunit';
import { setupTest } from 'glorp/tests/helpers';

module('Unit | Route | application', function (hooks) {
  setupTest(hooks);

  test('it restores the session during app boot', async function (assert) {
    assert.expect(1);

    class SessionStub extends Service {
      setup = async () => {
        assert.true(true);
      };
    }

    this.owner.register('service:session', SessionStub);

    const route = this.owner.lookup('route:application');

    await route.beforeModel();
  });
});
