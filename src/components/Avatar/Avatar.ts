import { Block } from 'utils/Block';
import imgDefault from 'assets/avatar-default.png';
import './style.scss';

type AvatarProps = {
  img: string;
  link: string;
  default: string;
};

export class Avatar extends Block<AvatarProps> {
  static componentName = 'Avatar';
  constructor({ img, link }: AvatarProps) {
    super({
      default: imgDefault,
      img: img,
      link,
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
          <a class="avatar__overflow df-center" href="{{link}}">
            <p class="avatar-text" >change<br />avatar</p>
          </a>
        {{/if}}
      </div>
    </div>
    `;
  }
}
