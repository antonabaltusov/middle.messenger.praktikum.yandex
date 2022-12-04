import { Block } from 'utils/Block';
import './style.scss';
import img from 'assets/close.svg';
import { Router } from 'utils/Router';

type IncomingProps = {
  onClick?: () => void;
};
type Props = {
  img: string;
  events: {
    click: () => void;
  };
};
const router = new Router('#app');
export class CloseButton extends Block<Props> {
  static componentName = 'CloseButton';
  constructor({ onClick }: IncomingProps) {
    if (!onClick) {
      onClick = () => router.back();
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
