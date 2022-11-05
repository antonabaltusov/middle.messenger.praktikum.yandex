import { renderDOM } from 'utils/renderDom';

import Link from 'components/Link';
import registerComponent from 'utils/registerComponent';
import { Page500 } from './Page500';
import Body from 'components/layouts/body';
import ErrorComponent from 'components/ErrorComponent';

registerComponent(Link);
registerComponent(ErrorComponent);
registerComponent(Body);
document.addEventListener('DOMContentLoaded', () => {
  const App = new Page500();

  renderDOM('#app', App);
});
