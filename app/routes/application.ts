import Route from '@ember/routing/route';
import { service } from '@ember/service';
import SessionService from 'glorp/services/session';

export default class ApplicationRoute extends Route {
  @service declare session: SessionService;

  async beforeModel() {
    console.log('app route beforeModel');
    await super.beforeModel(...arguments);
    await this.session.setup();
  }
}
