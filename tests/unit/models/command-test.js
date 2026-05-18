import { setupTest } from 'glorp/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | command', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('command', {});
    assert.ok(model, 'model exists');
  });
});
