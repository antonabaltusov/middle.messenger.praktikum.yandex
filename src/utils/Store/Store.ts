import EventBus from '../EventBus';

export default class Store extends EventBus {
  static EVENT_UPDATE = 'EVENT_UPDATE';
  // eslint-disable-next-line no-use-before-define
  static _instance: Store;
  static STORE_NAME = 'myAppStore';

  _state = {} as Indexed;

  constructor(defaultStore?: AppState) {
    if (Store._instance) return Store._instance;

    super();

    this._state = defaultStore ?? {};
    Store._instance = this;
  }

  getState() {
    return this._state as AppState;
  }

  removeState() {
    this._state = {};
    this.emit(Store.EVENT_UPDATE);
  }

  set(id: string, value: any) {
    this._state[id] = value;
    this.emit(Store.EVENT_UPDATE);
    return this;
  }
}
