import { renderDOM } from "../../utils/renderDom";

import Button from "../../components/Button";
import Link from "../../components/Link";

import registerComponent from "../../utils/registerComponent";
import FormInput from "../../components/Form-input";
import { Massenger } from "./Massenger";
import avatar from "../../components/avatar";
import Body from "../../components/layouts/body";
import ChatItem from "../../components/chat";
import ChatList from "../../components/chat-list";
import MassegeItem from "../../components/MassegeItem";
import MassegeList from "../../components/MassegeList";

registerComponent(Button);
registerComponent(Link);
registerComponent(Body);
registerComponent(FormInput);
registerComponent(avatar);
registerComponent(ChatItem);
registerComponent(ChatList);
registerComponent(MassegeItem);
registerComponent(MassegeList);

document.addEventListener("DOMContentLoaded", () => {
  const App = new Massenger();

  renderDOM("#app", App);
});
