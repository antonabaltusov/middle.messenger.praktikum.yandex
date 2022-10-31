import { renderDOM } from "./utils/renderDom";
import singIn from "./pages/sing-in";
import "./styles/style.css";
// @ts-ignore
import Button from "./components/Button";
import Link from "./components/Link";

import registerComponent from "./utils/registerComponent";

document.addEventListener("DOMContentLoaded", () => {
  registerComponent(Button);
  registerComponent(Link);
  const singin = new singIn();

  renderDOM("#app", singin);
});
