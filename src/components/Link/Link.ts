import { Block } from 'utils/Block';
import './style.scss';
import { Router } from 'utils/Router';

const router = new Router('#app');
type IncomingProps = {
  link: string;
  text: string;
  onClick?: () => void;
};
type Props = {
  link: string;
  text: string;
  events: {
    click?: () => void;
  };
};

export class Link extends Block<Props> {
  static componentName = 'Link';
  constructor({ onClick, ...props }: IncomingProps) {
    super({
      ...props,
      events: {
        click: () => {
          if (onClick) {
            onClick();
          } else {
            router.go(props.link);
          }
        },
      },
    });
  }
  render() {
    return '<a class="link">{{text}}</a>';
  }
}
