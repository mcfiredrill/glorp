import Component from '@glimmer/component';
import SessionService from 'glorp/services/session';
import { service } from '@ember/service';
import { on } from '@ember/modifier';
import { tracked } from '@glimmer/tracking';

export interface LoginFormSignature {
  // The arguments accepted by the component
  Args: {};
  // Any blocks yielded by the component
  Blocks: {
    default: []
  };
  // The element to which `...attributes` is applied in the component template
  Element: null;
}

export default class LoginForm extends Component<LoginFormSignature> {
  @service declare session: SessionService;

  @tracked
  email = '';
  @tracked
  password = '';

  updateEmail = (event: Event) => {
    this.email = (event.target as HTMLInputElement).value;
  };

  updatePassword = (event: Event) => {
    this.password = (event.target as HTMLInputElement).value;
  };

  login = async (event: SubmitEvent) => {
    event.preventDefault();

    await this.session.authenticate(
      'authenticator:jwt',
      this.email,
      this.password
    );
  };

  <template>
    <h1>Login</h1>
    <form {{on "submit" this.login}}>
      <input
        type="email"
        value={{this.email}}
        {{on "input" this.updateEmail}}
      />
      <input
        type="password"
        value={{this.password}}
        {{on "input" this.updatePassword}}
      />
      <button type="submit">
      Login
      </button>
    </form>
  </template>
}
