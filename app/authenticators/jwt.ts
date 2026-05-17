import BaseAuthenticator from 'ember-simple-auth/authenticators/base';
import config from 'glorp/config/environment';

interface LoginResponse {
  token: string;
  userId: string;
}

export default class JwtAuthenticator extends BaseAuthenticator {
  async authenticate(email: string, password: string) {
    let response = await fetch(`${config.APP.apiHost}/users/log_in`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password}),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    let data = (await response.json()) as LoginResponse;

    return data;
  }

  async restore(data: LoginResponse) {
    return data;
  }

  async invalidate() {}
}
