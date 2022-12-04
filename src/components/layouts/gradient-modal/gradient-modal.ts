import { Block } from 'utils/Block';

import './style.scss';
import 'styles/style.css';
export class GradientModal extends Block<{}> {
  static componentName = 'GradientModal';
  constructor() {
    super();
  }
  render() {
    return `
    <main class="gradient df-center full-screen">
      <div class="modal df-column-center">
        <div data-layout=1></div>
      </div>
    </main>
    `;
  }
}
