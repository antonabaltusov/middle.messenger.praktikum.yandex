import Block from 'utils/Block';
import './style.scss';

type ErrorProps = {
  codeError: string;
  message: string;
};

export class ErrorComponent extends Block<ErrorProps> {
  constructor(props: ErrorProps) {
    super(props);
  }

  render() {
    return `
    <div class="error df-column-center full-screen">
        <h1>{{codeError}}</h1>
        <p>{{message}}</p>
        {{{ Link text='Go Back' link="${window.history.state.prevUrl}"}}}
    </div>
    `;
  }
}
