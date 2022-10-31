import { Block } from "../../../utils/Block";

import "./style.scss";
import "../../../styles/style.css";
export class Body extends Block {
  constructor() {
    super();
  }
  render() {
    return `
    <div>
        <div data-layout=1></div>
    </div>
    `;
  }
}
