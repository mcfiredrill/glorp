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
        <li>{{command.name}} - <a href="{{command.url}}" _target="_blank">{{command.s3Key}}</a> - {{command.mediaType}}</li>
      {{/each}}
    </ul>
  </template>
}
