import Block from 'utils/Block';
import './style.scss';

type IncomingProps = {
  codeError: string;
  message: string;
  onClick?: () => void;
};

export class ErrorComponent extends Block<IncomingProps> {
  static componentName = 'ErrorComponent';
  constructor(props: IncomingProps) {
    super({
      ...props,
      onClick: () => {
        history.back();
      },
    });
  }

  render() {
    return `
    <div class="error df-column-center full-screen">
        <h1>{{codeError}}</h1>
        <p>{{message}}</p>
        {{{ Link text='Go Back' onClick=onClick }}}
    </div>
    `;
  }
}
