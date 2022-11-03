import { renderDOM } from 'utils/renderDom';

import Button from 'components/Button';
import Link from 'components/Link';
import GradientModal from 'components/layouts/gradient-modal';

import registerComponent from 'utils/registerComponent';
import FormInput from 'components/Form-input';
import { registration } from './registration';
import Input from 'components/input';
import InputError from 'components/inputError';
import FormRegistr from 'blocks/FormRegistr';

registerComponent(Button);
registerComponent(Link);
registerComponent(GradientModal);
registerComponent(FormInput);
registerComponent(FormRegistr);
registerComponent(Input);
registerComponent(InputError);

document.addEventListener('DOMContentLoaded', () => {
  const App = new registration();

  renderDOM('#app', App);
});
