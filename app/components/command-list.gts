import Component from '@glimmer/component';
import type Command from 'glorp/models/command';

export interface CommandListSignature {
  Args: {
    commands: Array<Command>;
  };
  Blocks: {
    default: [];
  };
  Element: null;
}

export default class CommandList extends Component<CommandListSignature> {
  <template>
    <ul>
      {{#each @commands key="id" as |command|}}
        <li>{{command.name}}</li>
      {{/each}}
    </ul>
  </template>
}
