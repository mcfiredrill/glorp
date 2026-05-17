import { Fetch, RequestManager } from '@warp-drive/core';
import { getOwner } from '@ember/application';
import config from 'glorp/config/environment';

const API_HOST = config.APP.apiHost;

const AuthenticatedFetch = {
  request(context: unknown, next: (req: Request) => Promise<Response>) {
    let owner = getOwner(context);
    let session = owner.lookup('service:session');

    return next((request: Request) => {
      let url = new URL(request.url, API_HOST);

      // clone request onto new URL
      let nextRequest = new Request(url.toString(), request);

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
