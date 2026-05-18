import Component from '@glimmer/component';
import { pageTitle } from 'ember-page-title';
import { service } from '@ember/service';
import Glop from 'glorp/components/glop';
import LoginForm from 'glorp/components/login-form';
import SessionService from 'glorp/services/session';

export interface HomeSignature {
  Args: {
    model: unknown;
    controller: unknown;
  };
}

export default class HomeTemplate extends Component<HomeSignature> {
  @service declare session: SessionService;

  <template>
    {{pageTitle "Home"}}
    {{log this.session.isAuthenticated}}
    {{#if this.session.isAuthenticated}}
      <Glop />
    {{else}}
      <LoginForm />
    {{/if}}
    {{outlet}}
  </template>
}
