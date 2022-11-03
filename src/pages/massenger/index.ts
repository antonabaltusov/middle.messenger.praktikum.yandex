import { renderDOM } from 'utils/renderDom';

import Button from 'components/Button';
import Link from 'components/Link';

import registerComponent from 'utils/registerComponent';
import FormInput from 'components/Form-input';
import { Massenger } from './Massenger';
import avatar from 'components/Avatar';
import Body from 'components/layouts/body';
import ChatItem from 'components/chat';
import ChatList from 'components/ChatList';
import MassegeItem from 'components/MassegeItem';
import MassegeList from 'components/MassegeList';
import Input from 'components/input';
import FormMassenger from 'blocks/FormMassenger';

registerComponent(Button);
registerComponent(Link);
registerComponent(Body);
registerComponent(FormInput);
registerComponent(FormMassenger);
registerComponent(Input);
registerComponent(avatar);
registerComponent(ChatItem);
registerComponent(ChatList);
registerComponent(MassegeItem);
registerComponent(MassegeList);

document.addEventListener('DOMContentLoaded', () => {
  const App = new Massenger();

  renderDOM('#app', App);
});
