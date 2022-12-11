import { Block } from 'utils/Block';
import { Screens } from 'utils/screenList';
export class SingIn extends Block<{}> {
  constructor() {
    super();
  }

  render() {
    return `
    {{#GradientModal}}
      <h1>Login</h1>
        {{{FormSingIn}}}
        {{{Link link="${Screens.Registration}" text="registration"}}}
    {{/GradientModal}}
  `;
  }
}
