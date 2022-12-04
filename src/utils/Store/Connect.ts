import { Block } from 'utils/Block';
import store from '.';
import Store from './Store';

export default function Connect(
  Component: typeof Block,
  mapStateToProps: (store: AppState) => any
) {
  return class extends Component<Indexed> {
    constructor(props = {}) {
      super({ ...props, ...mapStateToProps(store.getState()) });

      store.on(Store.EVENT_UPDATE, () => {
        this.setProps({ ...mapStateToProps(store.getState()) });
      });
    }
  };
}
