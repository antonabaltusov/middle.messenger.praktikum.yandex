import { Block } from 'utils/Block';

import './style.scss';
import 'styles/style.css';
export class ProfileLayout extends Block<{}> {
  static componentName = 'ProfileLayout';
  constructor() {
    super();
  }
  render() {
    return `
    <main class="gradient df-center full-screen profile-wrapper">
        {{{ CloseButton }}}
        <div data-layout=1></div>
    </main>
    `;
  }
}
