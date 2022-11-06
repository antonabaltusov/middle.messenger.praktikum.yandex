import { renderDOM } from 'utils/renderDom';

import Block from 'utils/Block';
import Link from 'components/Link';
import GradientModal from 'components/layouts/gradient-modal';

import registerComponent from 'utils/registerComponent';

registerComponent(Link);
registerComponent(GradientModal);

export class Main extends Block<{}> {
  constructor() {
    super();
  }

  render() {
    return `
    {{#GradientModal}}
      <nav>
        <ul>
          <li>
            {{{Link link="./registration" text="registration"}}}
          </li>
          <li>
            {{{Link link="./sing-in" text="sing-in"}}}
          </li>
          <li>
            {{{Link link="./profile" text="profile"}}}
          </li>
          <li>
            {{{Link link="./new-avatar" text="new-avatar"}}}
          </li>
          <li>
            {{{Link link="./massenger" text="massenger"}}}
          </li>
          <li>
            {{{Link link="./edit-profile" text="edit-profile"}}}
          </li>
          <li>
            {{{Link link="./change-password" text="change-password"}}}
          </li>
          <li>
            {{{Link link="./500" text="500"}}}
          </li>
          <li>
            {{{Link link="./404" text="404"}}}
          </li>
        </ul>
      </nav>
    {{/GradientModal}}
  `;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const App = new Main();

  renderDOM('#app', App);
});
