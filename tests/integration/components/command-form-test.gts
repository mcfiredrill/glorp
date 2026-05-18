import { module, test } from 'qunit';
import { setupRenderingTest } from 'glorp/tests/helpers';
import { render } from '@ember/test-helpers';
import CommandForm from 'glorp/components/command-form';

module('Integration | Component | command-form', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Updating values is achieved using autotracking, just like in app code. For example:
    // class State { @tracked myProperty = 0; }; const state = new State();
    // and update using state.myProperty = 1; await rerender();
    // Handle any actions with function myAction(val) { ... };

    await render(<template><CommandForm /></template>);

    assert.dom().hasText('');

    // Template block usage:
    await render(<template>
      <CommandForm>
        template block text
      </CommandForm>
    </template>);

    assert.dom().hasText('template block text');
  });
});
