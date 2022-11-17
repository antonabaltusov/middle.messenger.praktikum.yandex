import { Block } from 'utils/Block';
import './style.scss';

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
        click: onClick,
      },
    });
  }
  render() {
    return '<a {{#if link}}href="{{link}}"{{/if}} class="link">{{text}}</a>';
  }
}
