import Route from '@ember/routing/route';

export default class HomeRoute extends Route {
  async beforeModel() {
    console.log('home route beforeModel');
    await super.beforeModel(...arguments);
  }
}
