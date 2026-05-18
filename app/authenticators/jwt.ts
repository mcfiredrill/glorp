import BaseAuthenticator from 'ember-simple-auth/authenticators/base';
import config from 'glorp/config/environment';

interface LoginResponse {
  token: string;
  user: {
    id: number | string;
  };
}

interface AuthenticatedSessionData {
  token: string;
  userId: string;
}

export default class JwtAuthenticator extends BaseAuthenticator {
  async authenticate(email: string, password: string) {
    const response = await fetch(`${String(config.APP.apiHost)}/users/log_in`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: { email, password } }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = (await response.json()) as LoginResponse;

    return {
      token: data.token,
      userId: String(data.user.id),
    } satisfies AuthenticatedSessionData;
  }

  restore(data: Partial<AuthenticatedSessionData>): Promise<AuthenticatedSessionData> {
    if (data.token) {
      console.log("we have token: ", data.token);
      return Promise.resolve(data as AuthenticatedSessionData);
    }

    return Promise.reject(new Error("Invalid session"));
  }

  async invalidate() {}
}
