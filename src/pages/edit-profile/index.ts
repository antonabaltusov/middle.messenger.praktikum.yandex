import { renderDOM } from 'utils/renderDom';

import Button from 'components/Button';
import Link from 'components/Link';

import registerComponent from 'utils/registerComponent';
import FormInput from 'components/Form-input';
import ProfileLayout from 'components/layouts/profile';
import { EditProfile } from './EditProfile';
import CloseButton from 'components/close-button';
import { GradientModal } from 'components/layouts/gradient-modal/gradient-modal';
import avatar from 'components/Avatar';
import Input from 'components/input';
import InputError from 'components/inputError';
import FormProfile from 'blocks/FormProfile';

registerComponent(Button);
registerComponent(Link);
registerComponent(FormProfile);
registerComponent(GradientModal);
registerComponent(ProfileLayout);
registerComponent(FormInput);
registerComponent(Input);
registerComponent(InputError);
registerComponent(CloseButton);
registerComponent(avatar);

document.addEventListener('DOMContentLoaded', () => {
  const App = new EditProfile();

  renderDOM('#app', App);
});
