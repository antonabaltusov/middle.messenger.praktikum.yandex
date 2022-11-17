import { renderDOM } from 'utils/renderDom';

import Button from 'components/Button';
import Link from 'components/Link';
import GradientModal from 'components/layouts/gradient-modal';
import { SingIn } from './sing-in';

import registerComponent from 'utils/registerComponent';
import Input from 'components/input';
import InputError from 'components/inputError';
import FormSingIn from 'blocks/FormSingIn';
import FormInput from 'components/Form-input';

registerComponent(Button);
registerComponent(Link);
registerComponent(GradientModal);
registerComponent(FormInput);
registerComponent(FormSingIn);
registerComponent(Input);
registerComponent(InputError);

document.addEventListener('DOMContentLoaded', () => {
  const App = new SingIn();

  renderDOM('#app', App);
});
