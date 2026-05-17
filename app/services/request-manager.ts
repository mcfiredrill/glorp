import { Fetch, RequestManager } from '@warp-drive/core';
import { getOwner } from '@ember/application';

const AuthenticatedFetch = {
  request(context: unknown, next: (req: Request) => Promise<Response>) {
    let owner = getOwner(context);
    let session = owner.lookup('service:session');

    return next((request: Request) => {
      let headers = new Headers(request.headers);

      if (session.token) {
        headers.set('Authorization', `Bearer ${session.token}`);
      }

      return new Request(request, { headers });
    });
  },
};

export default new RequestManager()
  .use([AuthenticatedFetch, Fetch]);
