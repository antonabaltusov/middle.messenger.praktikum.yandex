import Block from 'utils/Block';
import './style.scss';
import img from 'assets/close.svg';

type IncomingProps = {
  onClick?: () => void;
};
type Props = {
  img: string;
  events: {
    click: () => void;
  };
};

export class CloseButton extends Block<Props> {
  constructor({ onClick }: IncomingProps) {
    if (!onClick) {
      onClick = () => (window.location.href = '/massenger');
    }
    super({
      img,
      events: {
        click: onClick,
      },
    });
  }
  render() {
    return `
    <button onclick="{{click}}" class="close-button"><img src="{{img}}" alt="x"></button>
    `;
  }
}
