import { Block } from 'utils/Block';
import './style.scss';

import 'styles/style.css';
export class Body extends Block<{}> {
  static componentName = 'Body';
  constructor() {
    super();
  }
  render() {
    return `
    <main>
        <div data-layout=1></div>
    </main>
    `;
  }
}
