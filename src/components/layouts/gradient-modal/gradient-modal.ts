import Block from 'utils/Block';

import './style.scss';
import 'styles/style.css';
export class GradientModal extends Block {
  constructor() {
    super();
  }
  render() {
    return `
    <div class="gradient df-center full-screen">
      <div class="modal df-column-center">
        <div data-layout=1></div>
      </div>
    </div>
    `;
  }
}
