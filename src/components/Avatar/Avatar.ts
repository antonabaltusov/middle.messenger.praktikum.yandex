import { Block } from 'utils/Block';
import imgDefault from 'assets/avatar-default.png';
import './style.scss';
import { Router } from 'utils/Router';
import { Screens } from 'utils/screenList';
type AvatarIncomingProps = {
  img: string;
  link: string;
};
type AvatarProps = {
  img: string;
  default: string;
  link: string;
  events: {
    click: () => void;
  };
};
const router = new Router('#app');
export class Avatar extends Block<AvatarProps> {
  static componentName = 'Avatar';
  constructor({ img, link }: AvatarIncomingProps) {
    super({
      default: imgDefault,
      img: img,
      link: link,
      events: {
        click: () => {
          if (link) {
            router.go(Screens.NewAvatar);
          }
        },
      },
    });
  }
  render() {
    return `
    <div class="avatar-wrapper">
      <div class="avatar">
        {{#if img}}
          <img class="avatar-img" src="{{img}}" alt="Avatar" />
        {{else}}
          <img class="avatar-img default" src="{{default}}" alt="Avatar" />
        {{/if}}
        {{#if link}}
          <a class="avatar__overflow df-center">
            <p class="avatar-text" >change<br />avatar</p>
          </a>
        {{/if}}
      </div>
    </div>
    `;
  }
}
