import Component from '@glimmer/component';

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
  <template>
    {{yield}}
  </template>
}
