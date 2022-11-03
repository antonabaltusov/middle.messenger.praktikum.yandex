import { renderDOM } from 'utils/renderDom';

import Link from 'components/Link';
import registerComponent from 'utils/registerComponent';
import { Page404 } from './Page404';
import Body from 'components/layouts/body';
import Error from 'components/ErrorComponent';

registerComponent(Link);
registerComponent(Error);
registerComponent(Body);
document.addEventListener('DOMContentLoaded', () => {
  const App = new Page404();

  renderDOM('#app', App);
});
