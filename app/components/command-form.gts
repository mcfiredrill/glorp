import Component from '@glimmer/component';
import { Input } from '@ember/component';
import { tracked } from '@glimmer/tracking';

export interface CommandFormSignature {
  // The arguments accepted by the component
  Args: {};
  // Any blocks yielded by the component
  Blocks: {
    default: []
  };
  // The element to which `...attributes` is applied in the component template
  Element: ;
}

export default class CommandForm extends Component<CommandFormSignature> {
  @tracked name = '';

  <template>
    <form on "submit" this.submit>
      <label for="name">Name</label>
      <Input id="name" @type="text" @value={{this.name}} />
      <label for="file">File</label>
      <input id="file" type="file">
      <input type="submit">Create Command</input>
    </form>
  </template>
}
