import Block from 'utils/Block';

import './style.scss';
import 'styles/style.css';
export class ProfileLayout extends Block {
  constructor() {
    super();
  }
  render() {
    return `
    <div class="gradient df-center full-screen profile-wrapper">
        {{{ CloseButton }}}
        <div data-layout=1></div>
    </div>
    `;
  }
}
