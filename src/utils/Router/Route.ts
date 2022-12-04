import { Block } from 'utils/Block';
import { renderDOM } from 'utils/renderDom';

export default class Route {
  component: typeof Block;
  path: string;
  block: Block<{}> | null;
  props: any;

  constructor(path: string, component: typeof Block, props = {}) {
    this.path = path;
    this.component = component;
    this.block = null;
    this.props = props;
  }

  render() {
    if (this.block) {
      this.block._removeEvents();
      this.block = null;
    }

    this.block = new this.component(this.props);
    renderDOM(this.props.rootQuery, this.block);
  }

  navigate(path: string) {
    if (this.match(path)) this.render();
  }

  leave() {
    if (this.block) this.block.componentBeforeUnmount();
  }

  match(path: string) {
    if (this.props.withId) return path.includes(this.path);
    return path == this.path;
  }
}
