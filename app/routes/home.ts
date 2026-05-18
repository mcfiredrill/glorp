import Route from '@ember/routing/route';
import { service } from '@ember/service';
import SessionService from 'glorp/services/session';
import Store from 'glorp/services/store';
import { query } from '@warp-drive/utilities/json-api';
import type Command from 'glorp/models/command';

export interface HomeRouteModel {
  commands: Command[];
}

export default class HomeRoute extends Route {
  @service declare session: SessionService;
  @service declare store: Store;

  async model(): Promise<HomeRouteModel> {
    if (!this.session.isAuthenticated) {
      return [];
    }

    const commands = await this.store.findAll('command');

    return commands;
  }
}
