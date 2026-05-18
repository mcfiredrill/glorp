import { service } from '@ember/service';
import { JSONAPIAdapter } from '@warp-drive/legacy/adapter/json-api';
import config from 'glorp/config/environment';
import SessionService from 'glorp/services/session';

export default class ApplicationAdapter extends JSONAPIAdapter {
  @service declare session: SessionService;

  get host(): string {
    return String(config.APP.apiHost);
  }

  get headers(): Record<string, string> {
    if (!this.session.token) {
      return {};
    }

    return {
      Authorization: `Bearer ${this.session.token}`,
    };
  }
}
