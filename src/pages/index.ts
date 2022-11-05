import { renderDOM } from 'utils/renderDom';

import Block from 'utils/Block';
import Link from 'components/Link';
import GradientModal from 'components/layouts/gradient-modal';

import registerComponent from 'utils/registerComponent';

registerComponent(Link);
registerComponent(GradientModal);

export class main extends Block<{}> {
  constructor() {
    super();
  }

  render() {
    return `
    {{#GradientModal}}
        {{{Link link="./registration" text="registration"}}}
        {{{Link link="./sing-in" text="sing-in"}}}
        {{{Link link="./profile" text="profile"}}}
        {{{Link link="./new-avatar" text="new-avatar"}}}
        {{{Link link="./massenger" text="massenger"}}}
        {{{Link link="./edit-profile" text="edit-profile"}}}
        {{{Link link="./change-password" text="change-password"}}}
        {{{Link link="./500" text="500"}}}
        {{{Link link="./404" text="404"}}}
    {{/GradientModal}}
  `;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const App = new main();

  renderDOM('#app', App);
});
