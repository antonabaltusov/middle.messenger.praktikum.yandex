import { Block } from "../../utils/Block";
import "./style.scss";

interface ErrorProps {
  codeError: string;
  message: string;
}

export class Error extends Block {
  constructor(props: ErrorProps) {
    super(props);
  }
  render() {
    return `
    <div class="error df-column-center full-screen">
        <h1>{{codeError}}</h1>
        <p>{{message}}</p>
        {{{ Link text='Go Back' link="javascript:history.back()"}}}
    </div>
    `;
  }
}
