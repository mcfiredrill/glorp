import Service from 'ember-simple-auth/services/session';

interface AuthenticatedData {
  token: string;
  userId: string;
}

export default class SessionService extends Service {
  declare data: {
    authenticated: AuthenticatedData;
  };

  get token(): string | undefined {
    return this.data.authenticated?.token;
  }

  get userId(): string | undefined {
    return this.data.authenticated?.userId;
  }
}

declare module '@ember/service' {
  interface Registry {
    session: SessionService;
  }
}
