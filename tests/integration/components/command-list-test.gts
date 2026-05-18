import { module, test } from 'qunit';
import { setupRenderingTest } from 'glorp/tests/helpers';
import { render } from '@ember/test-helpers';
import CommandList from 'glorp/components/command-list';

module('Integration | Component | command-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the provided commands', async function (assert) {
    this.commands = [
      { id: '1', name: 'Deploy' },
      { id: '2', name: 'Backup' },
    ];

    await render(
      <template><CommandList @commands={{this.commands}} /></template>,
    );

    assert.dom('li').exists({ count: 2 });
    assert.dom('li:nth-child(1)').hasText('Deploy');
    assert.dom('li:nth-child(2)').hasText('Backup');
  });
});
