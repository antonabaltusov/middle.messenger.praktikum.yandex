import { Block } from 'utils/Block';
import Route from './Route';

export default class Router {
  // eslint-disable-next-line no-use-before-define
  static _instance: Router;

  rootQuery: string = '';
  routes: Route[] = [];
  history: History = window.history;
  currentRoute: Route | null = null;

  constructor(rootQuery: string) {
    if (Router._instance) return Router._instance;

    this.routes = [];
    this.history = window.history;
    this.currentRoute = null;
    this.rootQuery = rootQuery;

    Router._instance = this;
  }

  use(path: string, component: typeof Block, props = {}) {
    this.routes.push(
      new Route(path, component, { ...props, rootQuery: this.rootQuery })
    );
    return this;
  }

  start() {
    window.onpopstate = () => {
      this._onRoute(window.location.pathname);
    };
    this._onRoute(window.location.pathname);
  }

  go(path: string) {
    this.history.pushState({}, '', path);
    this._onRoute(path);
  }

  back() {
    window.history.back();
  }

  forward() {
    window.history.forward();
  }

  _onRoute(path: string) {
    const route = this.getRoute(path);

    if (!route) {
      return;
    }

    if (this.currentRoute && this.currentRoute !== route)
      this.currentRoute.leave();

    this.currentRoute = route;

    route.render();
  }

  getRoute(path: string) {
    const route = this.routes.find((route) => route.match(path));
    if (route) {
      return route;
    } else {
      return this.routes.find((route) => route.match('*'));
    }
  }
}
