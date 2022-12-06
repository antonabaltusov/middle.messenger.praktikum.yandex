import { userAPI } from 'api/user-api';
import { apiHasError } from 'utils/apiHasError';
import { Block } from 'utils/Block';
import './style.scss';
import { Router } from 'utils/Router';
import { Screens } from 'utils/screenList';
import { authAPI } from 'api/login-api';
import { addUserData } from 'utils/Store/Action';
import { transformUser } from 'utils/apiTransformers';
const router = new Router('#app');
export class NewAvatar extends Block<{}> {
  constructor(props: Record<string, any>) {
    super({
      ...props,
      events: {
        submit: async (e: Event) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          const input = document.getElementById(
            'inputAvatar'
          ) as HTMLInputElement;

          if (input && input.files?.length) {
            try {
              const response = await userAPI.newAvatar(formData);

              if (apiHasError(response)) {
                this.refs.ErrorForm?.setProps({ text: response.reason });
                return;
              }
              this.refs.ErrorForm?.setProps({ text: '' });
              const user = await authAPI.me();
              addUserData(transformUser(user));
              router.go(Screens.Profile);
            } catch (err) {
              console.error(err);
            }
          }
        },
        change: (e: InputEvent) => {
          const input = e.target as HTMLInputElement;
          if (!FileReader) {
            alert('FileReader не поддерживается — облом');
            return;
          }

          if (!input.files?.length) {
            alert('Ничего не загружено');
            return;
          }
          const fileReader = new FileReader();
          fileReader.onload = () => {
            this.refs.Avatar.setProps({ img: fileReader.result });
          };
          fileReader.readAsDataURL(input.files[0]);
        },
      },
    });
  }
  render() {
    return `
        {{#ProfileLayout}}
          <div class="df-column-center modal">
            {{{ Avatar img=user.avatar ref="Avatar"}}}
            <form>
              <input name='avatar' type="file" id="inputAvatar">
              {{{ Button type="submit" label='Save'}}}
            </form>
            {{{InputError ref="ErrorForm"}}}
          </div>
        {{/ProfileLayout}}
        `;
  }
}
