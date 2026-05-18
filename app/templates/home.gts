import Component from '@glimmer/component';
import { pageTitle } from 'ember-page-title';
import { service } from '@ember/service';
import CommandList from 'glorp/components/command-list';
import Glop from 'glorp/components/glop';
import LoginForm from 'glorp/components/login-form';
import type { HomeRouteModel } from 'glorp/routes/home';
import SessionService from 'glorp/services/session';

export interface HomeSignature {
  Args: {
    model: HomeRouteModel;
    controller: unknown;
  };
}

export default class HomeTemplate extends Component<HomeSignature> {
  @service declare session: SessionService;

  <template>
    {{pageTitle "Home"}}
    {{#if this.session.isAuthenticated}}
      <Glop />
      <CommandList @commands={{@model}} />
    {{else}}
      <LoginForm />
    {{/if}}
    {{outlet}}
  </template>
}
