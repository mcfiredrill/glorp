import { Fetch, RequestManager } from '@warp-drive/core';
import { getOwner } from '@ember/application';
import config from 'glorp/config/environment';

const API_HOST = config.APP.apiHost;

const AuthenticatedFetch = {
  request(context: unknown, next: (req: Request) => Promise<Response>) {
    const owner = getOwner(context);
    const session = owner.lookup('service:session');

    return next((request: Request) => {
      const url = new URL(request.url, API_HOST);

      // clone request onto new URL
      const nextRequest = new Request(url.toString(), request);

      // add auth header
      if (session.token) {
        nextRequest.headers.set(
          'Authorization',
          `Bearer ${session.token}`
        );
      }

      return nextRequest;
    });
  },
};

export default new RequestManager()
.use([AuthenticatedFetch, Fetch]);
